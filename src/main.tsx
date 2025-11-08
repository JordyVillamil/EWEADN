import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // Asegúrate de que esta línea esté
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)