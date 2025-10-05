import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const { width } = Dimensions.get("window");


const SinglePage = () => {
  const insets = useSafeAreaInsets();
  const [count, setCount] = useState<number>(0);
  const router = useRouter();
  const sampleImage =
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop";

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Top Image */}
        <View className="relative">
          <Image
            source={{ uri: sampleImage }}
            style={{ width: width, height: width * 0.7 }}
            className="w-full"
          />

          {/* Back Button */}
          <TouchableOpacity
            onPress={() => router.back()}
            className="absolute top-5 left-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg"
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>

          {/* Favorite Button */}
          <TouchableOpacity className="absolute top-5 right-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg">
            <Ionicons name="heart-outline" size={24} color="#ef4444" />
          </TouchableOpacity>

          {/* Discount Badge */}
          <View className="absolute bottom-4 right-4 bg-red-500 px-4 py-2 rounded-full">
            <Text className="text-white font-bold text-sm">20% OFF</Text>
          </View>
        </View>

        {/* Content Card */}
        <View className="bg-white rounded-t-3xl -mt-6 px-6 pt-6">
          {/* Header Section */}
          <View className="flex-row justify-between items-start mb-4">
            <View className="flex-1">
              <Text className="text-3xl font-bold text-gray-900 mb-2">
                Delicious Burger
              </Text>
              <View className="flex-row items-center gap-3">
                <View className="flex-row items-center gap-1">
                  <Ionicons name="star" size={18} color="#fbbf24" />
                  <Text className="text-gray-700 font-semibold">4.8</Text>
                  <Text className="text-gray-500 text-sm">(250+)</Text>
                </View>
                <View className="flex-row items-center gap-1">
                  <Ionicons name="flame" size={18} color="#ef4444" />
                  <Text className="text-gray-700 font-semibold">550 kcal</Text>
                </View>
              </View>
            </View>
            <View className="bg-orange-500 px-4 py-2 rounded-full">
              <Text className="text-white text-2xl font-bold">₹150</Text>
            </View>
          </View>

          {/* Description */}
          <View className="mb-6">
            <Text className="text-gray-600 text-base leading-6">
              A juicy burger with melted cheddar cheese, fresh lettuce, tomatoes, pickles, 
              and our special secret sauce. Served in a freshly baked sesame bun.
            </Text>
          </View>

          {/* Quick Info Cards */}
          <View className="flex-row gap-3 mb-6">
            <View className="flex-1 bg-orange-50 rounded-2xl p-4 items-center">
              <Ionicons name="time-outline" size={24} color="#ea580c" />
              <Text className="text-gray-900 font-bold mt-2">15 min</Text>
              <Text className="text-gray-600 text-xs">Prep Time</Text>
            </View>
            <View className="flex-1 bg-green-50 rounded-2xl p-4 items-center">
              <Ionicons name="leaf-outline" size={24} color="#16a34a" />
              <Text className="text-gray-900 font-bold mt-2">Fresh</Text>
              <Text className="text-gray-600 text-xs">Ingredients</Text>
            </View>
            <View className="flex-1 bg-blue-50 rounded-2xl p-4 items-center">
              <Ionicons name="restaurant-outline" size={24} color="#2563eb" />
              <Text className="text-gray-900 font-bold mt-2">Hot</Text>
              <Text className="text-gray-600 text-xs">Served</Text>
            </View>
          </View>

          {/* Ingredients Section */}
          <View className="mb-6">
            <View className="flex-row items-center mb-3">
              <Ionicons name="leaf" size={22} color="#16a34a" />
              <Text className="text-xl font-bold text-gray-900 ml-2">Ingredients</Text>
            </View>
            <View className="bg-gray-50 rounded-2xl p-4">
              <View className="flex-row flex-wrap gap-2">
                {['Beef Patty', 'Cheddar', 'Lettuce', 'Tomato', 'Pickles', 'Onions', 'Sesame Bun', 'Secret Sauce'].map((item, i) => (
                  <View key={i} className="bg-white px-3 py-2 rounded-full border border-gray-200">
                    <Text className="text-sm text-gray-700">{item}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* How It's Made */}
          <View className="mb-6">
            <View className="flex-row items-center mb-3">
              <Ionicons name="flame" size={22} color="#ea580c" />
              <Text className="text-xl font-bold text-gray-900 ml-2">How It's Made</Text>
            </View>
            <View className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-4">
              <Text className="text-gray-700 text-sm leading-6">
                The burger is freshly prepared after you place the order. The beef patty is grilled 
                to perfection with a smoky flavor, and all ingredients are locally sourced and 
                freshly chopped.
              </Text>
            </View>
          </View>

          {/* Nutrition Info */}
          <View className="mb-6">
            <View className="flex-row items-center mb-3">
              <Ionicons name="analytics" size={22} color="#8b5cf6" />
              <Text className="text-xl font-bold text-gray-900 ml-2">Nutrition Facts</Text>
            </View>
            <View className="bg-gray-50 rounded-2xl p-4">
              <View className="flex-row flex-wrap gap-3">
                {[
                  { label: 'Calories', value: '550 kcal', icon: 'flame', color: '#ef4444' },
                  { label: 'Protein', value: '28g', icon: 'barbell', color: '#8b5cf6' },
                  { label: 'Carbs', value: '45g', icon: 'nutrition', color: '#f59e0b' },
                  { label: 'Fat', value: '30g', icon: 'water', color: '#3b82f6' },
                ].map((item, i) => (
                  <View key={i} className="flex-1 min-w-[45%] bg-white rounded-xl p-3 border border-gray-200">
                    <View className="flex-row items-center gap-2 mb-1">
                      <Ionicons name={item.icon as any} size={16} color={item.color} />
                      <Text className="text-xs text-gray-600">{item.label}</Text>
                    </View>
                    <Text className="text-lg font-bold text-gray-900">{item.value}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* Reviews Preview */}
          <View className="mb-6">
            <View className="flex-row items-center justify-between mb-3">
              <View className="flex-row items-center">
                <Ionicons name="chatbubbles" size={22} color="#3b82f6" />
                <Text className="text-xl font-bold text-gray-900 ml-2">Reviews</Text>
              </View>
              <TouchableOpacity>
                <Text className="text-orange-600 font-semibold">View All</Text>
              </TouchableOpacity>
            </View>
            <View className="bg-gray-50 rounded-2xl p-4">
              <View className="flex-row items-center mb-2">
                <Image 
                  source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <View className="flex-1">
                  <Text className="font-semibold text-gray-900">John Doe</Text>
                  <View className="flex-row items-center">
                    {[1,2,3,4,5].map((star) => (
                      <Ionicons key={star} name="star" size={14} color="#fbbf24" />
                    ))}
                  </View>
                </View>
                <Text className="text-gray-500 text-xs">2 days ago</Text>
              </View>
              <Text className="text-gray-600 text-sm">
                Amazing burger! The patty was juicy and perfectly cooked. Will order again! 🍔
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Fixed Bottom Bar */}
      <View   style={{ paddingBottom: insets.bottom  }}  className="absolute bottom-6 left-0 right-0 bg-white border-t border-gray-200 px-4 py-4">
        <View className="flex-row items-center gap-3">
          {/* Quantity Selector */}
          <View className="flex-row items-center bg-gray-100 rounded-full px-2">
            <TouchableOpacity className="p-2">
              <Ionicons name="remove" size={20} color="#374151" disabled={count==0} onPress={() => setCount(prev => prev - 1)} />
            </TouchableOpacity>
            <Text className="text-gray-900 font-bold text-lg px-4">{count}</Text>
            <TouchableOpacity className="p-2">
              <Ionicons name="add" size={20} color="#374151" onPress={() => setCount(prev => prev + 1)} />
            </TouchableOpacity>
          </View>

          {/* Add to Cart Button */}
          <TouchableOpacity activeOpacity={0.8} className="flex-1">
            <LinearGradient
              colors={["#fb923c", "#ea580c"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
                   style={{
      paddingVertical: 16,       // py-4
      flexDirection: "row",       // flex-row
      alignItems: "center",
      justifyContent: "center",
      gap: 8,                     // gap-2
      borderRadius: 5,           // rounded-xl
    }}
            >
              <Ionicons name="cart" size={20} color="white" />
              <Text className="text-white font-bold text-lg">
                Add to Cart • ₹150
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SinglePage;