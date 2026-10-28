import type { Recipe } from "@/models/recipe";
import { StyleSheet, Text, View } from "react-native";

type RecipeCardProps = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{recipe.title}</Text>
      <Text>{recipe.category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
