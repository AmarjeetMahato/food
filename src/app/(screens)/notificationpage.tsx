import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text, Switch, ScrollView, TouchableOpacity } from "react-native";

const NotificationsPage = () => {
    const router = useRouter();
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    offers: true,
    deliveryStatus: true,
    chatMessages: false,
    systemAlerts: false,
  });

  const toggleSwitch = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <ScrollView className="flex-1 bg-white p-5">

      {/* Header */}
      <View className="mb-6 flex-row items-center">
          <TouchableOpacity
                  onPress={() => router.back()}
                  className="p-2 bg-white rounded-full shadow-md mr-4"
                >
                  <Ionicons name="chevron-back" size={24} color="#1F2937" />
                </TouchableOpacity>
          <View>
            <Text className="text-2xl font-bold text-gray-800">Notifications</Text>
        <Text className="text-gray-500 mt-1">
          Manage how you receive updates and alerts
        </Text>
          </View>
      </View>

      {/* Notification Settings */}
      <View className="space-y-4">
        {/* Each Notification Option */}
        <View className="flex-row items-center justify-between border-b border-gray-200 pb-3">
          <View>
            <Text className="text-base font-semibold text-gray-800">
              Order Updates
            </Text>
            <Text className="text-sm text-gray-500">
              Get updates about your active and past orders
            </Text>
          </View>
          <Switch
            trackColor={{ false: "#D1D5DB", true: "#FCD34D" }}
            thumbColor={notifications.orderUpdates ? "#F97316" : "#f4f3f4"}
            ios_backgroundColor="#D1D5DB"
            onValueChange={() => toggleSwitch("orderUpdates")}
            value={notifications.orderUpdates}
          />
        </View>

        <View className="flex-row items-center justify-between border-b border-gray-200 pb-3">
          <View>
            <Text className="text-base font-semibold text-gray-800">
              Offers & Discounts
            </Text>
            <Text className="text-sm text-gray-500">
              Get notified about exclusive deals and coupons
            </Text>
          </View>
          <Switch
            trackColor={{ false: "#D1D5DB", true: "#FCD34D" }}
            thumbColor={notifications.offers ? "#F97316" : "#f4f3f4"}
            ios_backgroundColor="#D1D5DB"
            onValueChange={() => toggleSwitch("offers")}
            value={notifications.offers}
          />
        </View>

        <View className="flex-row items-center justify-between border-b border-gray-200 pb-3">
          <View>
            <Text className="text-base font-semibold text-gray-800">
              Delivery Status
            </Text>
            <Text className="text-sm text-gray-500">
              Updates from your delivery partner in real-time
            </Text>
          </View>
          <Switch
            trackColor={{ false: "#D1D5DB", true: "#FCD34D" }}
            thumbColor={notifications.deliveryStatus ? "#F97316" : "#f4f3f4"}
            ios_backgroundColor="#D1D5DB"
            onValueChange={() => toggleSwitch("deliveryStatus")}
            value={notifications.deliveryStatus}
          />
        </View>

        <View className="flex-row items-center justify-between border-b border-gray-200 pb-3">
          <View>
            <Text className="text-base font-semibold text-gray-800">
              Chat Messages
            </Text>
            <Text className="text-sm text-gray-500">
              Receive messages from delivery partners or support
            </Text>
          </View>
          <Switch
            trackColor={{ false: "#D1D5DB", true: "#FCD34D" }}
            thumbColor={notifications.chatMessages ? "#F97316" : "#f4f3f4"}
            ios_backgroundColor="#D1D5DB"
            onValueChange={() => toggleSwitch("chatMessages")}
            value={notifications.chatMessages}
          />
        </View>

        <View className="flex-row items-center justify-between border-b border-gray-200 pb-3">
          <View>
            <Text className="text-base font-semibold text-gray-800">
              System Alerts
            </Text>
            <Text className="text-sm text-gray-500">
              Important updates about the app or your account
            </Text>
          </View>
          <Switch
            trackColor={{ false: "#D1D5DB", true: "#FCD34D" }}
            thumbColor={notifications.systemAlerts ? "#F97316" : "#f4f3f4"}
            ios_backgroundColor="#D1D5DB"
            onValueChange={() => toggleSwitch("systemAlerts")}
            value={notifications.systemAlerts}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default NotificationsPage;
