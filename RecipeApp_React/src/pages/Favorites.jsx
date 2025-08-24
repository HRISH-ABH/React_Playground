import React, {  useState } from "react";
import RecipeCard from "../components/RecipeCard";


const Favorites = () => {
 const [favorites,setFavorites] = useState(() => {
   return JSON.parse(localStorage.getItem("favorites")) || [];
 });
  return favorites.length > 0 ? (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <RecipeCard recipes={favorites}  />
      </div>
    </div>
  ) : (
    <div className="text-center mt-10 text-xl">
      No recipes found. Please add some recipes.
    </div>
  );
};

export default Favorites;
