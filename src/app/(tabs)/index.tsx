import { AntDesign, Ionicons , Entypo } from "@expo/vector-icons";
import React from "react";
import { Image, Dimensions, Text, View, FlatList, Pressable, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import catgory from "../../../assets/data/catgeory.json"
import Categories from "../../components/Categories";
// import image from "../../../assets/image.png"
import { Link, useRouter } from "expo-router";
import Search from "../../components/Search";
import MeneItems from "../../components/MeneItems";
import RecommandedMenu from "../../components/RecommandedMenu";

export default function HomeScreen() {
  const router = useRouter()
 const  notificationCount = 1 

  return (
<SafeAreaView edges={['top']} className="flex-1 bg-gray-100 px-2">
   <ScrollView 
  horizontal={false}          // vertical scrolling (default)
  showsVerticalScrollIndicator={true}  // show scrollbar
  contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 5 }} // padding inside scroll
  keyboardShouldPersistTaps="handled"  // tap outside keyboard closes it
  scrollEventThrottle={16} >
          <View className=" flex-row mt-2 items-center justify-between ">
            <View className=" flex-row items-center  gap-2">
              <View>
                   <Image  source={{uri:"https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
                    width={50} height={50} className=" rounded-full"
                    />
              </View>

                <View className=" flex shrink-0">
                      <Text className=" text-[16px] font-semibold">Amar Mahato</Text>
              <Text className=" text-gray-500 text-[12px]" >21 Park Street, Kolkata, West Bengal</Text>
                </View>
            </View>
              <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => router.push("/notifications")}
    >
      <View className="bg-gray-200 p-3 rounded-full items-center justify-center">
        <Entypo name="bell" size={18} color="gray" />
      </View>
          {/* Notification Badge */}
    {notificationCount > 0 && (
      <View className="absolute -top-2 right-0 w-6 h-6 bg-orange-400 rounded-full border border-white items-center justify-center">
        <Text className="text-white text-xs font-bold">{notificationCount}</Text>
      </View>
    )}
    </TouchableOpacity>

    </View>

   <View className="mt-3">
  {/* First subtle line */}
  <Text className="text-[14px] text-gray-500">Craving something tasty?</Text>

  {/* Second highlighted line */}
  <Text  style={{fontFamily:"Montserrat"}} className="text-[20px] font-bold mt-1  text-gray-900">
    <Ionicons name="fast-food-sharp" size={22} color="#FF7E5F" /> Eat Fresh Today!
  </Text>
</View>

<Search/>

<Text
      className="uppercase text-gray-800 mt-3 text-[16px] tracking-widest font-bold"
  style={{ fontFamily: "Poppins-Bold" }}
>Category</Text>
<MeneItems />

<Text style={{fontFamily:"Roboto-Regular"}} className=" uppercase text-gray-600 mt-3 text-[15px] tracking-widest font-bold">Recommanded for you</Text>
<RecommandedMenu />
   </ScrollView>

</SafeAreaView>



  );
}
