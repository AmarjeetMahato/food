import { View, Text, FlatList, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// Ensure you have @expo/vector-icons installed: npx expo install @expo/vector-icons
import { MaterialIcons, FontAwesome5, Entypo } from "@expo/vector-icons";

// --- Notification Data ---
const notifications = [
  {
    id: "1",
    type: "order",
    title: "Meal Ordered Successfully 🍔",
    message: "Your Veg Burger & Coke combo will arrive in 30 mins.",
    time: "2m ago",
    icon: <MaterialIcons name="fastfood" size={24} color="#F97316" />, // Orange-600
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    id: "2",
    type: "expire",
    title: "Meal Expired ⏰",
    message: "Your scheduled lunch order expired. Reorder now.",
    time: "10m ago",
    icon: <Entypo name="clock" size={22} color="#EF4444" />, // Red-500
    bg: "bg-red-50",
    border: "border-red-200",
  },
  {
    id: "3",
    type: "wallet",
    title: "Low Wallet Balance 💰",
    message: "Your wallet has only ₹50 left. Please recharge.",
    time: "1h ago",
    icon: <FontAwesome5 name="wallet" size={22} color="#FBBF24" />, // Amber-400
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    id: "4",
    type: "delivered",
    title: "Order Delivered 📦",
    message: "Your Paneer Tikka meal was delivered successfully.",
    time: "2h ago",
    icon: <MaterialIcons name="check-circle" size={24} color="#10B981" />, // Emerald-500
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  {
    id: "5",
    type: "offer",
    title: "Special Offer 🎁",
    message: "Get 30% OFF on dinner meals today!",
    time: "5h ago",
    icon: <Entypo name="price-tag" size={22} color="#8B5CF6" />, // Violet-500
    bg: "bg-violet-50",
    border: "border-violet-200",
  },
];

// --- Custom Header Component ---
const Header = () => (
  <View className="p-4 bg-white border-b border-gray-100 shadow-sm">
    <Text className="text-2xl font-bold text-gray-900">Notifications</Text>
    <Text className="text-sm text-gray-500 mt-1">Stay updated on your meal activity.</Text>
  </View>
);

// --- Custom Notification Card Component ---
const NotificationCard = ({ item }: any) => (
  // Use a slight border and stronger shadow for depth
  <TouchableOpacity
    activeOpacity={0.7}
    className={`flex-row items-start p-4 mb-4 mx-4 rounded-xl border-l-4 ${item.bg} ${item.border} shadow-sm bg-white/80`}
  >
    {/* Icon Container with subtle ring */}
    <View className={`p-2 rounded-full mr-4 ${item.bg} border ${item.border}`}>{item.icon}</View>
    
    <View className="flex-1">
      {/* Title - slightly larger and bolder */}
      <Text className="font-extrabold text-gray-900 text-base">
        {item.title}
      </Text>
      {/* Message - darker text for better contrast */}
      <Text className="text-gray-700 text-sm mt-1 leading-5">{item.message}</Text>
    </View>
    
    {/* Time - positioned in a separate small column for a cleaner look */}
    <View className="ml-4 pt-1">
      <Text className="text-gray-400 text-xs font-medium">{item.time}</Text>
    </View>
  </TouchableOpacity>
);

// --- Main Component ---
const Notifications = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header outside of FlatList */}
      {/* <Header /> */}
      
      {/* FlatList for efficient rendering */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationCard item={item} />}
        contentContainerStyle={{ paddingVertical: 16 }}
        // Optional: add a pull-to-refresh mechanism here if needed
      />
    </SafeAreaView>
  );
};

export default Notifications;
