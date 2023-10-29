import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; // Correct casing
import store from './Store'; // Correct import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/* Use 'store' instead of 'Store' */}
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();

