import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

import { RecipeCard } from "@/components/recipe-card";
import { RecipeFilters } from "@/components/recipe-filters";
import { useRecipeFilters } from "@/hooks/use-recipe-filters";
import { useRecipes } from "@/hooks/use-recipes";

export default function HomeScreen() {
  const { state, reload } = useRecipes();
  const recipes = state.status === "success" ? state.data : [];
  const {
    query,
    setQuery,
    category,
    setCategory,
    filteredRecipes,
  } = useRecipeFilters(recipes);

  const { width } = useWindowDimensions();

  const columns = width >= 768 ? 3 : 1;

  if (state.status === "loading") {
    return (
      <View style={styles.container}>
        <Text>Chargement des recettes…</Text>
      </View>
    );
  }

  if (state.status === "error") {
    return (
      <View style={styles.container}>
        <Text accessibilityRole="alert">{state.message}</Text>
        <Button title="Réessayer" onPress={reload} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cookly 🍽️</Text>

      <FlatList
        key={columns}
        data={filteredRecipes}
        numColumns={columns}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <RecipeCard recipe={item} />
          </View>
        )}
        ListEmptyComponent={
          <Text>Aucune recette disponible.</Text>
        }
        ListHeaderComponent={
          <RecipeFilters
            query={query}
            onQueryChange={setQuery}
            category={category}
            onCategoryChange={setCategory}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    flex: 1,
    padding: 6,
  },
});
