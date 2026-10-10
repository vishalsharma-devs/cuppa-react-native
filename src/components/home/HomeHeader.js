import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import {
    Alert,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
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
              color="#AD6636"
              style={styles.locationIcon}
            />
            <Text style={styles.headerUserLocation}>Toronto, Canada</Text>
          </View>
        </View>

        <Pressable
          onPress={() => Alert.alert("Hi, I am Notification")}
          style={styles.notificationButton}
        >
          <Ionicons name="notifications-outline" size={28} color="#8D6E63" />
        </Pressable>
      </View>
      <View style={styles.secondHeader}>
        <Ionicons name="search-outline" size={28} />

        <TextInput placeholder="Search Coffee.." style={styles.searchInput} />
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
    fontSize: 17,
    fontFamily: "DMSans-SemiBold",
  },
  headerUserLocation: {
    color: "#464646",
    fontFamily: "DMSans-Regular",
  },
  notificationButton: {
    backgroundColor: "#f9e1d5",
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
    fontSize: 17,
    fontFamily: "DMSans-Regular",
    flex: 1,
    paddingLeft: 10,
  },

  secondHeader: {
    flexDirection: "row",
    marginHorizontal: 10,
    alignItems: "center",
    // backgroundColor: "#eee7e7",
    backgroundColor: "#ffffff",
    height: 55,
    borderRadius: 25,
    paddingHorizontal: 10,
  },
  optionsButton: {
    // backgroundColor: "#AD6636",
    backgroundColor: "#8D6E63",
    padding: 4,
    borderRadius: 20,
  },
});
