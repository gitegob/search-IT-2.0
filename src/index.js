import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalProvider } from './contexts/GlobalContext';

ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  document.getElementById('root'),
);