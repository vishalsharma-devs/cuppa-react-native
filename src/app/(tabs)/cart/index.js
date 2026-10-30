import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CartHeader from "../../../components/cart/CartHeader";
import { COFFEES } from "../../../constants/coffees";
import { useCartStore } from "../../../store/useCartStore";
import { theme } from "../../../theme/theme";
export default function Cart() {
  const quantity = useCartStore((state) => state.quantity);
  const totalCups = Object.values(quantity).reduce(
    (total, cups) => total + cups,
    0,
  );
  const cartCoffees = COFFEES.filter(
    (coffee) => (quantity[coffee.id] || 0) > 0,
  );
  const addItem = useCartStore((state) => state.addItem);
  const subtractItem = useCartStore((state) => state.subtractItem);
  const cartTotal = COFFEES.reduce((total, coffee) => {
    const count = quantity[coffee.id] || 0;
    return total + coffee.price * count;
  }, 0);

  const subtotal = cartTotal;

  const discount = Math.round(subtotal * 0.05 * 100) / 100;

  const discountedAmount = subtotal - discount;

  const tax = Math.round(discountedAmount * 0.1 * 100) / 100;

  const finalTotal = discountedAmount + tax;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CartHeader />
      <View style={styles.cartSubheader}>
        <Text style={styles.subheaderText1}>Your Order</Text>
        <Text style={styles.subheaderText2}>{totalCups} cups</Text>
      </View>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={styles.favoriteCoffees}>
          {cartCoffees.map((cartCoffee) => (
            <Pressable
              key={cartCoffee.id}
              onPress={() => {
                router.push({
                  pathname: "/product",
                  params: { id: String(cartCoffee.id) },
                });
              }}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: theme.colors.white,
                marginVertical: 5,
                marginHorizontal: 10,
                paddingHorizontal: 10,
                paddingVertical: 15,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <View>
                  <Image
                    source={cartCoffee.image}
                    style={{ height: 85, width: 85 }}
                    contentFit="contain"
                  />
                </View>
                <View style={{ gap: 3 }}>
                  <Text
                    style={{
                      fontSize: theme.fontSizes.lg,
                      fontFamily: theme.fonts.semiBold,
                      color: theme.colors.primary,
                    }}
                  >
                    {cartCoffee.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: theme.fontSizes.sm,
                      fontFamily: theme.fonts.regular,
                      color: theme.colors.textSecondary,
                    }}
                  >
                    {cartCoffee.description}
                  </Text>
                  <Text
                    style={{
                      fontSize: theme.fontSizes.md,
                      fontFamily: theme.fonts.medium,
                      color: theme.colors.textSecondary,
                    }}
                  >
                    ${cartCoffee.price.toFixed(2)}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <Pressable
                  onPress={() => subtractItem(cartCoffee.id)}
                  accessibilityRole="button"
                  accessibilityLabel={`Decrease ${cartCoffee.name} quantity`}
                  style={{
                    justifyContent: "center",
                    // backgroundColor: "#8D6E63",
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
                  {quantity[cartCoffee.id]}
                </Text>
                <Pressable
                  onPress={() => addItem(cartCoffee.id)}
                  accessibilityRole="button"
                  accessibilityLabel={`Increase ${cartCoffee.name} quantity`}
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
            </Pressable>
          ))}
        </View>
        <View
          style={{
            margin: 10,
            padding: 10,
            borderRadius: 10,
            backgroundColor: theme.colors.white,
          }}
        >
          <Text
            style={{
              fontSize: theme.fontSizes.xl,
              fontFamily: theme.fonts.semiBold,
            }}
          >
            Order Summary
          </Text>
          <View style={{ gap: 10, paddingHorizontal: 10 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  fontSize: theme.fontSizes.lg,
                  fontFamily: theme.fonts.regular,
                  color: theme.colors.textSecondary,
                }}
              >
                Subtotal
              </Text>
              <Text
                style={{
                  fontSize: theme.fontSizes.lg,
                  fontFamily: theme.fonts.regular,
                }}
              >
                ${subtotal.toFixed(2)}
              </Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: theme.fontSizes.lg,
                  fontFamily: theme.fonts.regular,
                  color: theme.colors.textSecondary,
                }}
              >
                Discount(5%)
              </Text>
              <Text
                style={{
                  fontSize: theme.fontSizes.lg,
                  fontFamily: theme.fonts.regular,
                }}
              >
                -${discount.toFixed(2)}
              </Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: theme.fontSizes.lg,
                  fontFamily: theme.fonts.regular,
                  color: theme.colors.textSecondary,
                }}
              >
                Tax(10%)
              </Text>
              <Text
                style={{
                  fontSize: theme.fontSizes.lg,
                  fontFamily: theme.fonts.regular,
                }}
              >
                ${tax.toFixed(2)}
              </Text>
            </View>
            <View
              style={{
                borderTopWidth: 0.2,
                borderTopColor: theme.colors.textSecondary,
                marginVertical: 10,
              }}
            />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: theme.fontSizes.lg,
                  fontFamily: theme.fonts.semiBold,
                  color: theme.colors.primary,
                }}
              >
                Total
              </Text>
              <Text
                style={{
                  fontSize: theme.fontSizes.lg,
                  fontFamily: theme.fonts.semiBold,
                  color: theme.colors.primary,
                }}
              >
                ${finalTotal.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Pressable
        style={{
          backgroundColor: theme.colors.primary,
          marginHorizontal: 10,
          padding: 15,
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: theme.colors.white,
            fontFamily: theme.fonts.semiBold,
            fontSize: theme.fontSizes.lg,
          }}
        >
          Place Order
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  cartSubheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  subheaderText1: {
    fontSize: theme.fontSizes.lg,
    fontFamily: theme.fonts.medium,
  },
  subheaderText2: {
    fontFamily: theme.fonts.regular,
  },
});
