import { Pressable, Text, TouchableOpacity, View, FlatList, Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons, FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import RecommandedMenu from "../../components/RecommandedMenu";
import { OfferCard } from "../../components/OfferCard";
import { OfferCardSkeleton } from "../../skeltons/OfferCardSkeleton";
import { TextInput } from "react-native";
import FoodCardSkeleton from "../../components/FoodCardSkeleton";

interface Item {
  id: string;
  name: string;
  category: string;
  description: string;
}

export const offerItems = [
  {
    id: 1,
    name: "Cheese Burger",
    price: "$200",
    time: "30 min",
    hasOffer: true,
    offer: "20% OFF",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=999",
  },
  {
    id: 2,
    name: "Veggie Pizza",
    price: "$250",
    time: "25 min",
     hasOffer: true,
    offer: "20% OFF",
    image: "https://plus.unsplash.com/premium_photo-1690056321981-dfe9e75e0247?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  },
  {
    id: 3,
    name: "Chicken Combo",
    price: "$300",
    time: "40 min",
    hasOffer: true,
    offer: "10% OFF",
    image: "https://images.unsplash.com/photo-1725210338021-aa5dfff76eae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
  },
 {
    id: 4,
    name: "Margherita Pizza",
    price: "$250",
    time: "25 min",
      hasOffer: true,
    offer: "20% OFF",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=735",
  },
  {
    id: 5,
    name: " Burger Meal",
    price: "$180",
    time: "20 min",
    hasOffer: true,
    offer: "15% OFF",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=735",
  },
  {
    id: 6,
    name: "Sushi Platter",
    price: "$450",
    time: "35 min",
      hasOffer: true,
    offer: "20% OFF",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=735",
  },
  {
    id: 7,
    name: "Pasta Carbonara",
    price: "$220",
    time: "30 min",
    hasOffer: true,
    offer: "20% OFF",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=735",
  },
  {
    id: 8,
    name: "Grilled Salmon",
    price: "$380",
    time: "35 min",
      hasOffer: true,
    offer: "20% OFF",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=735",
  },
  {
    id: 9,
    name: "Veggie Wrap",
    price: "$150",
    time: "15 min",
    hasOffer: true,
    offer: "10% OFF",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=735",
  },
  {
    id: 10,
    name: "BBQ Ribs Platter",
    price: "$420",
    time: "45 min",
      hasOffer: true,
    offer: "20% OFF",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=735",
  },
  {
    id: 11,
    name: "Caesar Salad",
    price: "$130",
    time: "10 min",
    hasOffer: true,
    offer: "5% OFF",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=735",
  },
  {
    id: 12,
    name: "Tacos Supreme",
    price: "$200",
    time: "20 min",
      hasOffer: true,
    offer: "20% OFF", 
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=735",
  },
  {
    id: 13,
    name: "Thai Green Curry",
    price: "$280",
    time: "30 min",
    hasOffer: true,
    offer: "15% OFF",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=735",
  },
  {
    id: 14,
    name: "Biryani Special",
    price: "$350",
    time: "35 min",
    hasOffer: false,
    offer: "",
    image: "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  }
];

const dummyData: Item[] = [
  { id: "1", name: "Classic Burger", category: "Burger", description: "Juicy beef patty with cheese and lettuce" },
  { id: "2", name: "Cheese Burger", category: "Burger", description: "Loaded with extra cheese" },
  { id: "3", name: "Veggie Burger", category: "Burger", description: "Healthy and delicious" },
  { id: "4", name: "Chicken Biryani", category: "Biryani", description: "Spicy chicken with fragrant rice" },
  { id: "5", name: "Mutton Biryani", category: "Biryani", description: "Rich mutton flavor" },
  { id: "6", name: "Veg Biryani", category: "Biryani", description: "Aromatic mixed vegetable biryani" },
];

const Menu = () => {
  const [loading, setLoading] = useState<boolean>(true);
    const [searchText, setSearchText] = useState<string>('');
      const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
  
   useEffect(() => {
     const timer = setTimeout(() => setLoading(false), 2000); 
     return () => clearTimeout(timer);
   }, []);
  const { id, name } = useLocalSearchParams<{ id: string; name: string }>();
    const router = useRouter();
const types = [
  { name: "Regular", icon: <FontAwesome5 name="hamburger" size={24} color="#1F2937" /> },
  { name: "Family", icon: <MaterialCommunityIcons name="food-apple" size={24} color="#1F2937" /> },
  { name: "Special", icon: <Ionicons name="pizza-outline" size={24} color="#1F2937" /> },
  { name: "Combo", icon: <FontAwesome5 name="utensils" size={24} color="#1F2937" /> },
  { name: "Quick", icon: <MaterialCommunityIcons name="timer-sand" size={24} color="#1F2937" /> },
  { name: "Premium", icon: <FontAwesome5 name="crown" size={24} color="#1F2937" /> },
];

  const details = ["₹50", "₹100", "₹150", "₹200", "Under 30 min", "₹300"];
  
  
    const categoryItems = dummyData.filter((item) =>
      item.category.toLowerCase() === (name || "").toLowerCase()
    )
  
  return (
         <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]} 
      >
           {/* Header */}
     <View className="flex-row items-center border-b border-gray-100 px-1 py-3 bg-white">
  {/* Back Button */}
  <TouchableOpacity
    onPress={() => router.back()}
    className="p-2 bg-white rounded-full shadow-md mr-3"
  >
    <Ionicons name="chevron-back" size={24} color="#1F2937" />
  </TouchableOpacity>

  {/* Search Bar */}
  <View className={`flex-1 flex-row items-center bg-white rounded-2xl px-5 py-1 ${isSearchFocused ? 'shadow-2xl border-2 border-orange-500' : 'shadow-lg border border-gray-200'}`}>
    <EvilIcons name="search" size={24} color="#f97316" />
    <TextInput
      className="flex-1 ml-4 text-base text-gray-900 font-medium"
      placeholder="Search dishes, cuisines..."
      placeholderTextColor="#94a3b8"
      value={searchText}
      onChangeText={setSearchText}
      onFocus={() => setIsSearchFocused(true)}
    />
    {searchText.length > 0 && (
      <TouchableOpacity 
        onPress={() => setSearchText('')}
        className="bg-gray-100 rounded-full p-1.5"
      >
        <Ionicons name="close" size={16} color="#64748b" />
      </TouchableOpacity>
    )}
  </View>
</View>
        <View className="px-4 py-3 bg-white border-b border-gray-100">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ alignItems: "center" }}
          >
            {types.map((type, index) => (
              <TouchableOpacity
                key={index}
                className="px-4 py-2 gap-x-3 flex-row border border-gray-200 rounded-lg mr-3 items-center"
              >
                <View style={{ width: 24, height: 24, alignItems: "center", justifyContent: "center" }}>
                  {React.cloneElement(type.icon, { size: 20 })}
                </View>
                <Text className="text-gray-800 font-medium">{type.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ alignItems: "center", marginTop: 8 }}
          >
            {details.map((detail, index) => (
              <TouchableOpacity
                key={index}
                className="px-6 py-2 border border-gray-200 rounded-md mr-2"
              >
                <Text className="text-gray-800 font-medium">{detail}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
<View className="mt-4 ml-2"> 
  <Text className="text-lg font-bold text-gray-800 mb-3">Today's Offers</Text>
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ paddingRight: 16 }}
  >
   {loading ? ( <View className="flex-row">
        {Array.from({ length: Math.ceil(offerItems.length / 2)}).map((_, i) => {
          return (
            <View key={i} className="mr-3">
              <OfferCardSkeleton />
              <OfferCardSkeleton />
            </View>  
          );
        })}
      </View>) : 
   ( <View className="flex-row">
      {/** Split the offerItems into pairs for two rows */}
      {Array.from({ length: Math.ceil(offerItems.length / 2) }).map((_, i) => {
        const first = offerItems[i * 2];
        const second = offerItems[i * 2 + 1];
        return (
          <View key={i} className="mr-3">
            {first && <OfferCard item={first} />}
            {second && <OfferCard item={second}  />}
          </View>
        ); 
      })}
    </View>)}
  </ScrollView>
</View>


        <View className="mt-6">
          {loading ? <FoodCardSkeleton /> :  (
            <> 
                 <Text
            style={{ fontFamily: "Poppins-SemiBold" }}
            className="uppercase text-gray-700 mt-3 ml-3 font-bold text-[15px] tracking-wider"
          >
            Recommended for You
          </Text>
          <RecommandedMenu/>
            </>
           )}
        </View>
      </ScrollView>
    </SafeAreaView>

  )
}

export default Menu