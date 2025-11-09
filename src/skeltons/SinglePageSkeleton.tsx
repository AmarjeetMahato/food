import React from "react";
import {  ScrollView, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SinglePageSkeleton() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Hero Image Section */}
        <View className="relative">
          <View className="w-full bg-gray-300 animate-pulse" style={{ height: 350 }} />
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.3)"]}
            className="absolute inset-0"
          />
          <View className="absolute top-3 left-4 w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
          <View className="absolute top-3 right-4 w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
          <View className="absolute bottom-4 right-4 w-24 h-10 bg-gray-200 rounded-full animate-pulse" />
        </View>

        {/* Content */}
        <View className="px-5 pt-5">
          {/* Title and Price */}
          <View className="flex-row items-start justify-between mb-5">
            <View className="flex-1 pr-3">
              <View className="w-48 h-6 bg-gray-300 rounded mb-2 animate-pulse" />
              <View className="w-32 h-4 bg-gray-300 rounded animate-pulse" />
            </View>
            <View className="items-end">
              <View className="w-20 h-6 bg-gray-300 rounded animate-pulse" />
              <View className="w-12 h-3 bg-gray-200 rounded mt-1 animate-pulse" />
            </View>
          </View>

          {/* Quick Info */}
          <View className="flex-row items-center gap-4 mt-2">
            <View className="w-16 h-6 bg-gray-300 rounded animate-pulse" />
            <View className="w-24 h-4 bg-gray-300 rounded animate-pulse" />
            <View className="w-24 h-4 bg-gray-300 rounded animate-pulse" />
          </View>

          {/* Description */}
          <View className="mb-5">
            <View className="w-full h-16 bg-gray-200 rounded-lg animate-pulse" />
          </View>

          {/* Features */}
          <View className="flex-row gap-2.5 mb-6">
            <View className="flex-1 h-20 bg-gray-200 rounded-2xl animate-pulse" />
            <View className="flex-1 h-20 bg-gray-200 rounded-2xl animate-pulse" />
            <View className="flex-1 h-20 bg-gray-200 rounded-2xl animate-pulse" />
          </View>

          {/* What's Inside */}
          <View className="mb-6">
            <View className="flex-row items-center mb-3">
              <View className="w-1 h-6 bg-gray-300 rounded mr-2 animate-pulse" />
              <View className="w-32 h-6 bg-gray-300 rounded animate-pulse" />
            </View>
            <View className="bg-gray-200 rounded-2xl p-4 animate-pulse">
              <View className="flex-row flex-wrap gap-2">
                {[...Array(6)].map((_, i) => (
                  <View key={i} className="w-24 h-8 bg-gray-300 rounded-full animate-pulse" />
                ))}
              </View>
            </View>
          </View>

          {/* Chef's Special */}
          <View className="mb-6">
            <View className="flex-row items-center mb-3">
              <View className="w-1 h-6 bg-gray-300 rounded mr-2 animate-pulse" />
              <View className="w-32 h-6 bg-gray-300 rounded animate-pulse" />
            </View>
            <View className="rounded-2xl p-4 bg-gray-200 animate-pulse">
              <View className="flex-row gap-3">
                <View className="w-12 h-12 bg-gray-300 rounded-full animate-pulse" />
                <View className="flex-1 h-12 bg-gray-300 rounded animate-pulse" />
              </View>
            </View>
          </View>

          {/* Customer Reviews */}
          <View className="mb-6">
            <View className="flex-row items-center justify-between mb-3">
              <View className="flex-row items-center">
                <View className="w-1 h-6 bg-gray-300 rounded mr-2 animate-pulse" />
                <View className="w-32 h-6 bg-gray-300 rounded animate-pulse" />
              </View>
              <View className="w-20 h-4 bg-gray-300 rounded animate-pulse" />
            </View>
            <View className="bg-gray-200 rounded-2xl p-4 animate-pulse">
              <View className="flex-row items-start mb-3 gap-3">
                <View className="w-12 h-12 bg-gray-300 rounded-full animate-pulse" />
                <View className="flex-1 space-y-2">
                  <View className="w-32 h-4 bg-gray-300 rounded animate-pulse" />
                  <View className="w-24 h-3 bg-gray-300 rounded animate-pulse" />
                  <View className="w-full h-12 bg-gray-300 rounded animate-pulse" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Add to Cart */}
      <View className="absolute bottom-0 left-0 right-0 bg-gray-200 p-4 animate-pulse rounded-t-3xl" />
    </SafeAreaView>
  );
}
