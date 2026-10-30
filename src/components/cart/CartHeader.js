import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../theme/theme";
export default function CartHeader() {
  return (
    <>
      <View style={styles.favoriteHeader}>
        <View>
          <Text style={styles.favoriteHeading}>My Cart</Text>
          <Text style={styles.favoriteSubheading}>
            Your perfect brew is almost ready
          </Text>
        </View>
        <Ionicons
          name="bag"
          size={26}
          color={theme.colors.primary}
          style={styles.favoriteHeaderIcon}
        />
      </View>
      <View style={styles.headerBoundary} />
    </>
  );
}

const styles = StyleSheet.create({
  favoriteHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  favoriteHeading: {
    fontSize: theme.fontSizes.xxl,
    fontFamily: theme.fonts.semiBold,
  },
  favoriteSubheading: {
    fontSize: theme.fontSizes.md,
    fontFamily: theme.fonts.regular,
    color: theme.colors.textSecondary,
  },
  favoriteHeaderIcon: {
    backgroundColor: theme.colors.notificationBg,
    padding: 10,
    borderRadius: 25,
  },
  headerBoundary: {
    borderTopWidth: 0.2,
    marginHorizontal: 10,
    marginTop: 20,
    borderTopColor: theme.colors.textSecondary,
  },
});
