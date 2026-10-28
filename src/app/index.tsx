import { RecipeCard } from "@/components/recipe-card";
import { useRecipes } from "@/hooks/use-recipes";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const { recipes } = useRecipes();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cookly 🍽️</Text>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RecipeCard recipe={item} />
        )}
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
});
