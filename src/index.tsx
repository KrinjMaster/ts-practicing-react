import React from 'react';
import ReactDOM from 'react-dom/client';
import './Index.css';
import App from './App';
import Component from './components/component'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App/>
    <Component/>
  </React.StrictMode>
);
