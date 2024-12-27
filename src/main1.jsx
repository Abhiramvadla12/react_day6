import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Register from '../component/Register.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Register />
  </StrictMode>,
)
