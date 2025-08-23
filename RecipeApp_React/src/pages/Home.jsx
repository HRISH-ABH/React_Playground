import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { recipeContext } from "../contexts/RecipeContext";

const Home = () => {
  const { recipes } = useContext(recipeContext);

  const recentRecipes = recipes.slice(-3).reverse(); // Get last 3 recipes

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to RecipeBook
        </h1>
        <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
          Discover, create, and share your favorite recipes with our community.
          Start your culinary journey today!
        </p>
        <Link
          to="/create"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
        >
          Create Recipe
        </Link>
      </div>

      {/* Recent Recipes Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-white mb-6">Recent Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentRecipes.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipes/details/${recipe.id}`}
              className="bg-zinc-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  {recipe.title}
                </h3>
                <span className="text-sm font-medium text-zinc-400">
                  {recipe.category.toUpperCase()}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/recipes"
            className="text-blue-400 hover:text-blue-300 font-medium"
          >
            View All Recipes →
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-zinc-800/50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-white mb-3">Create</h3>
          <p className="text-zinc-400">
            Share your culinary masterpieces with detailed recipes and beautiful
            photos.
          </p>
        </div>
        <div className="bg-zinc-800/50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-white mb-3">Organize</h3>
          <p className="text-zinc-400">
            Keep your recipes organized by categories and easily find them when
            needed.
          </p>
        </div>
        <div className="bg-zinc-800/50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-white mb-3">Share</h3>
          <p className="text-zinc-400">
            Share your favorite recipes with friends and family through our
            platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
