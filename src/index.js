import React from 'react';
import ReactDOM from 'react-dom';

import './scss/app.scss';
import Root from './root'
import store from './store';

ReactDOM.render( <
  Root store = {
    store
  }
  />,
  document.getElementById('app')
);


if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}