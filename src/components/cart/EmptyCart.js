import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../../theme/theme";

export default function EmptyCart() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="cart-outline"
          size={50}
          color={theme.colors.primary}
        />
      </View>

      <Text style={styles.title}>Your cart is empty</Text>

      <Text style={styles.description}>
        Your next favorite brew is just a tap away. Explore our coffees and add
        something delicious!
      </Text>

      <Pressable style={styles.button} onPress={() => router.navigate("/home")}>
        <Text style={styles.buttonText}>Explore Coffees</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  iconContainer: {
    width: 95,
    height: 95,
    borderRadius: 48,
    backgroundColor: theme.colors.notificationBg,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  title: {
    fontFamily: theme.fonts.semiBold,
    fontSize: theme.fontSizes.xl,
    color: theme.colors.primary,
    marginBottom: 10,
  },

  description: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.md,
    color: theme.colors.textSecondary,
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 25,
  },

  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 25,
    paddingVertical: 14,
    borderRadius: 12,
  },

  buttonText: {
    color: theme.colors.white,
    fontFamily: theme.fonts.semiBold,
    fontSize: theme.fontSizes.md,
  },
});
