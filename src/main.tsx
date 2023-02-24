import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UseReducerHook from './components/UseReducerHook'  
import './index.css'
import UseLayoutEffectHook from './components/UseLayoutEffectHook'
import UseImperativeHandleHook from './components/UseImperatveHandleHook/UseImperativeHandleHook'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UseImperativeHandleHook />
  </React.StrictMode>,
)
