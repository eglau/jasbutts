import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './style.scss';
import App from './App.jsx';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

hydrate(app, document.getElementById('application'));