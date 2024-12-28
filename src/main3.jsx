import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Otp from '../component/otp'

import '../component/otp.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Otp />
  </StrictMode>,
)