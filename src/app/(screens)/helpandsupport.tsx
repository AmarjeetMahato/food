import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const HelpSupport: React.FC = () => {
  const router = useRouter();

  const supportTopics = [
    { id: "1", title: "Account & Profile", subtitle: "Manage your account details" },
    { id: "2", title: "Orders & Deliveries", subtitle: "Track or cancel orders" },
    { id: "3", title: "Payments", subtitle: "Payment issues & refunds" },
    { id: "4", title: "App Features", subtitle: "Learn about app functionalities" },
    { id: "5", title: "Feedback & Complaints", subtitle: "Report issues or suggestions" },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center px-4 pt-4 mb-6">
        <TouchableOpacity
          onPress={() => router.back()}
          className="p-2 bg-white rounded-full shadow-md mr-4"
        >
          <Ionicons name="chevron-back" size={24} color="#1F2937" />
        </TouchableOpacity>
        <View>
          <Text className="text-2xl font-bold text-gray-800">Help & Support</Text>
          <Text className="text-gray-500 mt-1">
            Find answers or contact us for help
          </Text>
        </View>
      </View>

      {/* Support Topics */}
      <View className="px-4 space-y-4">
        {supportTopics.map((topic) => (
          <TouchableOpacity
            key={topic.id}
            className="bg-gray-50 p-4 rounded-2xl flex-row justify-between items-center shadow-sm"
            onPress={() => console.log(`Navigate to ${topic.title}`)}
          >
            <View>
              <Text className="text-gray-800 font-semibold">{topic.title}</Text>
              <Text className="text-gray-500 text-sm mt-1">{topic.subtitle}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Contact Support Button */}
      <TouchableOpacity className="mx-4 mt-6 bg-orange-500 py-4 rounded-2xl flex-row items-center justify-center shadow-md hover:opacity-90">
        <Text className="text-white font-bold text-base">Contact Support</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View className="items-center py-6">
        <Text className="text-xs text-gray-400">App Version 1.0.0</Text>
        <Text className="text-xs text-gray-400 mt-1">© 2024 Your Company</Text>
      </View>
    </ScrollView>
  );
};

export default HelpSupport;
