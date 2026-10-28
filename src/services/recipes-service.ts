import { RECIPES } from "../data/recipes";
import type { Recipe } from "@/models/recipe";

export async function getRecipes(): Promise<Recipe[]> {
  return RECIPES;
}
