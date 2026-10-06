import {
    PlayfairDisplay_700Bold,
    useFonts,
} from "@expo-google-fonts/playfair-display";

export function useAppFonts() {
  const [fontsLoaded] = useFonts({ "Playfair-Bold": PlayfairDisplay_700Bold });
  return fontsLoaded;
}
