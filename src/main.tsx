import React from 'react'
import ReactDOM from 'react-dom/client'
import InformaWeb from './InformaWeb.tsx'
import './index.css'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <InformaWeb />
    </HashRouter>
  </React.StrictMode>,
)
