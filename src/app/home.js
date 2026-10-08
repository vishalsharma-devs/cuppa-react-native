import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useState } from "react";
import {
    Alert,
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CATEGORIES } from "../constants/categories";
export default function HomeScreen() {
  const [category, setCategory] = useState("All");
  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Header Container  */}
      <View style={styles.headerContainer}>
        <View style={styles.firstHeader}>
          <Image
            source={require("../../assets/project_images/avatar.webp")}
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
            <Ionicons name="notifications-outline" size={28} color="#AD6636" />
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

      {/* Hero Container */}
      <View style={styles.heroContainer}>
        <View style={styles.subHero1}>
          <Text style={styles.heroHeading}>CUPPA SPECIAL </Text>
          <Text style={styles.heroHeadline}>
            20% off your first coffee order
          </Text>
          <Pressable
            style={styles.heroButton}
            onPress={() => Alert.alert("Thanks for choosing us.")}
          >
            <Text style={styles.heroButtonText}>Order Now</Text>
          </Pressable>
        </View>
        <View style={styles.subHero2}>
          <Image
            source={require("../../assets/project_images/banner_coffee.webp")}
            style={styles.heroImage}
            contentFit="cover"
          />
          <Text style={styles.promoBadge}>20% OFF</Text>
        </View>
      </View>

      {/* Category Container */}
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryHeading}>Categories</Text>
        <FlatList
          data={CATEGORIES}
          horizontal
          contentContainerStyle={styles.categoryList}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                setCategory(item);
                Alert.alert("Hello I am ", item);
              }}
            >
              <Text
                style={[
                  styles.category,
                  item === category && styles.categoryActive,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#FDFBF7",
    gap: 20,
  },
  headerContainer: {
    gap: 20,
  },

  firstHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
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
    marginHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#eee7e7",
    height: 55,
    borderRadius: 25,
    paddingHorizontal: 10,
  },
  optionsButton: {
    backgroundColor: "#AD6636",
    padding: 4,
    borderRadius: 20,
  },
  heroContainer: {
    backgroundColor: "#4B2E24",
    flexDirection: "row",
    marginHorizontal: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    paddingVertical: 15,
  },
  subHero1: { flex: 1 },
  heroHeading: {
    color: "#f2c291",
    fontFamily: "DMSans-SemiBold",
    backgroundColor: "rgba(11, 11, 11,0.5)",
    alignSelf: "flex-start",
    padding: 2,
  },
  heroHeadline: {
    color: "#ffffff",
    fontSize: 25,
    fontFamily: "Lora-SemiBold",
    marginTop: 5,
  },
  heroButton: {
    backgroundColor: "#f2c291",
    alignSelf: "flex-start",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  heroButtonText: {
    fontSize: 16,
    fontFamily: "DMSans-SemiBold",
  },
  promoBadge: {
    color: "#ffffff",
    opacity: 0.8,
    alignSelf: "flex-end",
    marginTop: 10,
    fontFamily: "DMSans-Regular",
  },
  heroImage: { height: 120, width: 150 },
  categoryContainer: { gap: 10 },
  categoryHeading: {
    fontFamily: "DMSans-SemiBold",
    fontSize: 18,
    marginLeft: 10,
  },
  categoryList: {
    paddingHorizontal: 10,
    gap: 10,
  },
  category: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    fontFamily: "DMSans-Regular",
    backgroundColor: "#eee7e7",
    color: "#000000",
  },
  categoryActive: {
    backgroundColor: "#AD6636",
    color: "#eee7e7",
  },
});
