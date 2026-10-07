import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_600SemiBold,
} from "@expo-google-fonts/dm-sans";
import { Lora_600SemiBold, useFonts } from "@expo-google-fonts/lora";
export function useAppFonts() {
  const [fontsLoaded] = useFonts({
    "Lora-SemiBold": Lora_600SemiBold,
    "DMSans-Regular": DMSans_400Regular,
    "DMSans-Medium": DMSans_500Medium,
    "DMSans-SemiBold": DMSans_600SemiBold,
  });
  return fontsLoaded;
}
