import type { Recipe } from "@/models/recipe";
import { getRecipes } from "@/services/recipes-service";
import { useEffect, useState } from "react";

export type RecipesState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; data: Recipe[] };

export function useRecipes() {
  const [state, setState] = useState<RecipesState>({ status: "loading" });
  const [reloadCount, setReloadCount] = useState(0);

  function reload() {
    setState({ status: "loading" });
    setReloadCount((count) => count + 1);
  }

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await getRecipes();
        if (!ignore) setState({ status: "success", data });
      } catch (error) {
        if (!ignore) {
          setState({
            status: "error",
            message: error instanceof Error
              ? error.message
              : "Impossible de charger les recettes.",
          });
        }
      }
    }

    void load();
    return () => { ignore = true; };
  }, [reloadCount]);

  return { state, reload };
}
