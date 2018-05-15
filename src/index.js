import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <App apiKey={process.env.REACT_APP_NEWS_API_KEY}/>
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
