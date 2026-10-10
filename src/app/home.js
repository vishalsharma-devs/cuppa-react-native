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
import { COFFEES } from "../constants/coffees";
export default function HomeScreen() {
  const [category, setCategory] = useState("All");

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Product Container */}
      <View style={styles.productContainer}>
        <FlatList
          data={COFFEES}
          keyExtractor={(item) => item.id}
          numColumns={2}
          key={2}
          ListHeaderComponent={
            <View style={{ gap: 15 }}>
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
                      <Text style={styles.headerUserLocation}>
                        Toronto, Canada
                      </Text>
                    </View>
                  </View>

                  <Pressable
                    onPress={() => Alert.alert("Hi, I am Notification")}
                    style={styles.notificationButton}
                  >
                    <Ionicons
                      name="notifications-outline"
                      size={28}
                      color="#8D6E63"
                    />
                  </Pressable>
                </View>
                <View style={styles.secondHeader}>
                  <Ionicons name="search-outline" size={28} />

                  <TextInput
                    placeholder="Search Coffee.."
                    style={styles.searchInput}
                  />
                  <Pressable
                    onPress={() => Alert.alert("Hi, I am Options")}
                    style={styles.optionsButton}
                  >
                    <Ionicons
                      name="options-outline"
                      size={28}
                      color="#ffffff"
                    />
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
                    style={[styles.heroImage]}
                    contentFit="cover"
                  />
                  <Text style={[styles.promoBadge]}>20% OFF</Text>
                </View>
              </View>

              {/* Category Container */}
              <View style={styles.categoryContainer}>
                <Text style={styles.categoryHeading}>Categories</Text>
                <FlatList
                  data={CATEGORIES}
                  horizontal
                  contentContainerStyle={styles.categoryList}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <Pressable
                      onPress={() => {
                        setCategory(item.name);
                        Alert.alert("Hello I am ", item.name);
                      }}
                      style={[
                        styles.category,
                        styles.categoryText,
                        item.name === category && styles.categoryActive,
                      ]}
                    >
                      <Ionicons
                        name={item.icon}
                        size={20}
                        color={item.name === category ? "#eee7e7" : "#000000"}
                      />

                      <Text
                        style={
                          item.name === category && styles.categoryTextActive
                        }
                      >
                        {item.name}
                      </Text>
                    </Pressable>
                  )}
                />
              </View>
              <Text style={styles.productHeading}>Popular Coffee</Text>
            </View>
          }
          contentContainerStyle={{
            paddingHorizontal: 10,
            rowGap: 10,
            paddingBottom: 20,
          }}
          columnWrapperStyle={{
            gap: 10,
          }}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={item.image}
                  style={styles.productImageItem}
                  contentFit="contain"
                />
              </View>

              <View style={styles.rating}>
                <Ionicons name="star-sharp" size={13} color="#ffffff" />
                <Text style={styles.ratingText}>{item.rating}</Text>
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
                    fontSize: 16,
                    fontFamily: "DMSans-SemiBold",
                    letterSpacing: -0.1,
                  }}
                  numberOfLines={2}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontFamily: "DMSans-Regular",
                    fontSize: 13,
                    color: "#7b7979",
                  }}
                >
                  {item.description}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: 10,
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontFamily: "DMSans-SemiBold", fontSize: 16 }}>
                  $ {item.price.toFixed(2)}
                </Text>

                <Pressable>
                  <Ionicons name="add-circle" size={35} color="#8D6E63" />
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fbf3e3",
    gap: 20,
  },
  headerContainer: {
    gap: 20,
  },

  firstHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    // paddingHorizontal: 10,
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
  heroContainer: {
    backgroundColor: "#4B2E24",
    flexDirection: "row",
    // marginHorizontal: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    paddingVertical: 15,
  },
  subHero1: { flex: 1 },
  subHero2: { justifyContent: "space-between" },
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
  },
  categoryList: {
    gap: 10,
  },
  category: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  categoryActive: {
    backgroundColor: "#8D6E63",
  },
  categoryText: {
    fontFamily: "DMSans-Regular",
    color: "#000000",
  },
  categoryTextActive: {
    color: "#ffffff",
  },
  productContainer: { gap: 10, marginTop: 10, flex: 1 },
  productHeading: {
    fontFamily: "DMSans-SemiBold",
    fontSize: 18,
  },
  productItem: {
    paddingVertical: 12,
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    position: "relative",
  },
  productImageItem: {
    width: 120,
    height: 120,
  },
  rating: {
    position: "absolute",
    top: 10,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    backgroundColor: "#d2ac61",
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  ratingText: {
    color: "#ffffff",
    fontSize: 12,
    fontFamily: "DMSans-Regular",
  },
});
