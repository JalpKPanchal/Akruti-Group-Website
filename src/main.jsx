import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';     // ✅ Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ✅ Bootstrap JS (for dropdowns, modals, etc.)


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
