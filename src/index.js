import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Adal from './adal/adal-request';

Adal.processAdalCallback();

// Because ADAL JS uses iframes for requesting access tokens,
// we instantiate our application only if it's loaded in the top frame to prevent additional load
if (window === window.parent) {
  ReactDOM.render( <App />, document.getElementById('root'));
}
