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
      <ScrollView contentContainerStyle={{ paddingBottom:10 }}>
        <View className="min-h-screen bg-gray-100">
          <View className="pb-10">
            {/* Header with Cover & Profile */}
            <View className="bg-white shadow-lg rounded-b-3xl overflow-hidden">
              {/* Cover Photo */}
<<<<<<< HEAD
              <View className="h-[6rem] bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 relative">
=======
              <View className="h-[7rem] bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 relative">
>>>>>>> amar
                <View className="absolute top-4 right-4">
                  <View className="bg-white/30 backdrop-blur-sm p-2 rounded-full">
                    <Ionicons name="create-outline" size={20} color="white" />
                  </View>
                </View>
              </View>

              {/* Profile Info */}
              <View className="relative px-6 pb-6">
                <View className="flex flex-col items-center -mt-20">
                  <View className="relative">
                    <Image
                      source={{
                        uri: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      }}
                      className="w-32 h-32 rounded-full border-4 border-white shadow-xl"
                    />
                    <View className="absolute bottom-1 right-1 bg-orange-500 p-2 rounded-full shadow-lg">
                      <Ionicons name="camera-outline" size={18} color="white" />
                    </View>
                  </View>

                  <Text className="text-2xl font-bold text-gray-900 mt-4">
                    Amar Mahato
                  </Text>
                  <View className="flex-row items-center mt-1">
                    <Ionicons name="location-sharp" size={20} color="black" />
                    <Text className="text-gray-500 text-sm ml-1">
                      Jamshedpur, Jharkhand
                    </Text>
                  </View>

                  {/* Stats */}
                  <View className="flex-row gap-4 mt-6 w-full max-w-sm rounded-lg">
                    <View className="flex-1 bg-orange-100 rounded-3xl p-4 items-center ">
                      <Text className="text-2xl font-bold text-orange-600">
                        12
                      </Text>
                      <Text className="text-xs text-gray-600 mt-1">Orders</Text>
                    </View>
                    <View className="flex-1 bg-blue-100 rounded-3xl p-4 items-center">
                      <Text className="text-2xl font-bold text-blue-600">5</Text>
                      <Text className="text-xs text-gray-600 mt-1">
                        History
                      </Text>
                    </View>
                    <View className="flex-1 bg-pink-100 rounded-3xl p-4 items-center">
                      <Text className="text-2xl font-bold text-pink-600">3</Text>
                      <Text className="text-xs text-gray-600 mt-1">
                        Favorites
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/* Account Section */}
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

                {/* Remaining Food */}
               {/* Chat Support */}
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

<<<<<<< HEAD

=======
>>>>>>> amar
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
