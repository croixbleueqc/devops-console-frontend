import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppApp } from './app';

ReactDOM.render((
  <BrowserRouter>
    <AppApp />
  </BrowserRouter>
), document.getElementById('root'));

