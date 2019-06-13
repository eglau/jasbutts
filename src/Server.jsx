import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import template from './index.handlebars';
import App from './App.jsx';

exports.render = (manifest) => {
  return (req, res) => {
    // Generate page html string
    const context = {};
    const pageHtml = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );
    
    // Generate assets from manifest
    let assets = { css: [], js: [] };
    Object.values(manifest).forEach((asset) => {
      if (/\.css$/.test(asset)) {
        assets.css.push(`<link rel="stylesheet" href="${asset}" />`);
      } else if (/\.js$/.test(asset)) {
        assets.js.push(`<script async src="${asset}" />`);
      }
    });
    assets.css = assets.css.join('');
    assets.js = assets.js.join('');

    // Serve the server-rendered page
    res.status(context.status || 200);
    res.send(template({ content: pageHtml, assets }));
    res.end();
  };
}