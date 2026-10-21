import { useEffect, useRef, useState } from "react";
import { FlatList, View } from "react-native";
import { BANNERS } from "../../constants/banners";
import HeroBanner from "../banners/HeroBanner";
import HeroBanner2 from "../banners/HeroBanner2";
import HeroBanner3 from "../banners/HeroBanner3";
export default function HeroCarousel() {
  const [bannerWidth, setBannerWidth] = useState(0);
  const flatListRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    if (bannerWidth === 0) return;

    const timer = setTimeout(() => {
      const nextIndex = (activeIndex + 1) % BANNERS.length;

      flatListRef.current?.scrollToOffset({
        offset: nextIndex * bannerWidth,
        animated: true,
      });

      setActiveIndex(nextIndex);
    }, 4000);

    return () => clearTimeout(timer);
  }, [activeIndex, bannerWidth]);
  return (
    <View
      style={{ width: "100%" }}
      onLayout={(event) => {
        setBannerWidth(event.nativeEvent.layout.width);
      }}
    >
      {bannerWidth > 0 && (
        <FlatList
          ref={flatListRef}
          data={BANNERS}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ width: bannerWidth }}>
              {item.id === 1 && <HeroBanner banner={item} />}
              {item.id === 2 && <HeroBanner2 banner={item} />}
              {item.id === 3 && <HeroBanner3 banner={item} />}
            </View>
          )}
          onMomentumScrollEnd={(event) => {
            const scrollX = event.nativeEvent.contentOffset.x;
            const index = Math.round(scrollX / bannerWidth);

            setActiveIndex(index);
          }}
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
              width: index === activeIndex ? 20 : 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: index === activeIndex ? "#D8A45B" : "#CCCCCC",
              marginHorizontal: 4,
            }}
          />
        ))}
      </View>
    </View>
  );
}
