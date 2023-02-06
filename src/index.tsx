import React from 'react';
import ReactDOM from 'react-dom/client';
import './Index.css';
import App from './App';
import Input__counter from './Components/Input-counter'
import Counter from './Components/Counter'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <App/>
    <Input__counter/>
  </React.StrictMode>
);
