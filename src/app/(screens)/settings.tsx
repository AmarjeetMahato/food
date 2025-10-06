import React from "react";
import { View, Text, Pressable, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons , AntDesign, MaterialIcons} from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

interface MenuItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string; // icon name
  iconType: "Ionicons" | "AntDesign" | "MaterialIcons"; // specify which library
  iconColor: string;
  bgColor: string;
  onPress: () => void;
}


const EditProfileScreen = () => {
 const menuItems: MenuItem[] = [
  {
    id: "address",
    title: "Address",
    subtitle: "Manage your saved addresses",
    icon: "home-outline",
    iconType: "Ionicons",
    iconColor: "#10b981",
    bgColor: "#d1fae5",
    onPress: () => console.log("Address"),
  },
  {
    id: "notifications",
    title: "Notifications",
    subtitle: "Manage notification preferences",
    icon: "notifications-outline",
    iconType: "Ionicons",
    iconColor: "#8b5cf6",
    bgColor: "#ede9fe",
    onPress: () => console.log("Notifications"),
  },
  {
    id: "meals",
    title: "Meal Preferences",
    subtitle: "Customize your meal plans",
    icon: "restaurant-outline",
    iconType: "Ionicons",
    iconColor: "#10b981",
    bgColor: "#d1fae5",
    onPress: () => console.log("Meal Preferences"),
  },
  {
    id: "health",
    title: "Health Metrics",
    subtitle: "Track your fitness goals",
    icon: "fitness-outline",
    iconType: "Ionicons",
    iconColor: "#f59e0b",
    bgColor: "#fef3c7",
    onPress: () => console.log("Health Metrics"),
  },
  {
    id: "privacy",
    title: "Privacy & Security",
    subtitle: "Manage your account security",
    icon: "shield-checkmark-outline",
    iconType: "Ionicons",
    iconColor: "#ef4444",
    bgColor: "#fee2e2",
    onPress: () => console.log("Privacy & Security"),
  },
  {
    id: "payment",
    title: "Payment Methods",
    subtitle: "Manage your payment options",
    icon: "payment",
    iconType: "MaterialIcons",
    iconColor: "#06b6d4",
    bgColor: "#cffafe",
    onPress: () => console.log("Payment Methods"),
  },
  {
    id: "subscription",
    title: "Subscription Plan",
    subtitle: "View and manage your plan",
    icon: "star-outline",
    iconType: "Ionicons",
    iconColor: "#f59e0b",
    bgColor: "#fef3c7",
    onPress: () => console.log("Subscription"),
  },
  {
    id: "language",
    title: "Language & Region",
    subtitle: "Change app language",
    icon: "globe-outline",
    iconType: "Ionicons",
    iconColor: "#6366f1",
    bgColor: "#e0e7ff",
    onPress: () => console.log("Language"),
  },
  {
    id: "help",
    title: "Help & Support",
    subtitle: "Get help and contact support",
    icon: "help-circle-outline",
    iconType: "Ionicons",
    iconColor: "#8b5cf6",
    bgColor: "#ede9fe",
    onPress: () => console.log("Help & Support"),
  },
  {
    id: "about",
    title: "About App",
    subtitle: "Version 1.0.0",
    icon: "information-circle-outline",
    iconType: "Ionicons",
    iconColor: "#6b7280",
    bgColor: "#f3f4f6",
    onPress: () => console.log("About"),
  },
];


const renderIcon = (item: MenuItem) => {
  switch (item.iconType) {
    case "Ionicons":
      return <Ionicons name={item.icon as any} size={22} color={item.iconColor} />;
    case "AntDesign":
      return <AntDesign name={item.icon as any} size={22} color={item.iconColor} />;
    case "MaterialIcons":
      return <MaterialIcons name={item.icon as any} size={22} color={item.iconColor} />;
    default:
      return null;
  }
};

    return (
        <SafeAreaView  className="flex-1 bg-white">
         
                {/* Header Section */}
                 <View className="px-6 pt-10 pb-6 bg-gray-50 border-b border-gray-100 flex-row items-center">
      {/* Back Button */}
      <TouchableOpacity
        onPress={()=> router.back()}
        className="p-2 bg-white rounded-full shadow-md mr-4"
      >
        <Ionicons name="chevron-back" size={24} color="#1F2937" />
      </TouchableOpacity>

      {/* Title & Subtitle */}
      <View>
        <Text className="text-2xl font-bold text-gray-900">Settings</Text>
        <Text className="text-sm text-gray-500 mt-1">
          Manage your account and preferences
        </Text>
      </View>
    </View>

   <ScrollView showsVerticalScrollIndicator={false}>

                {/* Profile Summary Card */}
                <View className="mx-4 my-4 p-4 bg-gray-50 rounded-2xl">
                    <View className="flex-row items-center gap-4">
                        <View className="w-16 h-16 bg-blue-100 rounded-full overflow-hidden items-center justify-center">
                            <Image
                                source={{
                                    uri: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                }}
                                className="w-full h-full"
                                resizeMode="cover"
                            />
                        </View>

                        <View className="flex-1">
                            <Text className="font-bold text-gray-900 text-lg">Amar Mahato</Text>
                            <Text className="text-sm text-gray-500">amarmahato@gmail.com</Text>
                            <Text className="text-xs text-gray-400 mt-1">Premium Member</Text>
                        </View>
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
                                      {renderIcon(item)}
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
        </SafeAreaView>
    );
};

export default EditProfileScreen;