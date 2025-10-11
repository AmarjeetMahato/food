import React from 'react';
import { View, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import {
  BannerDesign1,
  BannerDesign2,
  BannerDesign3,
  BannerDesign4,
  BannerDesign5,
  BannerDesign6,
  HealthyBanner,
} from './FoodBanner';

const { width } = Dimensions.get('window');

export const OffersCarousel = () => {
  const progress = useSharedValue(0);

  const banners = [
    <HealthyBanner key="1"/>,
    <BannerDesign1 key="2" />,
    <BannerDesign2 key="3" />,
    <BannerDesign3 key="4" />,
    <BannerDesign4 key="5" />,
    <BannerDesign5 key="6" />,
    <BannerDesign6 key="7" />,
  ];

  // ✅ useAnimatedStyle inside component
  const animatedDotStyle = useAnimatedStyle(() => ({
    opacity: progress.value, // Example usage (optional)
  }));

  return (
    <View className="mt-2 mb-4">
      <Carousel
        width={width}
        height={190}
        autoPlay
        autoPlayInterval={3500}
        pagingEnabled
        loop
        data={banners}
        scrollAnimationDuration={800}
        onProgressChange={(_, absoluteProgress) => (progress.value = absoluteProgress)}
        renderItem={({ item }) => item}
      />

      {/* Pagination Dots */}
      <View className="flex-row justify-center mt-2">
        {banners.map((_, index) => (
          <Animated.View
            key={index}
            style={[
              {
                width: 8,
                height: 8,
                borderRadius: 4,
                marginHorizontal: 4,
                backgroundColor: 'orange',
              },
              useAnimatedStyle(() => ({
                opacity:
                  Math.round(progress.value % banners.length) === index ? 1 : 0.4,
              })),
            ]}
          />
        ))}
      </View>
    </View>
  );
};
