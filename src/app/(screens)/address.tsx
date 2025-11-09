import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";

interface Address {
  id: string;
  addressType: string;
  fullName: string;
  phoneNumber: string;
  addressLine1: string;
  addressLine2?: string;
  locality: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  landmark?: string;
  instructions?: string;
  latitude: number;
  longitude: number;
  isDefault: boolean;
}

const mockAddress: Address = {
  id: "1",
  addressType: "Home",
  fullName: "Sarah Johnson",
  phoneNumber: "+1 (555) 123-4567",
  addressLine1: "742 Evergreen Terrace",
  addressLine2: "Apartment 4B",
  locality: "Springfield Heights",
  city: "Springfield",
  state: "Oregon",
  pincode: "97477",
  country: "United States",
  landmark: "Near Central Park, opposite Starbucks",
  instructions: "Please ring doorbell twice. Leave package with doorman if not home.",
  latitude: 44.0462,
  longitude: -123.0236,
  isDefault: true,
};

const getAddressIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case "home":
      return <Ionicons name="home-outline" size={20} color="#f97316" />;
    case "work":
      return <Ionicons name="business-outline" size={20} color="#f97316" />;
    default:
      return <MaterialCommunityIcons name="package-variant-closed" size={20} color="#f97316" />;
  }
};

const AddressPage = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4 py-3 border-b border-gray-200">
        <Text className="text-2xl font-bold">My Addresses</Text>
      </View>
      <ScrollView>
        <View className="px-4 py-4">
          <View className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-4">
            <View className="p-6 pb-4 flex-row justify-between">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  {getAddressIcon(mockAddress.addressType)}
                </View>
                <View>
                  <View className="flex-row items-center gap-2">
                    <Text className="font-semibold text-lg text-gray-900">
                      {mockAddress.addressType}
                    </Text>
                    {mockAddress.isDefault && (
                      <View className="flex-row items-center gap-1 px-2 py-0.5 rounded-md bg-orange-100">
                        <Ionicons name="star" size={12} color="#f97316" />
                        <Text className="text-orange-600 text-xs font-medium">Default</Text>
                      </View>
                    )}
                  </View>
                  <Text className="text-sm text-gray-500 mt-1">{mockAddress.fullName}</Text>
                </View>
              </View>

              <View className="flex-row gap-2">
                <TouchableOpacity className="h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                  <Ionicons name="pencil-outline" size={16} color="#6b7280" />
                </TouchableOpacity>
                <TouchableOpacity className="h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                  <Ionicons name="trash-outline" size={16} color="#ef4444" />
                </TouchableOpacity>
              </View>
            </View>

            <View className="px-6 pb-4 flex-row items-center gap-2">
              <Ionicons name="call-outline" size={16} color="#f97316" />
              <Text className="text-gray-900 font-medium text-sm">{mockAddress.phoneNumber}</Text>
            </View>

            <View className="px-6 pb-4 flex-row gap-3">
              <Ionicons name="location-outline" size={16} color="#f97316" style={{ marginTop: 2 }} />
              <View className="flex-1">
                <Text className="text-gray-700 text-sm">{mockAddress.addressLine1}</Text>
                {mockAddress.addressLine2 && <Text className="text-gray-700 text-sm">{mockAddress.addressLine2}</Text>}
                <Text className="text-gray-700 text-sm">{mockAddress.locality}, {mockAddress.city}</Text>
                <Text className="text-gray-700 text-sm">{mockAddress.state} - {mockAddress.pincode}</Text>
              </View>
            </View>

            {(mockAddress.landmark || mockAddress.instructions) && (
              <View className="px-6 pb-4 space-y-3">
                {mockAddress.landmark && (
                  <View className="flex-row gap-3 p-3 rounded-xl bg-orange-50">
                    <Ionicons name="navigate-outline" size={16} color="#f97316" style={{ marginTop: 2 }} />
                    <View>
                      <Text className="text-xs font-medium text-orange-600 uppercase mb-1">Landmark</Text>
                      <Text className="text-gray-900 text-sm">{mockAddress.landmark}</Text>
                    </View>
                  </View>
                )}
                {mockAddress.instructions && (
                  <View className="flex-row gap-3 p-3 rounded-xl bg-blue-50">
                    <Ionicons name="chatbox-outline" size={16} color="#3b82f6" style={{ marginTop: 2 }} />
                    <View>
                      <Text className="text-xs font-medium text-blue-600 uppercase mb-1">Delivery Note</Text>
                      <Text className="text-gray-900 text-sm">{mockAddress.instructions}</Text>
                    </View>
                  </View>
                )}
              </View>
            )}

            <View className="px-6 py-4 border-t border-gray-200 flex-row gap-2">
              <TouchableOpacity className="flex-1 h-9 flex-row items-center justify-center border border-orange-200 rounded-xl">
                <Ionicons name="location-outline" size={16} color="#f97316" style={{ marginRight: 6 }} />
                <Text className="text-sm font-medium text-gray-900">View Map</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 h-9 flex-row items-center justify-center bg-orange-500 rounded-xl">
                <Ionicons name="navigate-outline" size={16} color="#fff" style={{ marginRight: 6 }} />
                <Text className="text-sm font-medium text-white">Directions</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddressPage;
