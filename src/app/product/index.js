import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COFFEES } from "../../constants/coffees";
import { useCartStore } from "../../store/useCartStore";
import { useFavoriteStore } from "../../store/useFavoriteStore";
import { theme } from "../../theme/theme";
export default function ProductPage() {
  const { id } = useLocalSearchParams();
  const selectedCoffee = COFFEES.find((coffee) => String(coffee.id) === id);
  const isFavorite = useFavoriteStore((state) =>
    state.favorites.includes(Number(id)),
  );
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);
  const quantity = useCartStore((state) => state.quantity);
  const addItem = useCartStore((state) => state.addItem);
  const subtractItem = useCartStore((state) => state.subtractItem);
  const count = quantity[selectedCoffee?.id] || 0;

  // const totalPrice = selectedCoffee ? selectedCoffee.price * count : 0;
  const cartCount = COFFEES.reduce((total, coffee) => {
    return total + (quantity[coffee.id] || 0);
  }, 0);
  const cartTotal = COFFEES.reduce((total, coffee) => {
    const count = quantity[coffee.id] || 0;
    const coffeeTotal = coffee.price * count;
    return total + coffeeTotal;
  }, 0);
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
        {quantity[id] > 0 ? (
          <View style={styles.quantity}>
            <Pressable
              onPress={() => subtractItem(selectedCoffee.id)}
              style={{
                justifyContent: "center",
                backgroundColor: theme.colors.primary,
                paddingVertical: 5,
                borderRadius: 8,
                paddingHorizontal: 5,
              }}
            >
              <MaterialCommunityIcons
                name="minus"
                size={20}
                color={theme.colors.white}
              />
            </Pressable>
            <Text
              style={{
                fontFamily: theme.fonts.semiBold,
                fontSize: theme.fontSizes.lg,
                color: theme.colors.text,
                width: 24,
                textAlign: "center",
                fontVariant: ["tabular-nums"],
              }}
            >
              {quantity[id]}
            </Text>
            <Pressable
              onPress={() => addItem(selectedCoffee.id)}
              style={{
                justifyContent: "center",
                backgroundColor: theme.colors.primary,
                paddingVertical: 5,
                borderRadius: 8,
                paddingHorizontal: 5,
              }}
            >
              <MaterialCommunityIcons
                name="plus"
                size={20}
                color={theme.colors.white}
              />
            </Pressable>
          </View>
        ) : (
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: theme.colors.primary,
              paddingVertical: 5,
              borderRadius: 8,
              paddingLeft: 2,
              paddingRight: 7,
              gap: 2,
            }}
            onPress={() => addItem(id)}
            accessibilityRole="button"
          >
            <MaterialCommunityIcons name="plus" size={20} color="#ffffff" />
            <Text
              style={{
                fontFamily: theme.fonts.medium,
                fontSize: theme.fontSizes.sm,
                color: theme.colors.white,
              }}
            >
              Add
            </Text>
          </Pressable>
        )}
      </View>
      <View style={styles.addToCartContainer}>
        <Pressable style={styles.addToCart}>
          <View
            style={{ flexDirection: "row", gap: 10, alignItems: "flex-end" }}
          >
            <MaterialCommunityIcons
              name="shopping-outline"
              size={22}
              color="white"
            />

            <Text style={styles.addToCartText}>View Cart ({cartCount})</Text>
          </View>
          <Text style={styles.totalPrice}>${cartTotal.toFixed(2)}</Text>
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
    height: 50,
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
    marginBottom: 20,
  },
  addToCart: {
    backgroundColor: theme.colors.primary,
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addToCartText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.lg,
    fontFamily: theme.fonts.semiBold,
  },
  totalPrice: {
    color: theme.colors.accent,
    fontSize: theme.fontSizes.lg,
    fontFamily: theme.fonts.semiBold,
  },
});
