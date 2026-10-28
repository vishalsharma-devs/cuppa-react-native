import { Ionicons } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../../theme/theme";

const tabs = [
  {
    label: "Home",
    route: "/home",
    icon: "home-outline",
    activeIcon: "home",
  },
  {
    label: "Favorites",
    route: "/favorites",
    icon: "heart-outline",
    activeIcon: "heart",
  },
  {
    label: "Cart",
    route: "/cart",
    icon: "bag-outline",
    activeIcon: "bag",
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = pathname === tab.route;

        return (
          <Pressable
            key={tab.route}
            style={styles.tab}
            onPress={() => router.navigate(tab.route)}
            accessibilityRole="tab"
            accessibilityState={{ selected: isActive }}
          >
            <View
              key={isActive ? "active" : "inactive"}
              style={[
                styles.iconContainer,
                isActive && styles.activeIconContainer,
              ]}
            >
              <Ionicons
                name={isActive ? tab.activeIcon : tab.icon}
                size={22}
                color={
                  isActive ? theme.colors.primary : theme.colors.textSecondary
                }
              />
            </View>

            <Text style={[styles.tabText, isActive && styles.activeText]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: theme.colors.surface,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    paddingTop: 10,
    paddingBottom: 12,
  },

  tab: {
    flex: 1,
    alignItems: "center",
    gap: 3,
  },

  iconContainer: {
    width: 52,
    height: 32,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  activeIconContainer: {
    backgroundColor: "#E8F0EB",
  },

  tabText: {
    fontFamily: theme.fonts.medium,
    fontSize: theme.fontSizes.xs,
    color: theme.colors.textSecondary,
  },

  activeText: {
    color: theme.colors.primary,
  },
});
