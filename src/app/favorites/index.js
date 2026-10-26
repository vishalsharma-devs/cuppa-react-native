import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNav from "../../components/navigation/BottomNav";

export default function favorites() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>I am Favorites</Text>
      </View>
      <BottomNav />
    </SafeAreaView>
  );
}
