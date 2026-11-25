import { ingredient } from "../models/Ingredient";

const SITE = "www.themealdb.com/api/json/v1/1/categories.php";

type ingredientResponse = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  type: string;
};

function toIngredient(response: ingredientResponse): ingredient {
  return {
    id: response.id,
    name: response.name,
    description: response.description,
    imageUrl: response.imageUrl,
    type: response.type,
  };
}

export async function fetchIngredients(): Promise<ingredient[]> {
  const response = await fetch(SITE);
  if (!response.ok) throw new Error(`Erreur HTTP ${response.status}`);
  const data: ingredientResponse[] = await response.json();
  return data.map(toIngredient);
}
