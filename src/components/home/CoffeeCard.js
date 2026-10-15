import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useFavoriteStore } from "../../store/useFavoriteStore";
import { theme } from "../../theme/theme";
export default function CoffeeCard({
  coffee,
  cardWidth,
  quantity,
  addItem,
  subtractItem,
}) {
  const isFavorite = useFavoriteStore((state) =>
    state.favorites.includes(coffee.id),
  );

  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);
  return (
    <Animated.View
      entering={FadeInUp.duration(300)}
      style={[styles.productItem, { width: cardWidth }]}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <Pressable onPress={() => toggleFavorite(coffee.id)}>
          <MaterialCommunityIcons
            name={isFavorite ? "heart" : "heart-outline"}
            size={20}
            color={theme.colors.primary}
          />
        </Pressable>
        <View style={styles.rating}>
          <Ionicons name="star-sharp" size={13} color={theme.colors.white} />
          <Text style={styles.ratingText}>{coffee.rating}</Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image
          source={coffee.image}
          style={styles.productImageItem}
          contentFit="contain"
        />
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
            fontSize: theme.fontSizes.md,
            fontFamily: theme.fonts.semiBold,
            letterSpacing: -0.1,
            color: theme.colors.text,
          }}
          numberOfLines={2}
        >
          {coffee.name}
        </Text>
        <Text
          style={{
            fontFamily: theme.fonts.regular,
            fontSize: theme.fontSizes.sm,
            color: theme.colors.textSecondary,
          }}
        >
          {coffee.description}
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          paddingTop: 10,
        }}
      >
        <Text
          style={{
            fontFamily: theme.fonts.semiBold,
            fontSize: theme.fontSizes.md,
            color: theme.colors.primary,
          }}
        >
          $ {coffee.price.toFixed(2)}
        </Text>
      </View>
      <View style={{ alignItems: "flex-end", paddingHorizontal: 10 }}>
        {quantity[coffee.id] > 0 ? (
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Pressable
              onPress={() => subtractItem(coffee.id)}
              accessibilityRole="button"
              accessibilityLabel={`Decrease ${coffee.name} quantity`}
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
              {quantity[coffee.id]}
            </Text>
            <Pressable
              onPress={() => addItem(coffee.id)}
              accessibilityRole="button"
              accessibilityLabel={`Increase ${coffee.name} quantity`}
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
            onPress={() => addItem(coffee.id)}
            accessibilityRole="button"
            accessibilityLabel={`Add ${coffee.name} to cart`}
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
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  productContainer: { gap: 10, marginTop: 10, flex: 1 },

  productItem: {
    paddingVertical: 12,
    backgroundColor: theme.colors.surface,
    borderRadius: 10,
    position: "relative",
  },
  productImageItem: {
    width: 120,
    height: 120,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    backgroundColor: theme.colors.accent,
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  ratingText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.xs,
    fontFamily: theme.fonts.regular,
  },
});
