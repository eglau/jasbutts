const path = require('path');
// const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const moduleConfig = (isClientSide) => {
  let rules = [];

  // JSX
  rules.push({
    test: /\.jsx$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      configFile: path.resolve(__dirname, 'babel.config.js')
    }
  });

  // CSS
  let cssRules = {
    test: /\.scss$/,
    use: [
      'css-loader',
      'sass-loader'
    ]
  };
  if (isClientSide) {
    cssRules.use.unshift({
      loader: MiniCssExtractPlugin.loader
    });
  }
  rules.push(cssRules);

  // Handlebars
  rules.push({
    test: /\.handlebars$/,
    loader: 'handlebars-loader'
  });

  // Static assets
  rules.push({
    test: /\.(jpg|jpeg|gif|png)$/,
    loader: 'file-loader'
  });

  return { rules };
};

const resolveConfig = {
  alias: {
    Components: path.resolve(__dirname, 'src/components'),
    Images: path.resolve(__dirname, 'src/images'),
    Pages: path.resolve(__dirname, 'src/pages')
  }
};

module.exports = () => {
  return [
    {
      entry: path.resolve(__dirname, 'src/client.jsx'),
      output: {
        filename: 'js/client.js',
        path: path.resolve(__dirname, 'dist/public')
      },
      module: moduleConfig(true),
      plugins: [
        new ManifestPlugin({
          publicPath: '/'
        }),
        new MiniCssExtractPlugin({
          filename: 'css/style.css'
        }),
        new CopyPlugin([
          {
            from: path.resolve(__dirname, 'src/images'),
            to: path.resolve(__dirname, 'dist/public/images')
          }
        ])
      ],
      resolve: resolveConfig
    },
    {
      entry: path.resolve(__dirname, 'src/server.jsx'),
      output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist')
      },
      module: moduleConfig(),
      plugins: [
        //new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
      ],
      resolve: resolveConfig
    }
  ];
};
