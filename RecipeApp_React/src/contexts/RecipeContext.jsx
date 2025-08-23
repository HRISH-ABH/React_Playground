import React, { createContext,  useEffect,  useState } from 'react'
import { initialRecipes } from '../data/dummyData';

export const recipeContext=createContext(null);


const RecipeContext = (props) => {
    const [recipes, setRecipes] = useState(()=>{
        const localData = localStorage.getItem("recipes");
        return localData ? JSON.parse(localData) : initialRecipes;
      });   
    useEffect(() => {
        localStorage.setItem("recipes", JSON.stringify(recipes));
      }, [recipes]);
  return (
   <recipeContext.Provider value={{recipes,setRecipes}}>
    {props.children}
    </recipeContext.Provider>
  )
}

export default RecipeContext