import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import RecipeContext from './contexts/RecipeContext.jsx'

createRoot(document.getElementById('root')).render(
  <RecipeContext>
  <BrowserRouter>
  <App/>
  <ToastContainer position='top-right' />
  </BrowserRouter>
  </RecipeContext>

)
