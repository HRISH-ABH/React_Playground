import React from 'react'
import MainRoutes from './routes/MainRoutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-600 text-white p-4'>
      <Navbar/>
      <MainRoutes/>
    </div>
  )
}

export default App