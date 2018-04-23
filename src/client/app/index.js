import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/main';

let container = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter basename="/pipesupply/">
    <Main />
  </BrowserRouter>, container
);