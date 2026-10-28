import type { Recipe } from "@/models/recipe";

export const RECIPES: Recipe[] = [
  {
    id: "1",
    title: "Pancakes",
    category: "Petit-déjeuner",
    ingredients: ["Farine", "Lait", "Œufs"],
  },
  {
    id: "2",
    title: "Tajine de poulet",
    category: "Plat principal",
    ingredients: ["Poulet", "Pommes de terre", "Oignons"],
  },
  {
    id: "3",
    title: "Salade de fruits",
    category: "Dessert",
    ingredients: ["Pomme", "Banane", "Orange"],
  },
];
