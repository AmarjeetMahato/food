import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { offerItems } from "../app/(tabs)/menu";
import { router } from "expo-router";

export const OfferCard = ({ item }: { item: typeof offerItems[0] }) => {
  return (
<TouchableOpacity
   onPress={()=> router.push({
          pathname: "/SinglePage",
   })}
className="w-[12rem]  bg-white rounded-xl overflow-hidden ">
  {/* Image Section with fully rounded corners */}
  <View className="relative w-full h-24 rounded-xl overflow-hidden bg-gray-300">
     <Image source={{ uri: item.image }} className="w-full h-full object-cover rounded-xl" /> 
       

    {/* Price & Offer overlay */}
    <View className="absolute top-2 left-2 right-2 flex-row justify-between items-center">
      <View className="flex-row items-center">
        {/* Price */}
        <View className="bg-black/40 px-3 py-1 rounded-full border border-white/30">
          <Text className="text-white font-extrabold text-sm uppercase">{item.price}</Text>
        </View>

        {/* Offer */}
        {item.hasOffer && (
          <LinearGradient
            colors={["#FF8C00", "#FF6347"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
                  borderRadius:50
            }}
            className="px-3 py-1 ml-2"
          >
            <Text className="text-white font-bold text-xs">{item.offer}</Text>
          </LinearGradient>
        )}
      </View>
    </View>
  </View>

  {/* Name, Time & Category */}
  <View className="p-1">
    <View className=" flex-row gap-x-1 justify-between"> 
<Text className="text-gray-600 font-bold text-md">
  {item.name.length > 11 ? item.name.substring(0, 11) + ".." : item.name}
</Text>    
        <View className="bg-[#006400] px-2 py-1 rounded-r-md rounded-l-md flex-row items-center">
                    <AntDesign name="star" size={16} color="#FF8C00" />
    <Text className="text-white text-xs font-semibold ml-1">4.5</Text>
  </View>

    </View>
    <View className="flex-row items-center mt-1">
      <FontAwesome5 name="clock" size={14} color="#6B7280" />
      <Text className="text-gray-500 text-sm font-semibold ml-1">{item.time}</Text>

      <MaterialCommunityIcons
        name="food-fork-drink"
        size={14}
        color="#6B7280"
        className="ml-3"
      />
      <Text className="text-gray-500 text-xs ml-1">Food</Text>
    </View>
  </View>
</TouchableOpacity>


  );
};