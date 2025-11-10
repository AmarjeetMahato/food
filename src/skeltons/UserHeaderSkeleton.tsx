import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

interface SkeletonProps {
  width?: number;
  height: number;
  radius?: number;
  fullWidth?: boolean; 
  style?: StyleProp<ViewStyle>;
}

const Skeleton: React.FC<SkeletonProps> = ({ width, height, radius, fullWidth, style }) => {
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
          width: fullWidth ? "100%" : width,
          height,
          borderRadius: radius || 8,
          backgroundColor: "#e5e7eb", 
        } as ViewStyle,
        style,
      ]}
    />
  );
};

const UserHeaderSkeleton = () => {
  return (
    <View className="flex-row mt-2 items-center justify-between px-2">
      {/* Left Side */}
      <View className="flex-row items-center gap-3 flex-shrink">
       
        <View>
          <Skeleton width={120} height={16} />
          <View className="mt-2">
            <Skeleton width={180} height={12} />
          </View>
        </View>
      </View>

      {/* Right Side - Icons */}
      <View className="flex-row items-center gap-x-4">
        <Skeleton width={36} height={36} radius={18} />
        <Skeleton width={36} height={36} radius={18} />
      </View>
    </View>
  );
};

export default UserHeaderSkeleton;
