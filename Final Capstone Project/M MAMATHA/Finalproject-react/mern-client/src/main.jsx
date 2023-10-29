import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
import { CartProvider } from './contexts/Cart1'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/*   <RouterProvider router={router} /> */}
   <AuthProvider>
<CartProvider>
<RouterProvider router={router} />
</CartProvider>

   </AuthProvider>
  </React.StrictMode>,
)
