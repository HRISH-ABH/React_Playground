import React, { useContext } from 'react'
import { recipeContext } from '../contexts/RecipeContext';

const Recipes = () => {
   const {recipes,setRecipes}= useContext(recipeContext);
  return (
    recipes.length>0?(
    <div className='max-w-4xl mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {recipes.map((recipe)=>(
        <div key={recipe.id} className='bg-zinc-800 p-4 rounded-lg'>
          <img src={recipe.image} alt={recipe.title} className='w-full h-48 object-cover rounded-md mb-2'/>
          <h3 className='text-xl font-bold mb-2'>{recipe.title}</h3>
          <h3 className='text-sm font-bold mb-2 text-zinc-200'>{(recipe.category).toString().toUpperCase()}</h3>
          <p className='text-zinc-300 tex-sm'>{recipe.description}</p>
        </div>
      ))}
    </div>
    ):(
      <div className='text-center mt-10 text-xl'>No recipes found. Please add some recipes.</div>
    )
  )
}

export default Recipes