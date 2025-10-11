import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons, FontAwesome5, Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const BANNER_HEIGHT = width * 0.42; 


export const HealthyBanner = () => {
  return (
    <View className="mt-4 mb-3">
      <TouchableOpacity activeOpacity={0.9}>
        <LinearGradient
          colors={['#A8E063', '#56AB2F']} // Fresh Green Gradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="rounded-2xl overflow-hidden shadow-lg"
          style={{ height: 170 }}
        >
          <View className="flex-row items-center justify-between px-5 h-full">
            {/* Left Content */}
            <View className="flex-1 pr-3">
              <View className="bg-white/30 px-3 py-1 rounded-full self-start mb-2 flex-row items-center gap-1">
                <Feather name="award" size={14} color="white" />
                <Text className="text-white text-[11px] font-semibold">PREMIUM DEAL</Text>
              </View>
              
              <Text className="text-white text-[20px] font-bold leading-6" style={{ fontFamily: 'Poppins-Bold' }}>
                Join The Health Club
              </Text>
              <Text className="text-white/80 text-[14px] font-medium mb-3">
                Save 15% on All Subscriptions
              </Text>
              
              <View className="bg-white/90 px-4 py-2 rounded-full self-start flex-row items-center gap-1">
                <Text className="text-green-600 text-[13px] font-bold">See Plans</Text>
                <Ionicons name="leaf-outline" size={14} color="#56AB2F" />
              </View>
            </View>

            {/* Right Image/Icon */}
            <View className="w-[110px] h-full items-center justify-center relative">
              <Image
                source={{ uri: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400" }}
                style={{ width: 110, height: 110 }}
                className="rounded-full border-4 border-white/50"
                resizeMode="cover"
              />
              {/* Badge/Icon Overlay */}
              <View className="absolute -top-1 right-2 bg-yellow-300 rounded-full p-2 shadow-md">
                <MaterialCommunityIcons name="check-decagram" size={24} color="#56AB2F" />
              </View>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

// Design 1: Original Gradient with Discount
export const BannerDesign1 = () => {
  return (
    <View className="mt-4 mb-3" style={{ width, height: BANNER_HEIGHT }}>
      <TouchableOpacity activeOpacity={0.9}>
        <LinearGradient
          colors={['#FF7E5F', '#FEB47B']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="rounded-2xl overflow-hidden"
          style={{ height: 160 }}
        >
          <View className="flex-row items-center justify-between px-5 h-full">
            <View className="flex-1">
              <View className="bg-white/20 px-3 py-1 rounded-full self-start mb-2">
                <Text className="text-white text-[10px] font-bold">TODAY'S SPECIAL</Text>
              </View>
              <Text className="text-white text-[24px] font-bold leading-7" style={{ fontFamily: 'Poppins-Bold' }}>
                Get 30% Off
              </Text>
              <Text className="text-white text-[24px] font-bold leading-7 mb-2" style={{ fontFamily: 'Poppins-Bold' }}>
                On First Order
              </Text>
              <Text className="text-white/90 text-[12px] mb-3">Use code: FRESH30</Text>
              <View className="bg-white px-4 py-2 rounded-full self-start flex-row items-center gap-1">
                <Text className="text-orange-500 text-[13px] font-bold">Order Now</Text>
                <Ionicons name="arrow-forward" size={14} color="#FF7E5F" />
              </View>
            </View>
            <View className="ml-3">
              <Image
                source={{ uri: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400" }}
                style={{ width: 120, height: 120 }}
                className="rounded-full"
                resizeMode="cover"
              />
              <View className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2">
                <Ionicons name="star" size={16} color="white" />
              </View>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

// Design 2: Modern Card with Floating Image
export const BannerDesign2 = () => {
  return (
    <View className="mt-4 mb-3" style={{ width, height: BANNER_HEIGHT }}>
      <TouchableOpacity activeOpacity={0.9}>
        <View className="bg-gradient-to-br from-purple-600 to-blue-500 rounded-3xl overflow-hidden" style={{ backgroundColor: '#8B5CF6', height: 170 }}>
          <View className="flex-row items-center h-full">
            <View className="flex-1 px-6 py-5">
              <View className="flex-row items-center gap-2 mb-3">
                <View className="bg-yellow-400 rounded-full p-1">
                  <Ionicons name="flash" size={12} color="white" />
                </View>
                <Text className="text-yellow-300 text-[11px] font-bold">LIMITED TIME OFFER</Text>
              </View>
              <Text className="text-white text-[28px] font-extrabold leading-8 mb-1">Buy 1</Text>
              <Text className="text-white text-[28px] font-extrabold leading-8 mb-3">Get 1 Free</Text>
              <Text className="text-white/80 text-[11px] mb-3">Valid on all combo meals</Text>
              <TouchableOpacity className="bg-white rounded-full px-5 py-2.5 self-start shadow-lg">
                <Text className="text-purple-600 text-[13px] font-bold">Claim Offer</Text>
              </TouchableOpacity>
            </View>
            <View className="absolute -right-8 bottom-0" style={{ width: 180, height: 180 }}>
              <Image
                source={{ uri: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400" }}
                style={{ width: 180, height: 180, transform: [{ rotate: '15deg' }] }}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// Design 3: Split Design with Two Sections
export const BannerDesign3 = () => {
  return (
    <View className="mt-4 mb-3" >
      <TouchableOpacity activeOpacity={0.9}>
        <View className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl overflow-hidden flex-row"
        style={{backgroundColor: '#EF4444', width, height: BANNER_HEIGHT }}>
          <View className="flex-1 p-5 justify-center">
            <Text className="text-white/90 text-[12px] font-semibold mb-1">WEEKEND SPECIAL</Text>
            <Text className="text-white text-[26px] font-bold leading-7 mb-2">Free Delivery</Text>
            <Text className="text-white text-[15px] font-semibold">On orders above ₹299</Text>
            <View className="mt-3 bg-white/20 px-4 py-1.5 rounded-full self-start">
              <Text className="text-white text-[11px] font-bold">SAVE UP TO ₹50</Text>
            </View>
          </View>
          <View className="w-32 items-center justify-center bg-white/10">
            <MaterialCommunityIcons name="bike-fast" size={60} color="white" />
            <Text className="text-white text-[10px] font-bold mt-2">FAST & FREE</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const BannerDesign4 = () => {
  return (
    <View className="mt-4 mb-3" style={{ width, height: BANNER_HEIGHT }}>
      <TouchableOpacity activeOpacity={0.9}>
        <View className="bg-gray-900 rounded-2xl p-6" style={{ height: 150 }}>
          <View className="flex-row items-center justify-between">
            <View className="flex-1">
              <View className="flex-row items-center gap-2 mb-3">
                <LinearGradient
                  colors={['#FB923C', '#F97316']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  className="h-1 w-8 rounded-full"
                />
                <Text className="text-orange-400 text-[11px] font-bold">EXCLUSIVE DEAL</Text>
              </View>
              <Text className="text-white text-[22px] font-bold mb-1">Flat 40% OFF</Text>
              <Text className="text-gray-400 text-[13px] mb-4">on your favorite meals</Text>
              <View className="flex-row items-center gap-2">
                <View className="bg-orange-500 rounded-lg px-3 py-1.5">
                  <Text className="text-white text-[12px] font-bold">FEAST40</Text>
                </View>
                <TouchableOpacity>
                  <View className="border-2 border-orange-500 rounded-lg px-4 py-1.5">
                    <Text className="text-orange-400 text-[12px] font-bold">Apply</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View className="ml-4">
              <View className="bg-orange-500 rounded-full p-4">
                <FontAwesome5 name="utensils" size={32} color="white" />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};


// Design 5: Image Background Banner
export const BannerDesign5 = () => {
  return (
    <View className="mt-4 mb-3" style={{ width, height: BANNER_HEIGHT }}>
      <TouchableOpacity activeOpacity={0.9}>
        <View className="rounded-2xl overflow-hidden" style={{ height: 180 }}>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800" }}
            style={{ width: '100%', height: '100%', position: 'absolute' }}
            resizeMode="cover"
          />
          <LinearGradient
            colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.3)']}
            style={{ flex: 1, padding: 20, justifyContent: 'center' }}
          >
            <View className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full self-start mb-3">
              <Text className="text-white text-[10px] font-bold">NEW ARRIVAL</Text>
            </View>
            <Text className="text-white text-[30px] font-bold leading-9 mb-2" style={{ fontFamily: 'Poppins-Bold' }}>
              Taste the{'\n'}Difference
            </Text>
            <Text className="text-white/90 text-[13px] mb-4">Premium quality ingredients</Text>
            <TouchableOpacity className="bg-orange-500 rounded-full px-6 py-3 self-start flex-row items-center gap-2">
              <Text className="text-white text-[13px] font-bold">Explore Menu</Text>
              <Ionicons name="arrow-forward" size={14} color="white" />
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// Design 6: Neon Style Banner
export const BannerDesign6 = () => {
  return (
    <View className="mt-4 mb-3" style={{ width, height: BANNER_HEIGHT }}>
      <TouchableOpacity activeOpacity={0.9}>
        <View
          className="bg-gray-900 rounded-2xl p-6 border-2 border-orange-400"
          style={{ height: 160 }}
        >
          <View className="flex-row items-center justify-between">
            <View className="flex-1">
              <Text className="text-orange-400 text-[14px] font-bold mb-2">
                ⚡ FLASH SALE
              </Text>
              <Text className="text-white text-[28px] font-extrabold leading-8 mb-2">
                <Text className="text-orange-400">50%</Text> OFF
              </Text>
              <Text className="text-gray-400 text-[12px] mb-3">
                Next 2 hours only!
              </Text>

              <View className="flex-row items-center gap-3">
                <View
                  className="rounded-lg px-4 py-2"
                  style={{
                    backgroundColor: "orange",
                    shadowColor: "#FF7A00",
                    shadowOpacity: 0.8,
                    shadowRadius: 10,
                    elevation: 6,
                  }}
                >
                  <Text className="text-gray-900 text-[13px] font-bold">
                    Shop Now
                  </Text>
                </View>

                <View className="flex-row items-center gap-1">
                  <Ionicons name="time-outline" size={14} color="#FF7A00" />
                  <Text className="text-orange-400 text-[11px] font-bold">
                    01:45:32
                  </Text>
                </View>
              </View>
            </View>

            <View className="ml-3">
              <View
                className="rounded-full p-4 border-2 border-orange-400"
                style={{
                  backgroundColor: "rgba(255, 122, 0, 0.2)",
                  shadowColor: "#FFA500",
                  shadowOpacity: 0.7,
                  shadowRadius: 12,
                  elevation: 8,
                }}
              >
                <MaterialCommunityIcons name="fire" size={40} color="#FF7A00" />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// Export all designs
export default {
  BannerDesign1,
  BannerDesign2,
  BannerDesign3,
  BannerDesign4,
  BannerDesign5,
  BannerDesign6
};