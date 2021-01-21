// bootstrap
import $ from "jquery";
import 'bootstrap/dist/js/bootstrap.bundle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// react
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

