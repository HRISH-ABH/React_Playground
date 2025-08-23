import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { recipeContext } from "../contexts/RecipeContext";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const {recipes,setRecipes}=useContext(recipeContext);
   const navigate= useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.id=nanoid();
    console.log(data);
    setRecipes([...recipes,data]);
    toast.success("Recipe created successfully!");
    reset();
    navigate("/recipes");
  };
  return (
    <div className="bg-zinc-900 max-w-3xl rounded-lg mx-auto mt-4 ">
      <form
        className="flex flex-col gap-2 px-6 py-3"
        onSubmit={handleSubmit(submitHandler)}
      >
        <input
          type="text"
          {...register("title", {
            required: "Title is required",
            minLength: {
              value: 5,
              message: "Title must be at least 3 characters long",
            },
          })}
          placeholder="Enter title "
          className="text-white border-b border-zinc-100 px-2 py-1 outline-0"
        />
        {errors.title && (
          <small className="text-red-900">{errors.title.message}</small>
        )}
        <textarea
          type="text"
          {...register("description", {
            required: "Description is required",
            minLength: {
              value: 10,
              message: "Description must be at least 10 characters long",
            },
          })}
          placeholder="Enter description"
          className="text-white border-b border-zinc-100 px-2 py-1 outline-0 min-h-[100px] resize-y"
        />
        {errors.description && (
          <small className="text-red-900">{errors.description.message}</small>
        )}
        <input
          type="url"
          {...register("image", {
            required: "Image URL is required",
            pattern: {
              value:
                /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|bmp|tiff|svg|avif)($|\?.*$|#.*$))/i,
              message: "Please enter a valid image URL",
            },
          })}
          placeholder="Enter image url "
          className="text-white border-b border-zinc-100 px-2 py-1 outline-0"
        />
        {errors.image && (
          <small className="text-red-900">{errors.image.message}</small>
        )}
        <select
          {...register("category", {
            required: "Category is required",
          })}
          className="mb-3"
        >
          <option value="">Select Category</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
        {errors.category && (
          <small className="text-red-900">{errors.category.message}</small>
        )}
        <button
          type="submit"
          className="bg-blue-500 w-fit mt-4 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
