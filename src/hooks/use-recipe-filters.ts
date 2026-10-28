import type { Recipe } from "@/models/recipe";
import { matchesRecipeFilters } from "@/models/recipe";
import { useState } from "react";

export function useRecipeFilters(recipes: Recipe[]) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Toutes");

  const filteredRecipes = recipes.filter((recipe) =>
    matchesRecipeFilters(recipe, query, category)
  );

  return {
    query,
    setQuery,
    category,
    setCategory,
    filteredRecipes,
  };
}
