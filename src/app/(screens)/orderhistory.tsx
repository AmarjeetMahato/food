import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Orderhistory = () => {
    const [activeTab, setActiveTab] = useState('All Orders')

    const tabs = ['All Orders', 'Delivered', 'Cancelled', 'Last Week', 'Monthly']

    return (
        <View className="flex-1 bg-gray-50">
            {/* Horizontal Scrollable Tabs */}
            <View className="bg-white border-b border-gray-200">
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className="px-4"
                    contentContainerStyle={{ paddingVertical: 12, paddingRight: 16 }}
                >
                    {tabs.map((tab) => (
                        <TouchableOpacity
                            key={tab}
                            onPress={() => setActiveTab(tab)}
                            className="mr-3"
                        >
                            {activeTab === tab ? (
                                <LinearGradient
                                    colors={['#f97316', '#ea580c']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={{
                                        paddingHorizontal: 20,
                                        paddingVertical: 10,
                                        borderRadius: 9999
                                    }}
                                >
                                    <Text className="text-white text-sm font-bold">{tab}</Text>
                                </LinearGradient>
                            ) : (
                                <View className="px-5 py-2.5 rounded-full bg-gray-200">
                                    <Text className="text-gray-600 text-sm font-semibold">{tab}</Text>
                                </View>
                            )}
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/* Content Area */}
            {/* Content Area */}
<ScrollView className="flex-1 bg-gray-50">
  <View className="p-4 space-y-4">
    {/* Order Card 1 */}
    <View className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <View className="p-5">
        <View className="flex-row justify-between items-start mb-3">
          <View className="flex-1">
            <Text className="text-lg font-bold text-gray-800 mb-1">
              Pizza Paradise
            </Text>
            <Text className="text-gray-600 text-sm leading-5">
              Margherita Pizza, Garlic Bread, Coke
            </Text>
            <Text className="text-gray-400 text-xs mt-2">Oct 2, 2025 • 7:30 PM</Text>
          </View>
          <View className="items-end ml-3">
            <Text className="text-lg font-bold text-gray-800 mb-2">
              ₹450
            </Text>
            <View className="bg-green-100 px-3 py-1 rounded-full">
              <Text className="text-green-700 text-xs font-semibold">
                Delivered
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-row items-center justify-between pt-3 border-t border-gray-100">
          <View className="flex-row items-center">
            <Text className="text-yellow-500 text-base mr-1">⭐</Text>
            <Text className="text-sm font-semibold text-gray-700">4.5</Text>
          </View>
          <View className="flex-row space-x-2">
            <TouchableOpacity className="px-4 py-2">
              <Text className="text-orange-600 text-sm font-semibold">View Details</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-2 bg-orange-500 rounded-lg">
              <Text className="text-white text-sm font-bold">Reorder</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    {/* Order Card 2 */}
    <View className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <View className="p-5">
        <View className="flex-row justify-between items-start mb-3">
          <View className="flex-1">
            <Text className="text-lg font-bold text-gray-800 mb-1">
              Burger House
            </Text>
            <Text className="text-gray-600 text-sm leading-5">
              Cheese Burger, French Fries, Chocolate Milkshake
            </Text>
            <Text className="text-gray-400 text-xs mt-2">Sep 28, 2025 • 8:15 PM</Text>
          </View>
          <View className="items-end ml-3">
            <Text className="text-lg font-bold text-gray-800 mb-2">
              ₹380
            </Text>
            <View className="bg-green-100 px-3 py-1 rounded-full">
              <Text className="text-green-700 text-xs font-semibold">
                Delivered
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-row items-center justify-between pt-3 border-t border-gray-100">
          <View className="flex-row items-center">
            <Text className="text-yellow-500 text-base mr-1">⭐</Text>
            <Text className="text-sm font-semibold text-gray-700">4.8</Text>
          </View>
          <View className="flex-row space-x-2">
            <TouchableOpacity className="px-4 py-2">
              <Text className="text-orange-600 text-sm font-semibold">View Details</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-2 bg-orange-500 rounded-lg">
              <Text className="text-white text-sm font-bold">Reorder</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    {/* Order Card 3 */}
    <View className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <View className="p-5">
        <View className="flex-row justify-between items-start mb-3">
          <View className="flex-1">
            <Text className="text-lg font-bold text-gray-800 mb-1">
              Spice Kitchen
            </Text>
            <Text className="text-gray-600 text-sm leading-5">
              Chicken Biryani, Raita, Gulab Jamun
            </Text>
            <Text className="text-gray-400 text-xs mt-2">Sep 25, 2025 • 9:00 PM</Text>
          </View>
          <View className="items-end ml-3">
            <Text className="text-lg font-bold text-gray-800 mb-2">
              ₹520
            </Text>
            <View className="bg-green-100 px-3 py-1 rounded-full">
              <Text className="text-green-700 text-xs font-semibold">
                Delivered
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-row items-center justify-between pt-3 border-t border-gray-100">
          <View className="flex-row items-center">
            <Text className="text-yellow-500 text-base mr-1">⭐</Text>
            <Text className="text-sm font-semibold text-gray-700">4.2</Text>
          </View>
          <View className="flex-row space-x-2">
            <TouchableOpacity className="px-4 py-2">
              <Text className="text-orange-600 text-sm font-semibold">View Details</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-2 bg-orange-500 rounded-lg">
              <Text className="text-white text-sm font-bold">Reorder</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  </View>
</ScrollView>
        </View>
    )
}

export default Orderhistory