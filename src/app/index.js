import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import CoffeeCup from "../../assets/project_images/coffee-cup.svg";
import { STRINGS } from "../constants/strings";
import { theme } from "../theme/theme";
// const SKIP_SPLASH = true;
export default function SplashScreen() {
  const router = useRouter();
  const progress = useRef(new Animated.Value(0)).current;
  const textAnimatedValue = useRef(new Animated.Value(0)).current;
  const circleAnimatedValue = useRef(new Animated.Value(0)).current;
  const cupAnimatedValue = useRef(new Animated.Value(0)).current;
  const steamAnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // if (SKIP_SPLASH) {
    //   router.replace("/cart");
    //   return;
    // }
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
        Animated.timing(textAnimatedValue, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }).start();
        Animated.loop(
          Animated.timing(steamAnimatedValue, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
          }),
        ).start();
        Animated.timing(progress, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: false,
        }).start(({ finished }) => {
          if (finished) {
            router.replace("/home");
          }
        });
      }
    });
  }, []);

  const progressBarWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });
  return (
    <LinearGradient
      colors={[theme.colors.background, theme.colors.notificationBg]}
      style={styles.container}
    >
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
            <Circle cx={100} cy={100} r={85} fill={theme.colors.surface} />
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
              stroke={theme.colors.accent}
              strokeWidth={1.2}
              fill="none"
              strokeLinecap="round"
            />

            <Path
              d="M40 70 C25 55, 55 45, 40 25"
              stroke={theme.colors.accent}
              strokeWidth={1.2}
              fill="none"
              strokeLinecap="round"
            />

            <Path
              d="M60 70 C45 55, 75 45, 60 25"
              stroke={theme.colors.accent}
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
    backgroundColor: theme.colors.background,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 100,
    paddingBottom: 60,
  },
  title: {
    fontSize: theme.fontSizes.display,
    color: theme.colors.primary,
    textAlign: "center",
    fontFamily: theme.fonts.title,
  },
  tagLine: {
    fontSize: theme.fontSizes.lg,
    fontFamily: theme.fonts.regular,
    color: theme.colors.textSecondary,
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
    backgroundColor: theme.colors.surface,
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
    backgroundColor: theme.colors.surface,
    width: "100%",
    height: 6,
    borderRadius: 3,
    marginBottom: 12,
    overflow: "hidden",
  },
  progressBarFill: {
    backgroundColor: theme.colors.primary,
    height: "100%",
  },
  loadingText: {
    fontSize: theme.fontSizes.sm,
    letterSpacing: 0.8,
    color: theme.colors.primary,
    fontFamily: theme.fonts.medium,
  },
});
