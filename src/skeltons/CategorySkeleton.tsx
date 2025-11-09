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
  radius = 8,
  style = {},
}: {
  width?: number | string;
  height: number;
  radius?: number;
  style?: any;
}) => {
  const opacity = useSharedValue(0.3);

  React.useEffect(() => {
    opacity.value = withRepeat(withTiming(1, { duration: 800 }), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      style={[
        {
          width,
          height,
          borderRadius: radius,
          backgroundColor: "#e5e7eb", // Tailwind gray-200
        },
        animatedStyle,
        style,
      ]}
    />
  );
};

export const MenuItemsSkeleton = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="py-1"
      contentContainerStyle={{ paddingHorizontal: 16 }}
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <View key={index} className="mr-1 items-center">
          <SkeletonBlock width={70} height={70} radius={9999} />
          <SkeletonBlock
            width={50}
            height={10}
            radius={5}
            style={{ marginTop: 8 }}
          />
        </View>
      ))}
    </ScrollView>
  );
};
