const path = require('path');
const webpack = require('webpack');

const moduleConfig = {
  rules: [
    {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.handlebars$/,
      loader: 'handlebars-loader'
    },
    {
      test: /\.(jpg|jpeg|gif|png)$/,
      loader: 'file-loader'
    }
  ]
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
        filename: 'client.js',
        path: path.resolve(__dirname, 'dist/public')
      },
      module: moduleConfig,
      plugins: [],
      resolve: resolveConfig
    },
    {
      entry: path.resolve(__dirname, 'src/server.jsx'),
      output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist')
      },
      module: moduleConfig,
      plugins: [
        //new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
      ],
      resolve: resolveConfig
    }
  ];
};
