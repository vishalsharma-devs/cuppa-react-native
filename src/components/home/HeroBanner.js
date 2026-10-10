import { Image } from "expo-image";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
export default function HeroBanner() {
  return (
    <View style={styles.heroContainer}>
      <View style={styles.subHero1}>
        <Text style={styles.heroHeading}>CUPPA SPECIAL </Text>
        <Text style={styles.heroHeadline}>20% off your first coffee order</Text>
        <Pressable
          style={styles.heroButton}
          onPress={() => Alert.alert("Thanks for choosing us.")}
        >
          <Text style={styles.heroButtonText}>Order Now</Text>
        </Pressable>
      </View>
      <View style={styles.subHero2}>
        <Image
          source={require("../../../assets/project_images/banner_coffee.webp")}
          style={[styles.heroImage]}
          contentFit="cover"
        />
        <Text style={[styles.promoBadge]}>20% OFF</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
