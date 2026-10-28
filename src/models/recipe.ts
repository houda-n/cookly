export type Recipe = {
  id: string;
  title: string;
  category: string;
  ingredients: string[];
  coverUrl: string;
  /** Temps de préparation en minutes. */
  preparationTime: number;
};

export function matchesRecipeFilters(
  recipe: Recipe,
  query: string,
  category: string
): boolean {
  const matchesName = recipe.title
    .toLowerCase()
    .includes(query.toLowerCase());

  const matchesCategory =
    category === "Toutes" || recipe.category === category;

  return matchesName && matchesCategory;
}
