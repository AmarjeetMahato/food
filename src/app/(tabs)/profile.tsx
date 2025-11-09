import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";

const Profile = () => {
  const router = useRouter();

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-gray-100">
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View className="min-h-screen bg-gray-100">
          <View className="pb-10">
       

            <View className="mt-6 mx-4">
              <Text className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
                Account
              </Text>
              <View className="bg-white rounded-2xl shadow-md overflow-hidden">
                {/* Edit Profile */}
                <Pressable onPress={()=> router.push("/editprofile")} className="flex-row items-center justify-between p-4 border-b border-gray-100">
                  <View className="flex-row items-center gap-4">
                    <View className="w-10 h-10 bg-orange-100 rounded-full items-center justify-center">
                      <MaterialIcons
                        name="account-circle"
                        size={22}
                        color="orange"
                      />
                    </View>
                    <View>
                      <Text className="font-semibold text-gray-800">
                        Edit Profile
                      </Text>
                      <Text className="text-xs text-gray-500">
                        Update your information
                      </Text>
                    </View>
                  </View>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={20}
                    color="gray"
                  />
                </Pressable>

          
<Pressable onPress={()=> router.push("/chat")} className="flex-row items-center justify-between p-4 border-b border-gray-100">
  <View className="flex-row items-center gap-4">
    <View className="w-10 h-10 bg-blue-100 rounded-full items-center justify-center">
      <Ionicons name="chatbubbles" size={22} color="#3b82f6" />
    </View>
    <View>
      <Text className="font-semibold text-gray-800">
        Chat Support
      </Text>
      <Text className="text-xs text-gray-500">
        We're here to help
      </Text>
    </View>
  </View>
  <Ionicons name="chevron-forward" size={22} color="#9CA3AF" />
</Pressable>

                {/* Dashboard */}
                <View className="flex-row items-center justify-between p-4">
                  <View className="flex-row items-center gap-4">
                    <View className="w-10 h-10 bg-purple-100 rounded-full items-center justify-center">
                      <Ionicons
                        name="calendar-outline"
                        size={22}
                        color="blue"
                      />
                    </View>
                    <View>
                      <Text className="font-semibold text-gray-800">
                        Dashboard
                      </Text>
                      <Text className="text-xs text-gray-500">
                        View statistics
                      </Text>
                    </View>
                  </View>
                  <Ionicons name="time-outline" size={22} color="gray" />
                </View>
              </View>
            </View>

            {/* Orders Section */}
            <View className="mt-6 mx-4">
              <Text className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
                Orders
              </Text>
              <View className="bg-white rounded-2xl shadow-md overflow-hidden">
                {/* My Orders */}

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => router.push("/order")} // redirect to /order page
                >
                  <View className="flex-row items-center justify-between p-4 border-b border-gray-100">
                    <View className="flex-row items-center gap-4">
                      <View className="w-10 h-10 bg-blue-100 rounded-full items-center justify-center">
                        <Ionicons name="bag-handle-outline" size={22} color="blue" />
                      </View>
                      <View>
                        <Text className="font-semibold text-gray-800">My Orders</Text>
                        <Text className="text-xs text-gray-500">Track your orders</Text>
                      </View>
                    </View>
                    <View className="flex-row items-center gap-2">
                      <Text className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                        2 Active
                      </Text>
                      <Ionicons name="chevron-forward-outline" size={20} color="gray" />
                    </View>
                  </View>
                </TouchableOpacity>


                {/* Order History */}
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => router.push("/orderhistory")} // redirect to /order page
                >
                  <View className="flex-row items-center justify-between p-4">
                    <View className="flex-row items-center gap-4">
                      <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center">
                        <Ionicons name="time-outline" size={22} color="gray" />
                      </View>
                      <View>
                        <Text className="font-semibold text-gray-800">
                          Order History
                        </Text>
                        <Text className="text-xs text-gray-500">Past orders</Text>
                      </View>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={20} color="gray" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push("/wallet")} // redirect to /order page
            >
              <View className="mt-6 mx-4">
                <Text className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
                  Wallet
                </Text>
                <View className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <View className="flex-row items-center justify-between p-4">
                    <View className="flex-row items-center gap-4">
                      <View className="w-10 h-10 bg-orange-100 rounded-full items-center justify-center">
                        <Entypo name="wallet" size={24} color="orange" />
                      </View>
                      <View>
                        <Text className="font-semibold text-gray-800">
                          Wallet
                        </Text>
                        <Text className="text-xs text-gray-500">
                          Wallet amount
                        </Text>
                      </View>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={20} color="gray" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>


            {/* Payment Section */}

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push("/paymentdetails")} // redirect to /order page
            >
              <View className="mt-6 mx-4">
                <Text className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
                  Payment
                </Text>
                <View className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <View className="flex-row items-center justify-between p-4">
                    <View className="flex-row items-center gap-4">
                      <View className="w-10 h-10 bg-green-100 rounded-full items-center justify-center">
                        <MaterialIcons name="payment" size={24} color="green" />
                      </View>
                      <View>
                        <Text className="font-semibold text-gray-800">
                          Payments Details
                        </Text>
                        <Text className="text-xs text-gray-500">
                          App preferences
                        </Text>
                      </View>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={20} color="gray" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

                 <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push("/favourite")} // redirect to /order page
            >
              <View className="mt-6 mx-4">
                <Text className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
                  favourite
                </Text>
                <View className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <View className="flex-row items-center justify-between p-4">
                    <View className="flex-row items-center gap-4">
                      <View className="w-10 h-10 bg-red-100 rounded-full items-center justify-center">
                       <Entypo name="heart-outlined" size={24} color="red" />
                      </View>
                      <View>
                        <Text className="font-semibold text-gray-800">
                          Favourite
                        </Text>
                        <Text className="text-xs text-gray-500">
                            Quick Access to Your Likes
                        </Text>
                      </View>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={20} color="gray" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            {/* Settings Section */}
            <Pressable onPress={()=> router.push("/settings")} className="mt-6 mx-4">
              <Text className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
                Settings
              </Text>
              <View className="bg-white rounded-2xl shadow-md overflow-hidden">
                <View className="flex-row items-center justify-between p-4">
                  <View className="flex-row items-center gap-4">
                    <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center">
                      <Ionicons name="settings-outline" size={22} color="gray" />
                    </View>
                    <View>
                      <Text className="font-semibold text-gray-800">
                        Settings
                      </Text>
                      <Text className="text-xs text-gray-500">
                        App preferences
                      </Text>
                    </View>
                  </View>
                  <Ionicons name="chevron-forward-outline" size={20} color="gray" />
                </View>
              </View>
            </Pressable>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;