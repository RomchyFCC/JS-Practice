import React from 'react';
import ReactDOM from 'react-dom';
//import './style/index.css';
//import App from './components/App';
import Main from './components/Main';

import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>, 
  document.getElementById('root'));
registerServiceWorker();
