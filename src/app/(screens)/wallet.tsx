import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';

export default function Wallet() {
  return (
    <SafeAreaView edges={["bottom"]} className="flex-1 bg-gray-50">
      <ScrollView>
        {/* Header */}
        <View className="px-6 pt-4 pb-2">
          <Text className="text-2xl font-bold text-gray-800">My Wallet</Text>
        </View>

        {/* Wallet Card */}
        <View className="px-6 py-4">
          <LinearGradient
            colors={['#f97316', '#ea580c', '#c2410c']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              borderRadius: 24,
              padding: 24,
              shadowColor: '#f97316',
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.3,
              shadowRadius: 12,
              elevation: 8
            }}
          >
            <View className="mb-6">
              <Text className="text-white text-sm font-medium opacity-90 mb-2">
                Available Balance
              </Text>
              <Text className="text-white text-5xl font-bold">
                ₹1,248
              </Text>
            </View>

            <View className="mb-6">
              <Text className="text-white text-xs opacity-75">
                Available for orders and subscriptions
              </Text>
            </View>

            <TouchableOpacity 
              className="bg-white rounded-xl py-4"
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 8,
                elevation: 4
              }}
            >
              <Text className="text-orange-600 text-center text-base font-bold">
                + Add Money
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        {/* Quick Actions */}
        <View className="px-6 py-4">
          <Text className="text-lg font-bold text-gray-800 mb-4">Quick Actions</Text>
          <View className="flex-row justify-between">
            <TouchableOpacity className="bg-white rounded-2xl p-4 flex-1 mr-2 items-center border border-gray-100">
              <View className="bg-orange-100 rounded-full p-3 mb-3">
                <Text className="text-2xl">💸</Text>
              </View>
              <Text className="text-gray-800 text-sm font-semibold">Add Money</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white rounded-2xl p-4 flex-1 ml-2 items-center border border-gray-100">
              <View className="bg-orange-100 rounded-full p-3 mb-3">
                <Text className="text-2xl">📊</Text>
              </View>
              <Text className="text-gray-800 text-sm font-semibold">Transaction</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}