import React, { createContext,  useState } from 'react'
import { initialRecipes } from '../data/dummyData';

export const recipeContext=createContext(null);


const RecipeContext = (props) => {
    const [recipes, setRecipes] = useState(initialRecipes);
  return (
   <recipeContext.Provider value={{recipes,setRecipes}}>
    {props.children}
    </recipeContext.Provider>
  )
}

export default RecipeContext