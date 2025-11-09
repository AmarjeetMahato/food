import React from "react";
import { View, ScrollView } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const SkeletonBlock = ({
  width,
  height,
  radius,
}: {
  width?: number;
  height: number;
  radius?: number;
}) => {
  const opacity = useSharedValue(0.3);

  React.useEffect(() => {
    opacity.value = withRepeat(withTiming(1, { duration: 1000 }), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      style={[
        animatedStyle,
        {
          width: width || 120,
          height,
          borderRadius: radius || 6,
          backgroundColor: "#e5e7eb",
        },
      ]}
    />
  );
};

export const OfferCardSkeleton = () => {
  return (
    <View className="w-44 bg-white rounded-xl overflow-hidden mb-3">
      {/* Image Skeleton */}
      <View className="w-full h-24 rounded-xl overflow-hidden bg-gray-300 relative">
        <SkeletonBlock height={96} radius={12} />

        {/* Price overlay */}
        <View className="absolute top-2 left-2 flex-row items-center">
          <SkeletonBlock width={50} height={20} radius={10} />
          <View className="ml-2">
            <SkeletonBlock width={40} height={20} radius={10} />
          </View>
        </View>

        {/* Rating overlay */}
        <View className="absolute bottom-0 right-0 flex-row items-center">
          <SkeletonBlock width={40} height={20} radius={10} />
        </View>
      </View>

      {/* Name & Details Skeleton */}
      <View className="p-1 mt-2">
        <SkeletonBlock width={120} height={16} radius={6} />
        <View className="flex-row items-center mt-2">
          <SkeletonBlock width={30} height={14} radius={6} />
          <SkeletonBlock width={50} height={14} radius={6} />
        </View>
      </View>
    </View>
  );
};