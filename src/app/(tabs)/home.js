import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryList from "../../components/home/CategoryList";
import CoffeeCard from "../../components/home/CoffeeCard";
import HeroCarousel from "../../components/home/HeroCarousel";
import HomeHeader from "../../components/home/HomeHeader";
import { COFFEES } from "../../constants/coffees";
import { useCartStore } from "../../store/useCartStore";
export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const cardWidth = (width - 30) / 2;
  const [category, setCategory] = useState("All");

  const data =
    category !== "All"
      ? COFFEES.filter((item) => item.category === category)
      : COFFEES;
  const quantity = useCartStore((state) => state.quantity);
  const addItem = useCartStore((state) => state.addItem);
  const subtractItem = useCartStore((state) => state.subtractItem);

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Product Container */}
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={2}
          key={2}
          ListHeaderComponent={
            <View style={{ gap: 15 }}>
              <HomeHeader />
              {/* Hero Container */}
              <HeroCarousel />
              {/* Category Container */}
              <CategoryList category={category} setCategory={setCategory} />
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
            <CoffeeCard
              coffee={item}
              cardWidth={cardWidth}
              quantity={quantity}
              addItem={addItem}
              subtractItem={subtractItem}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#F7F3E9",
    // gap: 20,
  },
  productHeading: {
    fontFamily: "DMSans-SemiBold",
    fontSize: 18,
  },
});
