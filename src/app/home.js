import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryList from "../components/home/CategoryList";
import CoffeeCard from "../components/home/CoffeeCard";
import HeroBanner from "../components/home/HeroBanner";
import HomeHeader from "../components/home/HomeHeader";
import { COFFEES } from "../constants/coffees";
export default function HomeScreen() {
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
              <HomeHeader />
              {/* Hero Container */}
              <HeroBanner />
              {/* Category Container */}
              <CategoryList />
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
          renderItem={({ item }) => <CoffeeCard coffee={item} />}
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
});
