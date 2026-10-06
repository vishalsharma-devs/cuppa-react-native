import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import CoffeeCup from "../../assets/project_images/coffee-cupp.svg";
import { STRINGS } from "../constants/strings";
export default function HomeScreen() {
  const progress = useRef(new Animated.Value(0)).current;
  const textAnimatedValue = useRef(new Animated.Value(0)).current;
  const circleAnimatedValue = useRef(new Animated.Value(0)).current;
  const cupAnimatedValue = useRef(new Animated.Value(0)).current;
  const steamAnimatedValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.sequence([
      Animated.timing(circleAnimatedValue, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(cupAnimatedValue, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
    ]).start(({ finished }) => {
      if (finished) {
        Animated.parallel([
          Animated.timing(textAnimatedValue, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.loop(
            Animated.timing(steamAnimatedValue, {
              toValue: 1,
              duration: 1500,
              useNativeDriver: true,
            }),
          ),
          Animated.timing(progress, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: false,
          }),
        ]).start();
      }
    });
  }, []);

  const progressBarWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });
  return (
    <LinearGradient colors={["#fee6e6", "#ffffff"]} style={styles.container}>
      <Animated.View
        style={[
          styles.titleContainer,
          {
            opacity: textAnimatedValue,
            transform: [
              {
                translateX: textAnimatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-30, 0],
                }),
              },
            ],
          },
        ]}
      >
        <Text style={styles.title}>{STRINGS.splash.title}</Text>
        <Text style={styles.tagLine}>{STRINGS.splash.tagLine}</Text>
      </Animated.View>

      <View style={styles.artworkContainer}>
        <Animated.View
          style={[
            styles.circleShadowBox,
            {
              opacity: circleAnimatedValue,
              transform: [
                {
                  scale: circleAnimatedValue,
                },
              ],
            },
          ]}
        >
          <Svg width={200} height={200} viewBox="0 0 200 200">
            <Circle cx={100} cy={100} r={85} fill="#ffffff" />
          </Svg>
        </Animated.View>
        <Animated.View
          style={[
            styles.steamContainer,
            {
              // 💨 Inject our two new dynamic style-changers here:
              opacity: Animated.multiply(
                cupAnimatedValue,
                steamAnimatedValue.interpolate({
                  inputRange: [0, 0.8, 1],
                  outputRange: [0, 0.6, 0], // Mostly solid ➡️ begins fading ➡️ invisible
                }),
              ),
              transform: [
                {
                  translateY: steamAnimatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -25], // Starts at baseline, floats UP 25 pixels (-25)
                  }),
                },
              ],
            },
          ]}
        >
          <Svg width={80} height={80} viewBox="0 0 80 80">
            <Path
              d="M20 70 C5 55, 35 45, 20 25"
              stroke="#AD6636"
              strokeWidth={1.2}
              fill="none"
              strokeLinecap="round"
            />

            <Path
              d="M40 70 C25 55, 55 45, 40 25"
              stroke="#AD6636"
              strokeWidth={1.2}
              fill="none"
              strokeLinecap="round"
            />

            <Path
              d="M60 70 C45 55, 75 45, 60 25"
              stroke="#AD6636"
              strokeWidth={1.2}
              fill="none"
              strokeLinecap="round"
            />
          </Svg>
        </Animated.View>

        <Animated.View
          style={[
            styles.coffeeCupIcon,
            {
              opacity: cupAnimatedValue,
              transform: [
                {
                  translateY: cupAnimatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [40, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <CoffeeCup width={110} height={110} />
        </Animated.View>
      </View>
      <View style={styles.loadingContainer}>
        <View style={styles.progressBarTrack}>
          {/* <View style={styles.progressBarFill} /> */}
          <Animated.View
            style={[styles.progressBarFill, { width: progressBarWidth }]}
          />
        </View>
        <Text style={styles.loadingText}>{STRINGS.splash.loading}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 100,
    paddingBottom: 60,
  },
  title: {
    fontSize: 42,
    color: "#AD6636",
    letterSpacing: 2,
    textAlign: "center",
    fontFamily: "Playfair-Bold",
  },
  tagLine: {
    fontSize: 17,
  },
  titleContainer: {
    width: "100%",
    alignItems: "center",
  },
  artworkContainer: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  circleShadowBox: {
    backgroundColor: "#ffffff",
    borderRadius: 100,
    elevation: 4,
  },
  steamContainer: {
    position: "absolute",
    top: 1,
    zIndex: 1,
  },
  coffeeCupIcon: {
    position: "absolute",
    bottom: 20,
    zIndex: 2,
  },

  loadingContainer: {
    width: "70%",
    alignItems: "center",
  },
  progressBarTrack: {
    backgroundColor: "#E8D8D8",
    width: "100%",
    height: 6,
    borderRadius: 3,
    marginBottom: 12,
    overflow: "hidden",
  },
  progressBarFill: {
    width: "40%",
    backgroundColor: "#AD6636",
    height: "100%",
  },
  loadingText: {
    fontSize: 14,
    letterSpacing: 1,
    color: "#AD6636",
  },
});
