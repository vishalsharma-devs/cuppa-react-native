import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../../theme/theme";
export default function HeroBanner3({ banner }) {
  return (
    <LinearGradient
      colors={banner.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.heroContainer}
    >
      <Image
        source={banner.image2}
        style={styles.heroLeaves}
        contentFit="contain"
      />
      <View style={styles.subHero1}>
        <Text style={styles.heroHeading}>{banner.label} </Text>
        <Text style={styles.heroHeadline}>{banner.headline}</Text>
        <Pressable
          style={styles.heroButton}
          onPress={() => Alert.alert("Thanks for choosing us.")}
        >
          <Text style={styles.heroButtonText}>{banner.buttonText}</Text>
        </Pressable>
      </View>
      <View style={styles.subHero2}>
        <Image
          source={banner.image1}
          style={[styles.heroImage]}
          contentFit="contain"
        />
      </View>
      <View style={styles.promoBadge}>
        <Text style={styles.discountText}>20%</Text>
        <Text style={styles.discountLabel}>OFF</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  heroContainer: {
    flexDirection: "row",
    paddingHorizontal: 12,
    borderRadius: 15,
    paddingVertical: 20,
    minHeight: 220,
    position: "relative",
    overflow: "hidden",
  },
  heroLeaves: {
    width: 95,
    height: 95,
    position: "absolute",
    left: -15,
    bottom: -20,
    opacity: 0.8,
  },
  subHero1: { flex: 1, zIndex: 2 },
  subHero2: { width: "43%", position: "relative" },
  heroHeading: {
    color: "#E8BB71",
    fontFamily: theme.fonts.semiBold,
    fontSize: theme.fontSizes.xs,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
    letterSpacing: 0.6,
  },
  heroHeadline: {
    color: "#FFFFFF",
    fontSize: theme.fontSizes.xl,
    fontFamily: theme.fonts.title,
    lineHeight: 29,
    marginTop: 10,
  },
  heroButton: {
    backgroundColor: "#E8BB71",
    alignSelf: "flex-start",
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 13,
    marginTop: 14,
  },
  heroButtonText: {
    fontSize: theme.fontSizes.md,
    fontFamily: theme.fonts.semiBold,
    color: "#143F42",
  },
  promoBadge: {
    position: "absolute",
    right: 10,
    bottom: 10,
    width: 68,
    height: 68,
    backgroundColor: "#143F42",
    borderRadius: 34,
    borderWidth: 2,
    borderColor: "#E8BB71",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
  },
  discountText: {
    fontSize: theme.fontSizes.lg,
    fontFamily: theme.fonts.semiBold,
    color: theme.colors.accent,
  },
  discountLabel: {
    fontSize: theme.fontSizes.xs,
    fontFamily: theme.fonts.medium,
    color: theme.colors.accent,
  },
  heroImage: {
    position: "absolute",
    height: 205,
    width: 205,
    right: -10,
    bottom: -20,
  },
});
