import type { Recipe } from "@/models/recipe";

export const RECIPES: Recipe[] = [
  {
    id: "1",
    title: "Pancakes",
    category: "Petit-déjeuner",
    ingredients: ["Farine", "Lait", "Œufs"],
    coverUrl: "https://picsum.photos/seed/pancakes/600/400",
    preparationTime: 20,
  },
  {
    id: "2",
    title: "Tajine de poulet",
    category: "Plat principal",
    ingredients: ["Poulet", "Pommes de terre", "Oignons"],
    coverUrl: "https://picsum.photos/seed/tajine/600/400",
    preparationTime: 45,
  },
  {
    id: "3",
    title: "Salade de fruits",
    category: "Dessert",
    ingredients: ["Pomme", "Banane", "Orange"],
    coverUrl: "https://picsum.photos/seed/fruits/600/400",
    preparationTime: 10,
  },
];
