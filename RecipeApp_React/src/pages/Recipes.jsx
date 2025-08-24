import React, { useContext } from "react";
import { recipeContext } from "../contexts/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { recipes } = useContext(recipeContext);
  return recipes.length > 0 ? (
  
      <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <RecipeCard recipes={recipes} />
      </div>
    </div>
    
  ) : (
    <div className="text-center mt-10 text-xl">
      No recipes found. Please add some recipes.
    </div>
  );
};

export default Recipes;
