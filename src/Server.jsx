import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import template from './index.handlebars';
import App from './App.jsx';

exports.render = () => {
  return (req, res) => {
    const context = {};
    const pageHtml = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );
    // console.log(pageContent);
    res.status(context.status || 200);
    res.send(template({ content: pageHtml }));
    res.end();
  };
}