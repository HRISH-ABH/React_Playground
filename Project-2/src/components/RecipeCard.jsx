import React, { useContext } from 'react'
import { recipeContext } from '../contexts/RecipeContext';
import { Link } from 'react-router-dom';

const RecipeCard = () => {
  const {recipes,setRecipes}=  useContext(recipeContext);
  return (
   <>
      {recipes.map((recipe)=>(
        <Link key={recipe.id}  className='bg-zinc-800 rounded-lg hover:scale-105 transition-all duration-300 flex flex-col h-[400px] overflow-hidden shadow-lg hover:shadow-xl' to={`/recipes/details/${recipe.id}`}>
         <div className="h-48 overflow-hidden outline-1">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className='w-full h-full object-cover'
            />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <h3 className='text-xl font-bold text-white mb-2'>{recipe.title}</h3>
            <span className='text-sm font-semibold text-zinc-400 mb-2'>
              {recipe.category.toUpperCase()}
            </span>
            <p className='text-zinc-300 text-sm line-clamp-3'>
              {recipe.description}
            </p>
          </div>
        </Link>
      ))}
   </>
    
  )
}

export default RecipeCard