import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import { RouterProvider } from "react-router"; // Use "react-router" NOT "react-router-dom"
import { router } from "./router/router.jsx"; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

=======
import { RouterProvider } from 'react-router'
import { router } from './config/router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
>>>>>>> dev
