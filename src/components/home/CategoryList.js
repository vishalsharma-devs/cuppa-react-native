import { Ionicons } from "@expo/vector-icons";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../../constants/categories";
import { theme } from "../../theme/theme";
export default function CategoryList({ category, setCategory }) {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryHeading}>Categories</Text>
      <FlatList
        data={CATEGORIES}
        horizontal
        contentContainerStyle={styles.categoryList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              setCategory(item.name);
            }}
            style={[
              styles.category,

              item.name === category && styles.categoryActive,
            ]}
          >
            <Ionicons
              name={item.icon}
              size={20}
              color={
                item.name === category
                  ? theme.colors.white
                  : theme.colors.primary
              }
            />
            <Text
              style={[
                styles.categoryText,

                item.name === category && styles.categoryTextActive,
              ]}
            >
              {item.name}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  categoryContainer: { gap: 10 },
  categoryHeading: {
    fontFamily: theme.fonts.semiBold,
    fontSize: theme.fontSizes.lg,
    color: theme.colors.text,
  },
  categoryList: {
    gap: 10,
  },
  category: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: theme.colors.surface,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  categoryActive: {
    backgroundColor: theme.colors.primary,
  },
  categoryText: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    fontSize: theme.fontSizes.sm,
  },
  categoryTextActive: {
    color: theme.colors.white,
  },
});
