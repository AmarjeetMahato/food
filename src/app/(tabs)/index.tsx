import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Image, Dimensions, Text, View, FlatList, useColorScheme , ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link, useRouter } from "expo-router";
import Search from "../../components/Search";
import MeneItems from "../../components/MeneItems";
import RecommandedMenu from "../../components/RecommandedMenu";
import { OffersCarousel } from "../../components/OffersCarousel";
import { StatusBar } from "react-native";
import FoodCardSkeleton from "../../components/FoodCardSkeleton";

export default function HomeScreen() {
    const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // show skeleton for 2s
    return () => clearTimeout(timer);
  }, []);
  const colorScheme = useColorScheme();
  const router = useRouter()
  const notificationCount = 1

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-gray-100 px-2">
       <StatusBar
  backgroundColor={colorScheme === "dark" ? "#000" : "#FFF"}
  barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
/>;
      <ScrollView
        horizontal={false}          // vertical scrolling (default)
        showsVerticalScrollIndicator={false}  // show scrollbar
        contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 5 }} // padding inside scroll
        keyboardShouldPersistTaps="handled"  // tap outside keyboard closes it
        scrollEventThrottle={16} >
        <View className=" flex-row mt-2 items-center justify-between ">
          <View className=" flex-row items-center  gap-2">
            <View>
              <Image source={{ uri: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
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
      
            {notificationCount > 0 && (
              <View className="absolute -top-2 right-0 w-6 h-6 bg-orange-400 rounded-full border border-white items-center justify-center">
                <Text className="text-white text-xs font-bold">{notificationCount}</Text>
              </View>
            )}
          </TouchableOpacity>

        </View>

        <Search />

         <OffersCarousel/>

        <Text
          className="uppercase text-gray-800 mt-3 text-[16px] tracking-widest font-semibold"
          style={{ fontFamily: "Poppins-Bold" }}
        >Category</Text>
        <MeneItems />

    <Text
  style={{ fontFamily: "Poppins-SemiBold" }}
  className="uppercase text-gray-700 mt-3 text-[15px] tracking-wider"
>
  Recommended for You
</Text>
  {loading ? <FoodCardSkeleton /> : <RecommandedMenu />}


      </ScrollView>

    </SafeAreaView>



  );
}
