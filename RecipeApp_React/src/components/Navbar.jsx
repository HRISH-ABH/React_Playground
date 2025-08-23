import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='max-w-lg  flex gap-10 justify-between rounded-md  mx-auto px-4 py-2' >
        <NavLink to="/"  className={({isActive}) => isActive ? "text-red-200" : "text-white"}
      >Home</NavLink>
        <NavLink to="/create"className={({isActive}) => isActive ? "text-red-200" : "text-white"} >Create</NavLink>
        <NavLink to="/recipes" className={({isActive}) => isActive ? "text-red-200" : "text-white"}>Recipes</NavLink>
    </div>
  )
}

export default Navbar