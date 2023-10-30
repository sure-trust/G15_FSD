// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import Uploadbooks from './Uploadbooks';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <div>
        <App />
        <Uploadbooks />
      </div>
    </Provider>
  </React.StrictMode>
);
