import { useState } from "react";
import { FlatList, View } from "react-native";
import { BANNERS } from "../../constants/banners";
import HeroBanner from "../banners/HeroBanner";
import HeroBanner2 from "../banners/HeroBanner2";
import HeroBanner3 from "../banners/HeroBanner3";
export default function HeroCarousel() {
  const [bannerWidth, setBannerWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View
      style={{ width: "100%" }}
      onLayout={(event) => {
        setBannerWidth(event.nativeEvent.layout.width);
      }}
    >
      {bannerWidth > 0 && (
        <FlatList
          data={BANNERS}
          horizontal
          pagingEnabled
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ width: bannerWidth }}>
              {item.id === 1 && <HeroBanner banner={item} />}
              {item.id === 2 && <HeroBanner2 banner={item} />}
              {item.id === 3 && <HeroBanner3 banner={item} />}
            </View>
          )}
        />
      )}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        {BANNERS.map((banner, index) => (
          <View
            key={banner.id}
            style={{
              width: index === 0 ? 20 : 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: index === 0 ? "#D8A45B" : "#CCCCCC",
              marginHorizontal: 4,
            }}
          />
        ))}
      </View>
    </View>
  );
}
