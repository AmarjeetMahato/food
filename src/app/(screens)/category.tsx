import { Pressable, Text,TextInput, TouchableOpacity, View, FlatList, Dimensions, Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import CategoryDataSkeleton from "../../skeltons/CategoryDataSkeleton";

interface Item {
  id: string;
  name: string;
  category: string;
  description: string;
}

const dummyData: Item[] = [
  { id: "1", name: "Classic Burger", category: "Burger", description: "Juicy beef patty with cheese and lettuce" },
  { id: "2", name: "Cheese Burger", category: "Burger", description: "Loaded with extra cheese" },
  { id: "3", name: "Veggie Burger", category: "Burger", description: "Healthy and delicious" },
  { id: "4", name: "Chicken Biryani", category: "Biryani", description: "Spicy chicken with fragrant rice" },
  { id: "5", name: "Mutton Biryani", category: "Biryani", description: "Rich mutton flavor" },
  { id: "6", name: "Veg Biryani", category: "Biryani", description: "Aromatic mixed vegetable biryani" },
];

const Category = () => {
  const { id, name } = useLocalSearchParams<{ id: string; name: string }>();
  const router = useRouter();
    const [searchText, setSearchText] = useState<string>('');
    const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
const [loading, setLoading] = useState<boolean>(true);
  
    useEffect(() => {
      const timer  = setTimeout(() => setLoading(false), 2000); // show skeleton for 2s
      return () => clearTimeout(timer);
    }, []);
  
const { width } = Dimensions.get("window");
const ITEM_WIDTH = (width - 40) / 3; // 3 columns with padding/margin

const data = [
  { id: "1", title: "Hyderabadi Biryani", image: "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" },
  { id: "2", title: "Lucknowi Biryani", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" },
  { id: "3", title: "Kolkata Biryani", image: "https://images.unsplash.com/photo-1701579231349-d7459c40919d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" },
  { id: "4", title: "Bombay Biryani", image: "https://images.unsplash.com/photo-1697155406055-2db32d47ca07?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
  { id: "5", title: "Malabar Biryani", image: "https://images.unsplash.com/photo-1697276063790-a68a966b12f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" },
  { id: "6", title: "Ambur Biryani", image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
  { id: "7", title: "Dindigul Biryani", image: "https://plus.unsplash.com/premium_photo-1695029502961-f57f307bd0c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" },
  { id: "8", title: "Bhatkali Biryani", image: "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" },
  { id: "9", title: "Chettinad Biryani", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" },
  { id: "10", title: "Beary Biryani", image: "https://images.unsplash.com/photo-1697155406055-2db32d47ca07?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
  { id: "11", title: "Memoni Biryani", image: "https://images.unsplash.com/photo-1697155406055-2db32d47ca07?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
  { id: "12", title: "Sindhi Biryani", image: "https://images.unsplash.com/photo-1697155406055-2db32d47ca07?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
  { id: "13", title: "Kalyani Biryani", image: "https://images.unsplash.com/photo-1697155406055-2db32d47ca07?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
];



  // Filter items based on category name
  const categoryItems = dummyData.filter((item) =>
    item.category.toLowerCase() === (name || "").toLowerCase()
  );

  return (
     <SafeAreaView  className="flex-1 bg-gray-50" edges={["top"]}>
      {/* Modern Header with Gradient Shadow */}
      <View className="bg-white shadow-sm">
        <LinearGradient
          colors={["rgba(255, 107, 53, 0.03)", "rgba(255, 255, 255, 0)"]}
          className="absolute inset-0"
        />
          <View className="flex-row items-center px-4 py-2">
          {/* Sleek Back Button */}
          <TouchableOpacity
            onPress={() => router.back()}
            className="mr-2 w-9 h-9 items-center justify-center bg-white rounded-full"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.08,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Ionicons name="arrow-back" size={20} color="#1F2937" />
          </TouchableOpacity>

          {/* Elegant Search Bar */}
          <Pressable className="flex-1">
            <View
              className={`flex-row items-center rounded-full px-3 py-1 ${
                isSearchFocused 
                  ? "bg-white border border-orange-400" 
                  : "bg-gray-50 border border-transparent"
              }`}
              style={{
                shadowColor: isSearchFocused ? "#FF6B35" : "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: isSearchFocused ? 0.12 : 0.04,
                shadowRadius: 6,
                elevation: isSearchFocused ? 3 : 1,
              }}
            >
              <EvilIcons
                name="search"
                size={22}
                color={isSearchFocused ? "#FF6B35" : "#9CA3AF"}
              />
              <TextInput
                className="flex-1 ml-1 text-sm text-gray-900"
                placeholder={`Search in ${name}...`}
                placeholderTextColor="#9CA3AF"
                value={searchText}
                onChangeText={setSearchText}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              {searchText.length > 0 && (
                <TouchableOpacity onPress={() => setSearchText("")}>
                  <Ionicons name="close-circle" size={18} color="#9CA3AF" />
                </TouchableOpacity>
              )}
            </View>
          </Pressable>
        </View>
        {/* Category Title */}
        {loading ?  <View className="px-4 pb-4 pt-2 flex-row gap-x-3 animate-pulse">
      {/* Name Skeleton */}
      <View className="bg-gray-300 h-7 w-32 rounded" />
      
      {/* Item count Skeleton */}
      <View className="bg-gray-300 h-4 w-24 rounded mt-1" />
    </View> :   <View className="px-4 pb-4 pt-2 flex-row gap-x-3">
          <Text className="text-2xl font-bold text-gray-800">{name}</Text>
          <Text className="text-sm text-gray-500 mt-1">
          (  {data.length} items available )
          </Text>
        </View> }
      
      </View>

      {/* Modern Grid with Cards */}
      <View className="flex-1 px-4 pt-4">
        {loading ? (<CategoryDataSkeleton/> ) : (   <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          columnWrapperStyle={{ gap: 12 }}
          ItemSeparatorComponent={() => <View className="h-3" />}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => router.push(`/SinglePage?id=${item.id}`)}
              activeOpacity={0.7}
              className="flex-1"
              style={{ maxWidth: ITEM_WIDTH }}
            >
              <View className="bg-white rounded-2xl overflow-hidden shadow-md">
                {/* Image with Gradient Overlay */}
                <View className="relative">
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: "100%", height: ITEM_WIDTH }}
                    className="bg-gray-100"
                    resizeMode="cover"
                  />
                  <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.3)"]}
                    className="absolute inset-0"
                  />
                  
                 
                </View>

                {/* Card Content */}
                <View className="p-2">
                  <Text
                    className="text-xs font-semibold text-gray-800"
                    numberOfLines={2}
                  >
                    {item.title}
                  </Text>
                  
               
                </View>
              </View>
            </TouchableOpacity>
          )}
          ListEmptyComponent={() => (
            <View className="items-center justify-center py-20">
              <Ionicons name="search-outline" size={64} color="#D1D5DB" />
              <Text className="text-gray-400 mt-4 text-base">
                No items found
              </Text>
            </View>
          )}
        />)}
     
      </View>
    </SafeAreaView>
  );
};

export default Category;
