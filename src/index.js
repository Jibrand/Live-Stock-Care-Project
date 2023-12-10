import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import CounterProvider from './components/Context/CounterProvider';

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <CounterProvider>
        <App />
      </CounterProvider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
