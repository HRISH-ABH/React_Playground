import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Recipes from "../pages/Recipes";
import RecipeDetail from "../pages/RecipeDetail";
import Edit from "../pages/Edit";
import Favorites from "../pages/Favorites";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/details/:id" element={<RecipeDetail />} />
        <Route path="/recipes/edit/:id" element={<Edit />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
