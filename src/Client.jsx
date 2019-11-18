import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

console.time('hydrate');
window.onload = () => {
  hydrate(app, document.getElementById('application'));
  console.timeEnd('hydrate');
};