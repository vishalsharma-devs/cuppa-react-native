import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FavoritesHeader from "../../../components/favorites/FavoritesHeader";
import { COFFEES } from "../../../constants/coffees";
import { useFavoriteStore } from "../../../store/useFavoriteStore";
import { theme } from "../../../theme/theme";
export default function favorites() {
  const favorites = useFavoriteStore((state) => state.favorites);
  const favoritesCoffee = COFFEES.filter((coffee) =>
    favorites.includes(coffee.id),
  );
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);
  return (
    <SafeAreaView style={styles.container}>
      <FavoritesHeader />
      <View style={styles.savedContainer}>
        <Text style={styles.savedText}>Saved Coffees</Text>
        <Text style={styles.favoriteText}>{favorites.length} favorites</Text>
      </View>
      {favoritesCoffee.length === 0 ? (
        <View style={styles.emptyContainer}>
          <View style={styles.emptyIcon}>
            <MaterialCommunityIcons
              name="heart-outline"
              size={45}
              color={theme.colors.primary}
            />
          </View>

          <Text style={styles.emptyTitle}>No favorites yet</Text>

          <Text style={styles.emptyDescription}>
            Your favorite brews will appear here. Tap the heart on any coffee to
            save it.
          </Text>

          <Pressable
            style={styles.exploreButton}
            onPress={() => router.navigate("/home")}
          >
            <Text style={styles.exploreText}>Explore Coffees</Text>
          </Pressable>
        </View>
      ) : (
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <View style={styles.favoriteCoffees}>
            {favoritesCoffee.map((favorite) => (
              <Pressable
                key={favorite.id}
                onPress={() => {
                  router.push({
                    pathname: "/product",
                    params: { id: String(favorite.id) },
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
                      source={favorite.image}
                      style={{ height: 85, width: 85 }}
                      contentFit="contain"
                    />
                  </View>
                  <View style={{ gap: 5 }}>
                    <Text
                      style={{
                        fontSize: theme.fontSizes.lg,
                        fontFamily: theme.fonts.regular,
                        color: theme.colors.primary,
                      }}
                    >
                      {favorite.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: theme.fontSizes.md,
                        fontFamily: theme.fonts.semiBold,
                        color: theme.colors.textSecondary,
                      }}
                    >
                      ${favorite.price.toFixed(2)}
                    </Text>
                  </View>
                </View>
                <Pressable onPress={() => toggleFavorite(favorite.id)}>
                  <MaterialCommunityIcons
                    name="heart"
                    size={20}
                    color={theme.colors.primary}
                  />
                </Pressable>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7F3E9" },
  savedContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  savedText: {
    fontSize: theme.fontSizes.lg,
    fontFamily: theme.fonts.medium,
  },
  favoriteText: {
    fontFamily: theme.fonts.regular,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  emptyIcon: {
    width: 85,
    height: 85,
    borderRadius: 43,
    backgroundColor: theme.colors.notificationBg,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  emptyTitle: {
    fontFamily: theme.fonts.semiBold,
    fontSize: theme.fontSizes.xl,
    color: theme.colors.primary,
    marginBottom: 10,
  },
  emptyDescription: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.md,
    color: theme.colors.textSecondary,
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 25,
  },
  exploreButton: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 25,
    paddingVertical: 14,
    borderRadius: 12,
  },
  exploreText: {
    color: theme.colors.white,
    fontFamily: theme.fonts.semiBold,
    fontSize: theme.fontSizes.md,
  },
});
