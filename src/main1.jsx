import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Register from '../component/Register.jsx'
import '../component/register.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Register />
  </StrictMode>,
)