import React from 'react';
import ReactDOM from 'react-dom/client';
import './Index.css';
import App from './App';
import Input__counter from './Components/Input-counter'
import Counter from './Components/Counter'
import Render_Count from './Components/Render_Count'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <App/>
    <Render_Count/>
  </React.StrictMode>
);
