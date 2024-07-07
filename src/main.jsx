import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Importăm Provider din react-redux
import App from './App';
import store from './store'; // Importăm store-ul Redux configurat

ReactDOM.render(
  <Provider store={store}> {/* Încapsulăm App cu Provider și pasăm store-ul */}
    <App />
  </Provider>,
  document.getElementById('root')
);
