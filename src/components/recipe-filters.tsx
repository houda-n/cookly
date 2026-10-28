import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

type RecipeFiltersProps = {
  query: string;
  onQueryChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
};

const categories = [
  "Toutes",
  "Petit-déjeuner",
  "Plat principal",
  "Dessert",
];

export function RecipeFilters({
  query,
  onQueryChange,
  category,
  onCategoryChange,
}: RecipeFiltersProps) {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Rechercher une recette..."
        value={query}
        onChangeText={onQueryChange}
      />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item) => (
          <Pressable
            key={item}
            onPress={() => onCategoryChange(item)}
            style={[
              styles.button,
              category === item && styles.selected,
            ]}
          >
            <Text>{item}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  button: {
    padding: 10,
    marginRight: 8,
    borderRadius: 8,
    backgroundColor: "#E5E5E5",
  },
  selected: {
    backgroundColor: "#A7D7C5",
  },
});
