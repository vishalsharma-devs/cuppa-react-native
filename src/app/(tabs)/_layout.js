import { Tabs } from "expo-router";
import BottomNav from "../../components/navigation/BottomNav";
export default function TabLayout() {
  return (
    <Tabs tabBar={() => <BottomNav />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="favorites" />
      <Tabs.Screen name="cart" />
    </Tabs>
  );
}
