import React from 'react';
import ReactDOM from 'react-dom';
import  {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes.js';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  //only routes is rendered, as a router type
  <Router>
    <div>
      <Routes/>
    </div>
  </Router>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
