import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
export default function CoffeeCard({ coffee }) {
  return (
    <View style={styles.productItem}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={coffee.image}
          style={styles.productImageItem}
          contentFit="contain"
        />
      </View>

      <View style={styles.rating}>
        <Ionicons name="star-sharp" size={13} color="#ffffff" />
        <Text style={styles.ratingText}>{coffee.rating}</Text>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          paddingTop: 10,
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "DMSans-SemiBold",
            letterSpacing: -0.1,
          }}
          numberOfLines={2}
        >
          {coffee.name}
        </Text>
        <Text
          style={{
            fontFamily: "DMSans-Regular",
            fontSize: 13,
            color: "#7b7979",
          }}
        >
          {coffee.description}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          paddingTop: 10,
        }}
      >
        <Text style={{ fontFamily: "DMSans-SemiBold", fontSize: 16 }}>
          $ {coffee.price.toFixed(2)}
        </Text>

        <Pressable>
          <Ionicons name="add-circle" size={35} color="#8D6E63" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: { gap: 10, marginTop: 10, flex: 1 },
  productHeading: {
    fontFamily: "DMSans-SemiBold",
    fontSize: 18,
  },
  productItem: {
    paddingVertical: 12,
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    position: "relative",
  },
  productImageItem: {
    width: 120,
    height: 120,
  },
  rating: {
    position: "absolute",
    top: 10,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    backgroundColor: "#d2ac61",
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  ratingText: {
    color: "#ffffff",
    fontSize: 12,
    fontFamily: "DMSans-Regular",
  },
});
