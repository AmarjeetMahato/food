import React from "react";
import { 
  ScrollView, 
  View, 
  Dimensions, 
  StyleProp, 
  ViewStyle 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
const heroHeight = width * 0.85;

interface SkeletonPlaceholderProps {
  style?: StyleProp<ViewStyle>;
  className?: string;
}

const SkeletonPlaceholder: React.FC<SkeletonPlaceholderProps> = ({ style, className }) => (
  <View 
    style={[{ backgroundColor: '#E5E7EB', borderRadius: 8, overflow: 'hidden' }, style]} 
    className={className}
  />
);

const FoodDetailLoadingSkeleton: React.FC = () => {
  const insets = { bottom: 0 };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* ======================= Hero Section ======================= */}
        <View className="relative">
          {/* Hero Image */}
          <SkeletonPlaceholder style={{ width, height: heroHeight }} />

          {/* Back Button */}
          <SkeletonPlaceholder
            style={{ width: 40, height: 40, position: 'absolute', top: 12, left: 16, borderRadius: 20 }}
          />

          {/* Favorite Button */}
          <SkeletonPlaceholder
            style={{ width: 40, height: 40, position: 'absolute', top: 12, right: 16, borderRadius: 20 }}
          />

          {/* Bestseller Tag */}
          <SkeletonPlaceholder
            style={{ width: 120, height: 32, position: 'absolute', bottom: 16, right: 16, borderRadius: 16 }}
          />
        </View>

        {/* ======================= Details Section ======================= */}
        <View className="px-5 pt-5">
          {/* Title, Subtitle, Price */}
          <View className="mb-5 flex-row items-start justify-between">
            <View className="flex-1 pr-3">
              <SkeletonPlaceholder style={{ width: '90%', height: 28, marginBottom: 6 }} />
              <SkeletonPlaceholder style={{ width: '50%', height: 18 }} />
            </View>
            <View className="items-end">
              <SkeletonPlaceholder style={{ width: 70, height: 40, borderRadius: 16 }} />
              <SkeletonPlaceholder style={{ width: 40, height: 10, marginTop: 8 }} />
            </View>
          </View>

          {/* Metrics Row */}
          <View className="flex-row items-center gap-4 mt-2">
            <SkeletonPlaceholder style={{ width: 60, height: 24, borderRadius: 8 }} />
            <SkeletonPlaceholder style={{ width: 80, height: 18, borderRadius: 8 }} />
            <SkeletonPlaceholder style={{ width: 80, height: 18, borderRadius: 8 }} />
          </View>

          {/* Description */}
          <View className="mb-5">
            <SkeletonPlaceholder style={{ width: '100%', height: 18, marginBottom: 6 }} />
            <SkeletonPlaceholder style={{ width: '95%', height: 18, marginBottom: 6 }} />
            <SkeletonPlaceholder style={{ width: '60%', height: 18 }} />
          </View>

          {/* Quick Features */}
          <View className="flex-row gap-2.5 mb-6">
            {[1, 2, 3].map((i) => (
              <View key={i} className="flex-1 items-center">
                <SkeletonPlaceholder style={{ width: 32, height: 32, borderRadius: 16 }} />
                <SkeletonPlaceholder style={{ width: '60%', height: 14, marginTop: 8 }} />
                <SkeletonPlaceholder style={{ width: '40%', height: 10, marginTop: 4 }} />
              </View>
            ))}
          </View>

          {/* Ingredients */}
          <View className="mb-6">
            <SkeletonPlaceholder style={{ width: 140, height: 24, marginBottom: 12 }} />
            <View className="rounded-2xl p-4">
              <View className="flex-row flex-wrap gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <SkeletonPlaceholder key={i} style={{ width: 100, height: 36, borderRadius: 18, marginBottom: 8 }} />
                ))}
              </View>
            </View>
          </View>

          {/* Chef's Special */}
          <View className="mb-6">
            <SkeletonPlaceholder style={{ width: 120, height: 24, marginBottom: 12 }} />
            <View className="rounded-2xl p-4">
              <View className="flex-row gap-3">
                <SkeletonPlaceholder style={{ width: 40, height: 40, borderRadius: 20 }} />
                <View className="flex-1">
                  <SkeletonPlaceholder style={{ width: '100%', height: 16, marginBottom: 4 }} />
                  <SkeletonPlaceholder style={{ width: '90%', height: 16, marginBottom: 4 }} />
                  <SkeletonPlaceholder style={{ width: '50%', height: 16 }} />
                </View>
              </View>
            </View>
          </View>

          {/* Reviews */}
          <View className="mb-6">
            <View className="flex-row items-center justify-between mb-3">
              <SkeletonPlaceholder style={{ width: 160, height: 24 }} />
              <SkeletonPlaceholder style={{ width: 70, height: 20 }} />
            </View>
            <View className="rounded-2xl p-4">
              <View className="flex-row items-start mb-3">
                <SkeletonPlaceholder style={{ width: 48, height: 48, borderRadius: 24, marginRight: 12 }} />
                <View className="flex-1">
                  <View className="flex-row items-center justify-between mb-1">
                    <SkeletonPlaceholder style={{ width: 100, height: 16 }} />
                    <SkeletonPlaceholder style={{ width: 60, height: 12 }} />
                  </View>
                  <SkeletonPlaceholder style={{ width: 80, height: 14, marginBottom: 8 }} />
                  <SkeletonPlaceholder style={{ width: '100%', height: 16, marginBottom: 4 }} />
                  <SkeletonPlaceholder style={{ width: '80%', height: 16 }} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View 
        style={{ paddingBottom: insets.bottom }}
        className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3"
      >
        <View className="flex-row items-center gap-3">
          <SkeletonPlaceholder style={{ width: 120, height: 50, borderRadius: 16 }} />
          <SkeletonPlaceholder style={{ flex: 1, height: 50, borderRadius: 16 }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FoodDetailLoadingSkeleton;
