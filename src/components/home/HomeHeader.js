import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { theme } from "../../theme/theme";
export default function HomeHeader() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.firstHeader}>
        <Image
          source={require("../../../assets/project_images/avatar.webp")}
          style={styles.avatar}
        />

        <View style={styles.headerUserInfo}>
          <Text style={styles.headerUsername}>Alex Morgan</Text>
          <View style={styles.locationRow}>
            <Ionicons
              name="location-outline"
              size={20}
              color={theme.colors.accent}
              style={styles.locationIcon}
            />
            <Text style={styles.headerUserLocation}>Toronto, Canada</Text>
          </View>
        </View>

        <Pressable
          onPress={() => Alert.alert("Hi, I am Notification")}
          style={styles.notificationButton}
        >
          <MaterialCommunityIcons
            name="bell-outline"
            size={28}
            color={theme.colors.primary}
          />
        </Pressable>
      </View>
      <View style={styles.secondHeader}>
        <Ionicons name="search-outline" size={28} color={theme.colors.text} />

        <TextInput
          placeholder="Search Coffee.."
          style={styles.searchInput}
          placeholderTextColor={theme.colors.textSecondary}
        />
        <Pressable
          onPress={() => Alert.alert("Hi, I am Options")}
          style={styles.optionsButton}
        >
          <Ionicons name="options-outline" size={28} color="#ffffff" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    gap: 20,
  },

  firstHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  headerUserInfo: { flex: 1, paddingLeft: 10 },
  headerUsername: {
    fontSize: theme.fontSizes.lg,
    fontFamily: theme.fonts.semiBold,
    color: theme.colors.text,
  },
  headerUserLocation: {
    color: theme.colors.textSecondary,
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.sm,
  },
  notificationButton: {
    backgroundColor: theme.colors.notificationBg,
    padding: 10,
    borderRadius: 25,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    marginLeft: -4,
  },
  searchInput: {
    fontSize: theme.fontSizes.md,
    fontFamily: theme.fonts.regular,
    flex: 1,
    paddingLeft: 10,
    color: theme.colors.text,
  },

  secondHeader: {
    flexDirection: "row",
    marginHorizontal: 10,
    alignItems: "center",
    backgroundColor: theme.colors.surface,
    height: 55,
    borderRadius: 25,
    paddingHorizontal: 10,
  },
  optionsButton: {
    backgroundColor: theme.colors.primary,
    padding: 4,
    borderRadius: 20,
  },
});
