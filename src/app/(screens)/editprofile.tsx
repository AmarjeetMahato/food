import React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface MenuItem {
  id: string;
  title: string;
  subtitle: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  bgColor: string;
  onPress: () => void;
}

const EditProfileScreen = () => {
  const menuItems: MenuItem[] = [
    {
      id: "profile",
      title: "Profile Details",
      subtitle: "Update your personal information",
      icon: "person-outline",
      iconColor: "#3b82f6",
      bgColor: "#dbeafe",
      onPress: () => console.log("Profile Details"),
    },
    {
      id: "notifications",
      title: "Notifications",
      subtitle: "Manage notification preferences",
      icon: "notifications-outline",
      iconColor: "#8b5cf6",
      bgColor: "#ede9fe",
      onPress: () => console.log("Notifications"),
    },
    {
      id: "meals",
      title: "Meal Preferences",
      subtitle: "Customize your meal plans",
      icon: "restaurant-outline",
      iconColor: "#10b981",
      bgColor: "#d1fae5",
      onPress: () => console.log("Meal Preferences"),
    },
    {
      id: "health",
      title: "Health Metrics",
      subtitle: "Track your fitness goals",
      icon: "fitness-outline",
      iconColor: "#f59e0b",
      bgColor: "#fef3c7",
      onPress: () => console.log("Health Metrics"),
    },
    {
      id: "privacy",
      title: "Privacy & Security",
      subtitle: "Manage your account security",
      icon: "shield-checkmark-outline",
      iconColor: "#ef4444",
      bgColor: "#fee2e2",
      onPress: () => console.log("Privacy & Security"),
    },
    {
      id: "payment",
      title: "Payment Methods",
      subtitle: "Manage your payment options",
      icon: "card-outline",
      iconColor: "#06b6d4",
      bgColor: "#cffafe",
      onPress: () => console.log("Payment Methods"),
    },
    {
      id: "subscription",
      title: "Subscription Plan",
      subtitle: "View and manage your plan",
      icon: "star-outline",
      iconColor: "#f59e0b",
      bgColor: "#fef3c7",
      onPress: () => console.log("Subscription"),
    },
    {
      id: "language",
      title: "Language & Region",
      subtitle: "Change app language",
      icon: "globe-outline",
      iconColor: "#6366f1",
      bgColor: "#e0e7ff",
      onPress: () => console.log("Language"),
    },
    {
      id: "help",
      title: "Help & Support",
      subtitle: "Get help and contact support",
      icon: "help-circle-outline",
      iconColor: "#8b5cf6",
      bgColor: "#ede9fe",
      onPress: () => console.log("Help & Support"),
    },
    {
      id: "about",
      title: "About App",
      subtitle: "Version 1.0.0",
      icon: "information-circle-outline",
      iconColor: "#6b7280",
      bgColor: "#f3f4f6",
      onPress: () => console.log("About"),
    },
  ];

  return (
    <View className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View className="px-6 pt-16 pb-6 bg-gray-50 border-b border-gray-100">
          <Text className="text-2xl font-bold text-gray-900">Settings</Text>
          <Text className="text-sm text-gray-500 mt-1">
            Manage your account and preferences
          </Text>
        </View>

        {/* Profile Summary Card */}
        <View className="mx-4 my-4 p-4 bg-gray-50 rounded-2xl">
          <View className="flex-row items-center gap-4">
            <View className="w-16 h-16 bg-blue-100 rounded-full items-center justify-center">
              <Text className="text-2xl">👤</Text>
            </View>
            <View className="flex-1">
              <Text className="font-bold text-gray-900 text-lg">John Doe</Text>
              <Text className="text-sm text-gray-500">john.doe@example.com</Text>
              <Text className="text-xs text-gray-400 mt-1">Premium Member</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="#9CA3AF" />
          </View>
        </View>

        {/* Menu Items */}
        <View className="px-4">
          {menuItems.map((item, index) => (
            <Pressable
              key={item.id}
              onPress={item.onPress}
              className="flex-row items-center justify-between py-4 border-b border-gray-100"
            >
              <View className="flex-row items-center gap-4">
                <View
                  className="w-10 h-10 rounded-full items-center justify-center"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <Ionicons name={item.icon} size={22} color={item.iconColor} />
                </View>
                <View>
                  <Text className="font-semibold text-gray-800">
                    {item.title}
                  </Text>
                  <Text className="text-xs text-gray-500">{item.subtitle}</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={22} color="#9CA3AF" />
            </Pressable>
          ))}
        </View>

        {/* Logout Button */}
        <View className="px-4 py-6">
          <Pressable className="flex-row items-center justify-center py-4 bg-red-50 rounded-xl border border-red-100">
            <Ionicons name="log-out-outline" size={22} color="#ef4444" />
            <Text className="font-semibold text-red-600 ml-2">Logout</Text>
          </Pressable>
        </View>

        {/* Footer */}
        <View className="items-center pb-8">
          <Text className="text-xs text-gray-400">App Version 1.0.0</Text>
          <Text className="text-xs text-gray-400 mt-1">© 2024 Your Company</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;