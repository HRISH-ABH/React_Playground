import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { recipeContext } from "../contexts/RecipeContext";
import { toast } from "react-toastify";
import Modal from "../components/Modal";
import { useForm } from "react-hook-form";

const RecipeDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, setRecipes } = useContext(recipeContext);
  const recipe = recipes.find((recipe) => recipe.id === id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: recipe, // Pre-fill form with existing recipe data
  });

  const updateRecipe = (data) => {
    const updatedRecipes = recipes.map((r) =>
      r.id === id ? { ...r, ...data } : r
    );
    setRecipes(updatedRecipes);
    setIsModalOpen(false);
    toast.success("Recipe updated successfully!");
  };

  const deleteRecipe = (recipeId) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
    setRecipes(updatedRecipes);
    navigate("/recipes");
    toast.success("Recipe deleted successfully!");
  };

  if (!recipe) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl text-white mb-4">Recipe not found!</h2>
        <button
          onClick={() => navigate("/recipes")}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Back to Recipes
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form
          onSubmit={handleSubmit(updateRecipe)}
          className="flex flex-col gap-4"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Edit Recipe</h2>

          <div className="flex flex-col gap-2">
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              placeholder="Recipe Title"
              className="bg-zinc-700 text-white px-4 py-2 rounded-md outline-none"
            />
            {errors.title && (
              <span className="text-red-500 text-sm">
                {errors.title.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              placeholder="Recipe Description"
              className="bg-zinc-700 text-white px-4 py-2 rounded-md outline-none min-h-[100px]"
            />
            {errors.description && (
              <span className="text-red-500 text-sm">
                {errors.description.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <input
              type="url"
              {...register("image", { required: "Image URL is required" })}
              placeholder="Image URL"
              className="bg-zinc-700 text-white px-4 py-2 rounded-md outline-none"
            />
            {errors.image && (
              <span className="text-red-500 text-sm">
                {errors.image.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <select
              {...register("category", { required: "Category is required" })}
              className="bg-zinc-700 text-white px-4 py-2 rounded-md outline-none"
            >
              <option value="">Select Category</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
            {errors.category && (
              <span className="text-red-500 text-sm">
                {errors.category.message}
              </span>
            )}
          </div>

          <div className="flex gap-4 mt-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="bg-zinc-600 text-white px-4 py-2 rounded-md hover:bg-zinc-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Update Recipe
            </button>
          </div>
        </form>
      </Modal>
      <div className="max-w-4xl mx-auto p-4 mt-8">
        <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-xl">
          <div className="h-[400px] overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold text-white">{recipe.title}</h1>
              <span className="px-3 py-1 bg-zinc-700 text-zinc-300 rounded-full text-sm">
                {recipe.category.toUpperCase()}
              </span>
            </div>

            <div className="bg-zinc-700/50 p-4 rounded-lg mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">
                Description
              </h2>
              <p className="text-zinc-300 leading-relaxed">
                {recipe.description}
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => navigate("/recipes")}
                className="bg-zinc-600 text-white px-4 py-2 rounded-md hover:bg-zinc-700 transition-colors"
              >
                Back to Recipes
              </button>
              <button
                onClick={() => setIsModalOpen(true)} 
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors"
              >
                Edit Recipe
              </button>
              <button
                onClick={() => deleteRecipe(recipe.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

  
    </div>
  );
};

export default RecipeDetail;
