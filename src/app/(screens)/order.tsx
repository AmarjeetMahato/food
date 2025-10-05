import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { MapPin, Star, Navigation } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import { AntDesign, Entypo, FontAwesome6 } from '@expo/vector-icons';
import MaskedView from "@react-native-masked-view/masked-view";


const OrdersScreen = () => {
  const [activeTab, setActiveTab] = useState('orders');

  const recentOrders = [
    {
      id: 1,
      restaurant: 'Pizza Paradise',
      items: ['Margherita Pizza', 'Garlic Bread', 'Coke'],
      date: '2 days ago',
      amount: 450,
      status: 'Delivered',
      rating: 4.5,
      deliveryAddress: 'Bistupur, Jamshedpur',
      coordinates: { latitude: 22.8046, longitude: 86.2029 },
      trackingUrl: 'https://maps.google.com/?q=22.8046,86.2029'
    },
    {
      id: 2,
      restaurant: 'Burger House',
      items: ['Cheese Burger', 'French Fries', 'Milkshake'],
      date: '5 days ago',
      amount: 320,
      status: 'Delivered',
      rating: 4.8,
      deliveryAddress: 'Sakchi, Jamshedpur',
      coordinates: { latitude: 22.7925, longitude: 86.1842 },
      trackingUrl: 'https://maps.google.com/?q=22.7925,86.1842'
    },
    {
      id: 3,
      restaurant: 'Spice Kitchen',
      items: ['Chicken Biryani', 'Raita', 'Gulab Jamun'],
      date: '1 week ago',
      amount: 380,
      status: 'Delivered',
      rating: 4.2,
      deliveryAddress: 'Kadma, Jamshedpur',
      coordinates: { latitude: 22.8143, longitude: 86.2108 },
      trackingUrl: 'https://maps.google.com/?q=22.8143,86.2108'
    },
    {
      id: 4,
      restaurant: 'Tandoor Nights',
      items: ['Paneer Tikka', 'Butter Naan', 'Dal Makhani'],
      date: '1 week ago',
      amount: 420,
      status: 'Delivered',
      rating: 4.6,
      deliveryAddress: 'Telco Colony, Jamshedpur',
      coordinates: { latitude: 22.8055, longitude: 86.1996 },
      trackingUrl: 'https://maps.google.com/?q=22.8055,86.1996'
    }
  ];

  const handleTrackOrder = (trackingUrl:string) => {
    Linking.openURL(trackingUrl);
  };

  return (
    <SafeAreaView className='flex-1' edges={['bottom']}>
     <ScrollView 
              className="bg-gray-50" // remove pt-4
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {activeTab === 'orders' && (
        <View className="p-4 space-y-6">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-xl font-bold text-gray-800">Recent Orders</Text>
            <TouchableOpacity className="rounded-xl shadow-md overflow-hidden">
  <LinearGradient
    colors={['#f97316', '#ea580c']} // orange-500 to orange-600
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    className="px-5 py-2.5"
  >
    <Text className="text-white text-sm font-semibold">Order Now</Text>
  </LinearGradient>
</TouchableOpacity>
          </View>

          {/* Orders List */}
          <View className="gap-y-3">
            {recentOrders.map((order) => (
              <View 
                key={order.id} 
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* Order Details */}
                <View className="p-5">
                  <View className="flex-row justify-between items-start mb-3">
                    <View className="flex-1">
                      <Text className="text-lg font-bold text-gray-800 mb-1">
                        {order.restaurant}
                      </Text>
                      <Text className="text-gray-600 text-sm leading-5">
                        {order.items.join(', ')}
                      </Text>
                      <Text className="text-gray-400 text-xs mt-2">{order.date}</Text>
                    </View>
                    <View className="items-end ml-3">
                      <Text className="text-lg font-bold text-gray-800 mb-2">
                        ₹{order.amount}
                      </Text>
                      <View className="bg-green-100 px-3 py-1 rounded-full">
                        <Text className="text-green-700 text-xs font-semibold">
                          {order.status}
                        </Text>
                      </View>
                    </View>
                  </View>

                  {/* Map Preview Section */}
                  <View className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 my-3 border border-orange-200">
                    <View className="flex-row items-center mb-2">
                         <MaskedView
      maskElement={
        <Entypo name="location-pin" size={24} color="black" />
      }
    >
      <LinearGradient
        colors={["#f97316", "#fb923c"]} // orange gradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ width: 24, height: 24 }}
      />
    </MaskedView>
                      <Text className="text-sm font-medium text-gray-700 flex-1">
                        {order.deliveryAddress}
                      </Text>
                    </View>
                    <View className="bg-white rounded-lg p-3 border border-orange-200">
                      <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center">
                          <View className="bg-orange-100 p-2 rounded-full mr-3">
                          <MaskedView
        maskElement={
          <FontAwesome6 name="map-location-dot" size={18} color="black" />
        }
      >
        <LinearGradient
          colors={["#f97316", "#fb923c"]} // orange gradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ width: 24, height: 24 }}
        />
      </MaskedView>                         
                         </View>
                          <View>
                            <Text className="text-xs text-gray-500 mb-1">Coordinates</Text>
                            <Text className="text-sm font-semibold text-gray-700">
                              {order.coordinates.latitude.toFixed(4)}, {order.coordinates.longitude.toFixed(4)}
                            </Text>
                          </View>
                        </View>
                <TouchableOpacity
  onPress={() => handleTrackOrder(order.trackingUrl)}
//   className="bg-orange-500 px-4 py-2.5 rounded-lg shadow-md active:bg-orange-600 flex-row items-center self-start"
>
  <Image 
    source={{ uri: 'https://risanb.com/code/colorful-google-maps-marker/default-marker.jpg' }}
    className="w-16 h-16 mr-2"
    resizeMode="contain"
  />
</TouchableOpacity>
                      </View>
                    </View>
                  </View>

                  {/* Rating and Actions */}
                  <View className="flex-row items-center justify-between pt-3 border-t border-gray-100">
                    <View className="flex-row items-center gap-x-2">
                        <MaskedView
        maskElement={
          <AntDesign name="star" size={24} color="black" />
        }
      >
        <LinearGradient
           colors={['#f97316', '#ea580c']} // yellow gradient for star
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ width: 24, height: 24 }}
        />
      </MaskedView>
                      <Text className="text-md font-semibold text-gray-700">{order.rating}</Text>
                    </View>
                    <View className="flex-row space-x-4">
                      <TouchableOpacity className="px-4 py-2">
                        <Text className="text-orange-600 text-sm font-semibold">Rate Order</Text>
                      </TouchableOpacity>
                      <TouchableOpacity className="px-4 py-2 bg-orange-50 rounded-lg">
                        <Text className="text-orange-600 text-sm font-bold">Track</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      )}
    </ScrollView>
    </SafeAreaView>
  
  );
};

export default OrdersScreen;