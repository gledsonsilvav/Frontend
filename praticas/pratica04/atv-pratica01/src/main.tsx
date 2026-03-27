import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App' // Verifique se o nome está correto

// Isso aqui precisa bater com o id="root" que está no seu index.html
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)