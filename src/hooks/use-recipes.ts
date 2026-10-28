import type { Recipe } from "@/models/recipe";
import { getRecipes } from "@/services/recipes-service";
import { useEffect, useState } from "react";

export function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    getRecipes().then(setRecipes);
  }, []);

  return { recipes };
}
