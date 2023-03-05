import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import MainPage from './pages/MainPage'
import SecondPage from './pages/SecondPage'
import UseReducerHook from './components/UseReducerHook'  
import UseLayoutEffectHook from './components/UseLayoutEffectHook'
import UseImperativeHandleHook from './components/UseImperatveHandleHook/UseImperativeHandleHook'
import { BrowserRouter, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
)
