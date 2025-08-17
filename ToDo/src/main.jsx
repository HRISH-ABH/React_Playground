import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
 <>
    <App />
    <ToastContainer  position={window.innerWidth < 600 ? "bottom-center" : "top-right"} autoClose={1000}/>
 </>

)
