import { AntDesign, Feather, Entypo } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { Image, Dimensions, Text, View, FlatList, useColorScheme, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link, useRouter } from "expo-router";
import Search from "../../components/Search";
import MeneItems from "../../components/MeneItems";
import RecommandedMenu from "../../components/RecommandedMenu";
import { OffersCarousel } from "../../components/OffersCarousel";
import { StatusBar } from "react-native";
import FoodCardSkeleton from "../../components/FoodCardSkeleton";
import UserHeaderSkeleton from "../../skeltons/UserHeaderSkeleton";
import { MenuItemsSkeleton } from "../../skeltons/CategorySkeleton";
import { offerItems } from "./menu";
import { OfferCardSkeleton } from "../../skeltons/OfferCardSkeleton";
import { OfferCard } from "../../components/OfferCard";

export default function HomeScreen() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); 
    return () => clearTimeout(timer);
  }, []);
  const colorScheme = useColorScheme();
  const router = useRouter()
  const notificationCount = 1



  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-gray-100 px-1">
      <StatusBar
        backgroundColor={colorScheme === "dark" ? "#000" : "#FFF"}
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 1 }}
        keyboardShouldPersistTaps="handled"
        scrollEventThrottle={16} >
        {loading ? <UserHeaderSkeleton /> : <View className=" flex-row mt-2 items-center justify-between ">
          <View className=" flex-row items-center  gap-2">


            <View className=" flex shrink-0">
              <Text className=" text-[16px] font-semibold">Amar Mahato</Text>
              <Text className=" text-gray-500 text-[12px]" >21 Park Street, Kolkata, West Bengal</Text>
            </View>
          </View>
          <View className="flex-row items-center justify-between gap-x-4">

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push("/auth")}
            >
              <View className="bg-gray-200 p-3 rounded-full items-center justify-center">
                <Feather name="search" size={18} color="gray" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push("/notifications")}
            >
              <View className="bg-gray-200 p-3 rounded-full items-center justify-center relative">
                <Entypo name="bell" size={18} color="gray" />

                {notificationCount > 0 && (
                  <View className="absolute -top-2 right-0 w-6 h-6 bg-orange-400 rounded-full border border-white items-center justify-center">
                    <Text className="text-white text-xs font-bold">
                      {notificationCount}
                    </Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>


        </View>}

        <OffersCarousel />

        <Text
          className="uppercase ml-2 text-gray-800 mt-3 text-[15px] tracking-widest font-bold"

        >Category</Text>
        {loading ? <MenuItemsSkeleton /> : <MeneItems />}

        <View className="mt-4 ml-2">
          <Text className="text-lg font-bold text-gray-800 mb-3">Today's Special</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 16 }}
          >
            {loading ? (<View className="flex-row">
              {Array.from({ length: Math.ceil(offerItems.length / 2) }).map((_, i) => {
                return (
                  <View key={i} className="mr-3">
                    <OfferCardSkeleton />
                    <OfferCardSkeleton />
                  </View>
                )
              })}
            </View>) :
              (<View className="flex-row  ">
                {/** Split the offerItems into pairs for two rows */}
                {Array.from({ length: Math.ceil(offerItems.length / 2) }).map((_, i) => {
                  const first = offerItems[i * 2]
                  const second = offerItems[i * 2 + 1];
                  return (
                    <View key={i} className="mr-3 gap-y-3">
                      {first && <OfferCard item={first} />}
                      {second && <OfferCard item={second} />}
                    </View>
                  )
                })}
              </View>)}
          </ScrollView>
        </View>



        <Text

          className="uppercase text-gray-700 ml-2 font-bold mt-5 text-[15px] tracking-wider"
        >
          Your Latest Orders
        </Text>
        {loading ? <FoodCardSkeleton /> : <RecommandedMenu />}

        <Text

          className="uppercase text-gray-700 ml-2 font-bold mt-3 text-[15px] tracking-wider"
        >
          Quick Meals
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <View className="flex-row flex-wrap justify-between">
            {loading
              ? offerItems.map((_, index) => (
                <View key={index} className="mb-4">
                  <OfferCardSkeleton />
                </View>
              ))
              : offerItems.map((item, index) => (
                <View key={index} className="mb-4 px-1" >
                  <OfferCard item={item} />
                </View>
              ))}
          </View>
        </ScrollView>

      </ScrollView>

    </SafeAreaView>
  )
}
