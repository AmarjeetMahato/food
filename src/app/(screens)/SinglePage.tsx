import React, { useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView, Animated, Easing } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get("window");

const SinglePage = () => {
  const insets = useSafeAreaInsets();
  const [count, setCount] = useState<number>(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter();
  
  const biryaniImage = "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=60";
  const price = 299;
    const rotateAnim = useRef(new Animated.Value(0)).current;


  const toggleFavorite = () => {
    // Reset rotation
    rotateAnim.setValue(0);

    // Animate 360 rotation
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();

    setIsFavorite((prev) => !prev);
  };

  // Interpolate rotation
  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Hero Image Section */}
        <View className="relative">
          <Image
            source={{ uri: biryaniImage }}
            style={{ width: width, height: width * 0.85 }}
            className="w-full"
          />

          {/* Gradient Overlay */}
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.3)"]}
            className="absolute inset-0"
          />

          {/* Back Button */}
          <TouchableOpacity
            onPress={() => router.back()}
            className="absolute top-3 left-4 bg-white/95 p-2.5 rounded-full shadow-xl"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 8,
            }}
          >
            <Ionicons name="arrow-back" size={24} color="#1f2937" />
          </TouchableOpacity>

          {/* Favorite Button */}
        <Animated.View
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              transform: [{ rotate: rotation }],
            }}
          >
            <TouchableOpacity
              onPress={toggleFavorite}
              className="bg-white/95 p-2.5 rounded-full shadow-xl"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 8,
              }}
            >
              <Ionicons
                name={isFavorite ? "heart" : "heart-outline"}
                size={24}
                color={isFavorite ? "#ea580c" : "#1f2937"}
              />
            </TouchableOpacity>
          </Animated.View>

          {/* Special Badge */}
          <View className="absolute bottom-4 right-4">
            <LinearGradient
              colors={["#dc2626", "#991b1b"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              className="px-4 py-2 rounded-full flex-row items-center gap-1.5"
              style={{
                shadowColor: "#dc2626",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 8,
                elevation: 6,
              }}
            >
              <Ionicons name="flame" size={16} color="white" />
              <Text className="text-white font-bold text-sm">BESTSELLER</Text>
            </LinearGradient>
          </View>
        </View>

        {/* Content Section */}
        <View className="px-5 pt-5">
          {/* Title & Price */}
          <View className="mb-5">
            <View className="flex-row items-start justify-between mb-2">
              <View className="flex-1 pr-3">
                <Text className="text-2xl font-extrabold text-gray-900 mb-1">
                  Hyderabadi Chicken Biryani
                </Text>
                <Text className="text-sm text-gray-500">
                  Authentic Hyderabadi Style
                </Text>
              </View>
              <View className="items-end">
                <LinearGradient
                  colors={["#fb923c", "#ea580c"]}
                  style={{
                      paddingHorizontal:16,
                      paddingVertical:6,
                      borderRadius:16
                  }}
                >
                  <Text className="text-white  text-2xl font-extrabold">₹{price}</Text>
                </LinearGradient>
                <Text className="text-xs text-gray-400 mt-1">per plate</Text>
              </View>
            </View>

            {/* Rating & Stats */}
            <View className="flex-row items-center gap-4 mt-2">
              <View className="flex-row items-center gap-1 bg-[#006400] px-2.5 py-1 rounded-lg">
                 <AntDesign name="star" size={16} color="#FF8C00" />
                <Text className="text-white font-bold text-sm">4.8</Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Ionicons name="time-outline" size={16} color="#6b7280" />
                <Text className="text-gray-600 text-sm font-medium">30-35 min</Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Ionicons name="flame-outline" size={16} color="#ea580c" />
                <Text className="text-gray-600 text-sm font-medium">850 kcal</Text>
              </View>
            </View>
          </View>

          {/* Description */}
          <View className="mb-5">
            <Text className="text-base text-gray-700 leading-6">
              Aromatic basmati rice layered with succulent chicken pieces, slow-cooked 
              with traditional Hyderabadi spices, saffron, and fresh herbs. Served with 
              raita and gravy.
            </Text>
          </View>

          {/* Quick Features */}
          <View className="flex-row gap-2.5 mb-6">
            <View className="flex-1 bg-orange-50 rounded-2xl p-3.5 items-center border border-orange-100">
              <MaterialCommunityIcons name="pot-steam" size={28} color="#ea580c" />
              <Text className="text-gray-900 font-bold text-sm mt-1.5">Fresh</Text>
              <Text className="text-gray-500 text-xs">Made</Text>
            </View>
            <View className="flex-1 bg-orange-50 rounded-2xl p-3.5 items-center border border-orange-100">
              <Ionicons name="leaf" size={28} color="#16a34a" />
              <Text className="text-gray-900 font-bold text-sm mt-1.5">Premium</Text>
              <Text className="text-gray-500 text-xs">Quality</Text>
            </View>
            <View className="flex-1 bg-orange-50 rounded-2xl p-3.5 items-center border border-orange-100">
              <MaterialCommunityIcons name="chili-hot" size={28} color="#dc2626" />
              <Text className="text-gray-900 font-bold text-sm mt-1.5">Spicy</Text>
              <Text className="text-gray-500 text-xs">Medium</Text>
            </View>
          </View>

          {/* What's Inside */}
          <View className="mb-6">
            <View className="flex-row items-center mb-3">
              <LinearGradient
                colors={["#fb923c", "#ea580c"]}
                className="w-1 h-6 rounded-full mr-2"
              />
              <Text className="text-xl font-bold text-gray-900">What's Inside</Text>
            </View>
            <View className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-4">
              <View className="flex-row flex-wrap gap-2">
                {[
                  { icon: 'restaurant', label: 'Chicken Pieces', color: '#ea580c' },
                  { icon: 'nutrition', label: 'Basmati Rice', color: '#f59e0b' },
                  { icon: 'leaf', label: 'Fresh Herbs', color: '#16a34a' },
                  { icon: 'water', label: 'Raita', color: '#3b82f6' },
                  { icon: 'flame', label: 'Spices', color: '#dc2626' },
                  { icon: 'sparkles', label: 'Saffron', color: '#f59e0b' },
                ].map((item, i) => (
                  <View 
                    key={i} 
                    className="flex-row items-center bg-white px-3 py-2 rounded-full border border-orange-200"
                  >
                    <Ionicons name={item.icon as any} size={14} color={item.color} />
                    <Text className="text-sm text-gray-700 ml-1.5 font-medium">{item.label}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* Special Note */}
          <View className="mb-6">
            <View className="flex-row items-center mb-3">
              <LinearGradient
                colors={["#fb923c", "#ea580c"]}
                className="w-1 h-6 rounded-full mr-2"
              />
              <Text className="text-xl font-bold text-gray-900">Chef's Special</Text>
            </View>
            <View 
              className="rounded-2xl p-4 border border-orange-200"
              style={{ backgroundColor: '#fff7ed' }}
            >
              <View className="flex-row gap-3">
                <View className="bg-white p-2 rounded-full self-start">
                  <MaterialCommunityIcons name="chef-hat" size={24} color="#ea580c" />
                </View>
                <View className="flex-1">
                  <Text className="text-gray-800 text-sm leading-6">
                    Our biryani is prepared using the traditional dum pukht method, 
                    where rice and meat are slow-cooked in a sealed pot with aromatic spices, 
                    creating layers of incredible flavor.
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Reviews Section */}
          <View className="mb-6">
            <View className="flex-row items-center justify-between mb-3">
              <View className="flex-row items-center">
                <LinearGradient
                  colors={["#fb923c", "#ea580c"]}
                  className="w-1 h-6 rounded-full mr-2"
                />
                <Text className="text-xl font-bold text-gray-900">Customer Reviews</Text>
              </View>
              <TouchableOpacity className="flex-row items-center gap-1">
                <Text className="text-orange-600 font-semibold text-sm">See All</Text>
                <Ionicons name="chevron-forward" size={16} color="#ea580c" />
              </TouchableOpacity>
            </View>

            {/* Review Card */}
            <View className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
              <View className="flex-row items-start mb-3">
                <Image 
                  source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <View className="flex-1">
                  <View className="flex-row items-center justify-between mb-1">
                    <Text className="font-bold text-gray-900 text-base">Rahul Sharma</Text>
                    <Text className="text-gray-400 text-xs">3 days ago</Text>
                  </View>
                  <View className="flex-row items-center gap-0.5 mb-2">
                    {[1,2,3,4,5].map((star) => (
                      <Ionicons key={star} name="star" size={14} color="#fbbf24" />
                    ))}
                  </View>
                  <Text className="text-gray-600 text-sm leading-5">
                    Best biryani I've had! The chicken was tender and the rice was perfectly 
                    cooked. Authentic Hyderabadi taste! 🔥
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Fixed Bottom Cart Bar */}
      <View 
        style={{ paddingBottom: insets.bottom }}  
        className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3"
      >
        <View className="flex-row items-center gap-3">
          {/* Quantity Selector */}
          <View 
            className="flex-row items-center bg-orange-50 rounded-2xl border border-orange-200"
            style={{
              shadowColor: "#ea580c",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <TouchableOpacity 
              className="p-3" 
              disabled={count === 1}
              onPress={() => setCount(prev => Math.max(1, prev - 1))}
            >
              <Ionicons 
                name="remove" 
                size={20} 
                color={count === 1 ? "#d1d5db" : "#ea580c"} 
              />
            </TouchableOpacity>
            <Text className="text-gray-900 font-extrabold text-lg px-4 min-w-[40px] text-center">
              {count}
            </Text>
            <TouchableOpacity 
              className="p-3"
              onPress={() => setCount(prev => prev + 1)}
            >
              <Ionicons name="add" size={20} color="#ea580c" />
            </TouchableOpacity>
          </View>

          {/* Add to Cart Button */}
          <TouchableOpacity activeOpacity={0.9} className="flex-1">
            <LinearGradient
              colors={["#fb923c", "#ea580c"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                paddingVertical: 16,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                borderRadius: 16,
                shadowColor: "#ea580c",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 6,
              }}
            >
              <Ionicons name="cart" size={22} color="white" />
              <Text className="text-white font-extrabold text-lg">
                Add to Cart • ₹{price * count}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SinglePage;