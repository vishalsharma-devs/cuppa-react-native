import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    Alert,
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { CATEGORIES } from "../../constants/categories";
export default function CategoryList() {
  const [category, setCategory] = useState("All");

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
              Alert.alert("Hello I am ", item.name);
            }}
            style={[
              styles.category,
              styles.categoryText,
              item.name === category && styles.categoryActive,
            ]}
          >
            <Ionicons
              name={item.icon}
              size={20}
              color={item.name === category ? "#eee7e7" : "#000000"}
            />

            <Text style={item.name === category && styles.categoryTextActive}>
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
    fontFamily: "DMSans-SemiBold",
    fontSize: 18,
  },
  categoryList: {
    gap: 10,
  },
  category: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  categoryActive: {
    backgroundColor: "#8D6E63",
  },
  categoryText: {
    fontFamily: "DMSans-Regular",
    color: "#000000",
  },
  categoryTextActive: {
    color: "#ffffff",
  },
});
