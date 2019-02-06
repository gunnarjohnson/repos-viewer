import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
require('es6-promise').polyfill();
import App from './components/App';
import './styles/styles.css';

ReactDOM.render(<App />, document.getElementById('app'));