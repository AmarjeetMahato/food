import React from "react";
import { View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const OrderListSkeleton = () => {
  const skeletons = [1, 2, 3];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 24,
      }}
    >
      {skeletons.map((i) => (
        <View
          key={i}
          className="bg-white rounded-3xl shadow-lg shadow-gray-300/50 overflow-hidden mb-4 border border-gray-100"
        >
          {/* Status Ribbon Placeholder */}
          <View className="absolute top-0 right-0 bg-gray-100 px-4 py-1.5 rounded-bl-2xl z-10">
            <View className="w-16 h-3 bg-gray-200 rounded-full" />
          </View>

          <View className="p-5">
            {/* Header Section */}
            <View className="flex-row items-start mb-4">
              {/* Image Placeholder */}
              <View className="relative">
                <View className="w-16 h-16 bg-gray-200 rounded-2xl" />
                <View className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md">
                  <View className="w-5 h-5 bg-gray-300 rounded-full" />
                </View>
              </View>

              {/* Text Details */}
              <View className="flex-1 ml-4 mr-2">
                <View className="w-40 h-4 bg-gray-200 rounded-full mb-2" />
                <View className="w-32 h-3 bg-gray-200 rounded-full mb-2" />
                <View className="w-20 h-3 bg-gray-200 rounded-full" />
              </View>

              {/* Menu Placeholder */}
              <View className="w-5 h-5 bg-gray-200 rounded-full" />
            </View>

            {/* Items Summary */}
            <View className="bg-gray-50 rounded-2xl p-4 mb-4">
              <View className="flex-row items-center justify-between mb-2">
                <View className="w-24 h-3 bg-gray-200 rounded-full" />
                <View className="bg-white px-2.5 py-1 rounded-full">
                  <View className="w-10 h-3 bg-gray-200 rounded-full" />
                </View>
              </View>
              <View className="w-48 h-3 bg-gray-200 rounded-full mb-1" />
              <View className="w-40 h-3 bg-gray-200 rounded-full" />
            </View>

            {/* Info Grid */}
            <View className="flex-row bg-gray-50 rounded-2xl p-4 mb-4">
              <View className="flex-1">
                <View className="w-20 h-3 bg-gray-200 rounded-full mb-2" />
                <View className="w-24 h-4 bg-gray-200 rounded-full" />
              </View>
              <View className="w-px bg-gray-200 mx-3" />
              <View className="flex-1">
                <View className="w-20 h-3 bg-gray-200 rounded-full mb-2" />
                <View className="w-28 h-3 bg-gray-200 rounded-full mb-1" />
                <View className="w-16 h-3 bg-gray-200 rounded-full" />
              </View>
            </View>

            {/* Action Buttons */}
            <View className="flex-row gap-x-3">
              <View className="border-2 border-gray-200 px-5 py-3.5 rounded-2xl flex-row items-center justify-center">
                <View className="w-16 h-3 bg-gray-200 rounded-full" />
              </View>
              <LinearGradient
                colors={["#f3f4f6", "#e5e7eb"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="flex-1 px-5 py-3.5 rounded-2xl items-center justify-center"
              >
                <View className="w-20 h-3 bg-gray-300 rounded-full" />
              </LinearGradient>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default OrderListSkeleton;
