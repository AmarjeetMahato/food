import React from "react";
import { View, ScrollView, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { Easing } from "react-native-reanimated";

const { width } = Dimensions.get("window");
const CARD_HEIGHT = 250;
const IMAGE_HEIGHT = 180;
const GAP = 15;

export default function FoodCardSkeleton() {
  return (
    <ScrollView
      contentContainerStyle={{ padding: 12, alignItems: "center", gap: GAP }}
    >
      {[1, 2, 3].map((_, idx) => (
        <View
          key={idx}
          className="rounded-2xl bg-gray-200 overflow-hidden"
          style={{ width: width - 24 }}
        >
          {/* Image Skeleton */}
          <View
            className="bg-gray-300"
            style={{ height: IMAGE_HEIGHT, width: "100%" }}
          />

          {/* Meta Section */}
          <View className="px-4 py-3">
            {/* Title Skeleton */}
            <View className="bg-gray-300 h-5 w-3/5 rounded mb-2" />

            {/* Desc Skeleton */}
            <View className="bg-gray-300 h-3 w-4/5 rounded mb-2" />

            {/* Rating Box Skeleton */}
            <View
              className="bg-gray-300 h-5 w-12 rounded mb-2"
              style={{ alignSelf: "flex-start" }}
            />

            {/* Time & Distance Skeleton */}
            <View className="flex-row gap-3">
              <View className="bg-gray-300 h-4 w-20 rounded" />
              <View className="bg-gray-300 h-4 w-20 rounded" />
            </View>

            {/* Horizontal Scroll Skeleton */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ flexDirection: "row", gap: 10, marginTop: 10 }}
            >
              {[1, 2, 3].map((_, i) => (
                <View
                  key={i}
                  className="bg-gray-300 h-8 w-32 rounded-full"
                />
              ))}
            </ScrollView>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
