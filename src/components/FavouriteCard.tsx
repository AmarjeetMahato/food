import React from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { MaterialIcons, AntDesign, FontAwesome, Ionicons, Entypo, SimpleLineIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");
const CARD_HEIGHT = 400; // ✅ taller since meta is separate
const IMAGE_HEIGHT = 180;
const GAP = 15;

const foodItems = [
  {
    id: "1",
    name: "Spicy Chicken Burger",
    desc: "Juicy grilled chicken patty with spicy sauce, fresh lettuce, and cheese in a toasted bun.",
    price: "₹120",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=781",
    rating: "4.9",
    time: "25-30 mins",
    distance: "2.1 km",
    hasOffer: true,
    offer: "20% OFF",
  },
  {
    id: "2",
    name: "Veggie Pizza",
    desc: "Freshly baked pizza loaded with bell peppers, olives, onions, and mozzarella cheese.",
    price: "₹90",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    rating: "4.8",
    time: "30-40 mins",
    distance: "1.8 km",
    hasOffer: false,
  },
  {
    id: "3",
    name: "Cheese Pasta",
    desc: "Creamy pasta tossed with rich cheese sauce, cherry tomatoes, and fresh herbs.",
    price: "₹110",
    image: "https://images.unsplash.com/photo-1697155406432-29e76141cde6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    rating: "4.7",
    time: "20-25 min",
    distance: "2.5 km",
    hasOffer: false,
  },
  {
    id: "4",
    name: "Grilled Salmon",
    desc: "Tender grilled salmon fillet served with lemon butter sauce and seasonal vegetables.",
    price: "₹80",
    image: "https://images.unsplash.com/photo-1611599537845-1c7aca0091c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    rating: "4.9",
    time: "30-35 min",
    distance: "3.0 km",
    hasOffer: true,
    offer: "15% OFF",
  },
  {
    id: "5",
    name: "Chocolate Cake",
    desc: "Decadent chocolate cake with creamy chocolate frosting and fresh berries.",
    price: "₹60",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
    rating: "4.8",
    time: "10-15 min",
    distance: "1.5 km",
    hasOffer: false,
  },
  {
    id: "6",
    name: "Caesar Salad",
    desc: "Crisp romaine lettuce tossed with Caesar dressing, croutons, and parmesan cheese.",
    price: "₹80",
    image: "https://images.unsplash.com/photo-1746211108786-ca20c8f80ecd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    rating: "4.6",
    time: "15 min",
    distance: "2.0 km",
    hasOffer: false,
  },
];


  const orderData = [
    { id: 1, label: "Frequently Ordered" },
    { id: 2, label: "20 People Recently Ordered" },
    { id: 3, label: "Top Choice This Week" },
    { id: 4, label: "Popular in Your Area" },
    { id: 5, label: "Chef’s Special Picks" },
  ];

export default function FavouriteCard() {
  const router = useRouter();

  return (
    <View className="">
      <View className="px-6 py-3 mb-4 bg-gray-50 border-b border-gray-100 flex-row items-center">
  {/* Back Button */}
  <TouchableOpacity
    onPress={() => router.back()}
    className="p-2 bg-white rounded-full shadow-md mr-4"
  >
    <Ionicons name="chevron-back" size={24} color="#1F2937" />
  </TouchableOpacity>

  {/* Title & Subtitle */}
  <View className="flex-1">
    <View className="flex-row items-center gap-2">
      <Text className="text-2xl font-bold text-gray-900">Favorites</Text>
      <View className="bg-red-100 px-2 py-0.5 rounded-full">
        <Text className="text-red-600 font-bold text-xs">12</Text>
      </View>
    </View>
    <Text className="text-sm text-gray-500 mt-1">
      Your saved favorite dishes
    </Text>
  </View>

  {/* Heart Icon */}
  {/* <View className="bg-red-50 p-3 rounded-full">
    <Ionicons name="heart" size={24} color="#FF6347" />
  </View> */}
</View>
      <FlatList
        data={foodItems}
        keyExtractor={(item) => item.id}
        // scrollEnabled={false} // ✅ main ScrollView handles scroll
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: GAP }} />}
        contentContainerStyle={{
          paddingBottom: 40,
          alignItems: "center",
        }}
        renderItem={({ item }) => (
          <Pressable
            // onPress={() =>
            //   router.push({
            //     pathname: "/SinglePage",
            //     params: { item: JSON.stringify(item) },
            //   })
            // }
          >
            <View
              className="rounded-2xl overflow-hidden bg-white shadow-lg"
              style={{
                width: width - 24,
                alignSelf: "center",
              }}
            >
              {/* 🍔 Image Section */}
              <View className="relative">
                <Image
                  source={{ uri: item.image }}
                  className="w-full"
                  style={{
                    height: IMAGE_HEIGHT,
                    resizeMode: "cover",
                  }}
                />

                {/* 🔝 Price + Favorite + Offer */}
                <View className="absolute top-0 left-0 right-0 p-4 flex-row items-center justify-between">
                  <View className="flex-row items-center gap-2">
                    {/* 💰 Price with glass bg */}
                    <View className="backdrop-blur-md bg-black/40 px-3 py-1 rounded-full border border-white/30">
                      <Text className="text-white font-extrabold text-lg uppercase shadow-md">
                        {item.price}
                      </Text>
                    </View>

                    {/* 🎉 Offer Badge */}
                    {item.hasOffer && (
                      <LinearGradient
                        colors={["#FF8C00", "#FF6347"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{
                          paddingHorizontal: 10,
                          paddingVertical: 4,
                          borderRadius: 20,
                        }}
                      >
                        <Text className="text-white font-bold text-xs">
                          {item.offer}
                        </Text>
                      </LinearGradient>
                    )}
                  </View>

                  {/* ❤️ Favorite Icon */}
                  <MaskedView
                    maskElement={
                      <MaterialIcons name="favorite" size={28} color="white" />
                    }
                  >
                    <LinearGradient
                      colors={["#FF7E00", "#FF3D00"]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={{ width: 28, height: 28 }}
                    />
                  </MaskedView>
                </View>
              </View>

              {/* 🍽️ Meta Info Section (Below Image) */}
              <View className="flex-1 px-4 py-3 ">
                {/* Title + Rating */}
                <View className="flex-row items-start justify-between">
  <View className="flex-1 pr-2">
    <Text className="text-gray-900 font-extrabold text-[18px]">
      {item.name}
    </Text>
    {item.desc && (
      <Text className="text-gray-900 text-[12px] mt-1">
        {item.desc}
      </Text>
    )}
  </View>

  {/* Rating Box */}
  <View
    className="flex-row items-center bg-[#006400] rounded-md py-1 px-2"
    style={{ alignSelf: 'flex-start' }}
  >
    <AntDesign name="star" size={16} color="#FF8C00" />
    <Text className="ml-1 text-white font-semibold text-sm">
      {item.rating}
    </Text>
  </View>
</View>


                <View className="flex-row items-center gap-4 mt-2">
                  <View className="flex-row items-center gap-1">
                   <Ionicons name="time-outline" size={16} color="#6b7280" />
                    <Text className="text-gray-600 font-semibold text-[15px]">{item.time}</Text>
                  </View>

                  <View className="flex-row items-center gap-1">
                    <SimpleLineIcons name="location-pin" size={14} color="gray" />
                    <Text className="text-gray-600 font-semibold  text-[15px]">
                      {item.distance}
                    </Text>
                  </View>
                </View>

                  <View
    style={{
      borderBottomWidth: 1,
      borderStyle: "dotted",
      borderColor: "#ccc",
      marginVertical: 10,
    }}
  />

               <View >


      {/* Horizontal Scrollable Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 10,
          gap: 10,
        }}
      >
        {orderData.map((item) => (
  <Pressable key={item.id}>
    <View
     className=" bg-gray-200 px-4 py-1 rounded-full "
    >
      <Text className="text-gray-500 font-semibold text-sm text-center">
        {item.label}
      </Text>
    </View>
  </Pressable>
))}

      </ScrollView>
    </View>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}
