import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { PortfolioContextProvider } from 'context/PortfolioContext'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PortfolioContextProvider>
        <App />
      </PortfolioContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
