import React from "react";
import { View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

// Simple shimmer effect
const Shimmer = () => (
  <LinearGradient
    colors={["#f3f4f6", "#e5e7eb", "#f3f4f6"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={{
      flex: 1,
      transform: [{ translateX: -100 }],
    }}
  />
);

const OrderHistorySkeleton = () => {
  const dummyOrders = [1, 2, 3];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 16, paddingTop: 20, paddingBottom: 24 }}
    >
      {dummyOrders.map((i) => (
        <View
          key={i}
          className="bg-white rounded-3xl overflow-hidden mb-4 border border-gray-100"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.08,
            shadowRadius: 16,
            elevation: 4,
          }}
        >
          {/* Ribbon placeholder */}
          <View className="absolute top-0 right-0 bg-emerald-50 px-4 py-1.5 rounded-bl-2xl z-10">
            <View className="w-16 h-3 bg-gray-200 rounded-full" />
          </View>

          {/* Card Header Skeleton */}
          <View className="p-5 pb-0">
            <View className="flex-row justify-between items-start mb-4 mt-2">
              <View className="flex-1 mr-4">
                <View className="w-32 h-4 bg-gray-200 rounded-full mb-2" />
                <View className="w-20 h-4 bg-gray-200 rounded-full mb-3" />
                <View className="w-48 h-3 bg-gray-200 rounded-full mb-1" />
                <View className="w-36 h-3 bg-gray-200 rounded-full" />
              </View>

              <View className="bg-orange-50 px-4 py-2 rounded-2xl items-end">
                <View className="w-12 h-3 bg-gray-200 rounded-full mb-1" />
                <View className="w-16 h-5 bg-gray-200 rounded-full" />
              </View>
            </View>

            {/* Date Row */}
            <View className="flex-row items-center bg-gray-50 rounded-2xl px-4 py-3 mb-4">
              <View className="bg-orange-100 p-2 rounded-xl mr-3">
                <Ionicons name="time-outline" size={16} color="#F97316" />
              </View>
              <View className="flex-1">
                <View className="w-24 h-3 bg-gray-200 rounded-full mb-2" />
                <View className="w-40 h-3 bg-gray-200 rounded-full" />
              </View>
            </View>
          </View>

          {/* Divider */}
          <View className="h-px bg-gray-100 mx-5" />

          {/* Footer Skeleton */}
          <View className="flex-row items-center justify-between px-5 py-4">
            {/* Rating placeholder */}
            <View className="flex-row items-center bg-amber-50 px-4 py-2.5 rounded-2xl border border-orange-100">
              <Ionicons name="star" size={16} color="#F59E0B" />
              <View className="w-8 h-3 bg-gray-200 rounded-full ml-2" />
            </View>

            {/* Buttons placeholder */}
            <View className="flex-row items-center gap-3">
              <View className="px-4 py-2.5 border-2 border-gray-200 rounded-2xl">
                <View className="w-12 h-3 bg-gray-200 rounded-full" />
              </View>
              <LinearGradient
                colors={["#fbbf24", "#f97316"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ borderRadius:16}}
                className="px-5 py-2.5 rounded-2xl"
              >
                <View className="w-16 h-3 bg-white/50 rounded-full" />
              </LinearGradient>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default OrderHistorySkeleton;
