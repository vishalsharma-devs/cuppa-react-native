import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COFFEES } from "../../constants/coffees";
import { useFavoriteStore } from "../../store/useFavoriteStore";
import { theme } from "../../theme/theme";

export default function ProductPage() {
  const { id } = useLocalSearchParams();
  const selectedCoffee = COFFEES.find((coffee) => String(coffee.id) === id);
  const isFavorite = useFavoriteStore((state) =>
    state.favorites.includes(Number(id)),
  );
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F7F3E9" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <Pressable
          style={{
            backgroundColor: theme.colors.notificationBg,

            padding: 10,
            borderRadius: 20,
          }}
          onPress={() => router.back()}
        >
          <MaterialCommunityIcons
            name="arrow-left"
            size={24}
            color={theme.colors.primary}
          />
        </Pressable>
        <Text
          style={{
            fontFamily: theme.fonts.semiBold,
            fontSize: theme.fontSizes.xl,
            color: theme.colors.primary,
          }}
        >
          Product Details
        </Text>
        <Pressable
          style={{
            backgroundColor: theme.colors.notificationBg,

            padding: 10,
            borderRadius: 20,
          }}
          onPress={() => toggleFavorite(selectedCoffee.id)}
        >
          <MaterialCommunityIcons
            name={isFavorite ? "heart" : "heart-outline"}
            size={24}
            color={theme.colors.primary}
          />
        </Pressable>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={selectedCoffee.image}
          style={styles.coffeeImage}
          contentFit="contain"
        />
      </View>
      <View style={styles.productInfo1}>
        <Text style={styles.productCategory}>{selectedCoffee.category}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Ionicons name="star-outline" size={18} color={theme.colors.accent} />
          <Text style={styles.productRating}>{selectedCoffee.rating}</Text>
        </View>
      </View>
      <View style={styles.productInfo2}>
        <Text style={styles.productName}>{selectedCoffee.name}</Text>
        <Text style={styles.productPrice}>$ {selectedCoffee.price}</Text>
      </View>
      <View style={styles.productInfo3}>
        <Text style={styles.productDescription}>
          {selectedCoffee.longDescription}
        </Text>
      </View>
      <View style={styles.dividerView} />
      <View style={styles.quantityHeading}>
        <Text style={styles.quantityText}>Quantity</Text>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantityContainerText}>Choose how many cups</Text>
        <View style={styles.quantity}>
          <Pressable>
            <MaterialCommunityIcons name="minus" size={22} />
          </Pressable>
          <Text>1</Text>
          <Pressable>
            <MaterialCommunityIcons name="plus" size={22} />
          </Pressable>
        </View>
      </View>
      <View style={styles.addToCartContainer}>
        <Pressable style={styles.addToCart}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  coffeeImage: {
    width: 260,
    height: 260,
  },
  imageContainer: {
    height: 300,
    borderRadius: 44,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginVertical: 10,
  },
  productInfo1: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  productCategory: {
    fontSize: theme.fontSizes.md,
    fontFamily: theme.fonts.regular,
    textTransform: "uppercase",
  },
  productRating: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.md,
  },
  productInfo2: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  productName: {
    fontFamily: theme.fonts.semiBold,
    fontSize: theme.fontSizes.xl,
    color: theme.colors.primary,
  },
  productPrice: {
    fontFamily: theme.fonts.semiBold,
    fontSize: theme.fontSizes.xl,
    color: theme.colors.primary,
  },
  productInfo3: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  productDescription: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.lg,
    color: theme.colors.textSecondary,
  },
  dividerView: {
    borderBottomWidth: 0.4,
    margin: 10,
    borderBottomColor: "#a19d9d",
  },
  quantityHeading: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  quantityText: {
    fontSize: theme.fontSizes.xl,
    color: theme.colors.primary,
    fontFamily: theme.fonts.semiBold,
  },
  quantityContainer: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    alignItems: "center",
  },
  quantityContainerText: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.md,
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  addToCartContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
  },
  addToCart: {
    backgroundColor: theme.colors.primary,
    padding: 20,
    borderRadius: 10,
  },
  addToCartText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.lg,
    fontFamily: theme.fonts.semiBold,
  },
});
