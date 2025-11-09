import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, ScrollView, Modal } from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

interface SearchItem {
  id: number;
  name: string;
  image: string;
  category?: string;
}

export default function SearchScreen() {
  const [searchText, setSearchText] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const recentSearches: SearchItem[] = [
    {
      id: 1,
      name: 'Biryani',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200',
      category: 'Rice'
    },
    {
      id: 2,
      name: 'Pizza Margherita',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200',
      category: 'Italian'
    },
    {
      id: 3,
      name: 'Butter Chicken',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200',
      category: 'Curry'
    }
  ];

  const recommended: SearchItem[] = [
    {
      id: 1,
      name: 'Chicken Tikka Masala',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200',
      category: 'Popular'
    },
    {
      id: 2,
      name: 'Paneer Butter Masala',
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200',
      category: 'Vegetarian'
    },
    {
      id: 3,
      name: 'Masala Dosa',
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=200',
      category: 'South Indian'
    },
    {
      id: 4,
      name: 'Chole Bhature',
      image: 'https://images.unsplash.com/photo-1626132647523-66f0bf380027?w=200',
      category: 'North Indian'
    },
    {
      id: 5,
      name: 'Veg Fried Rice',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=200',
      category: 'Chinese'
    },
    {
      id: 6,
      name: 'Chicken Burger',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200',
      category: 'Fast Food'
    }
  ];
  // Add this complete data array to your component
const allDishes = [
  // Biryani varieties
  { id: 1, name: 'Chicken Biryani', category: 'Indian', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300', rating: 4.8 },
  { id: 2, name: 'Mutton Biryani', category: 'Indian', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300', rating: 4.9 },
  { id: 3, name: 'Hyderabadi Biryani', category: 'Indian', image: 'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=300', rating: 4.7 },
  { id: 4, name: 'Veg Biryani', category: 'Indian', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300', rating: 4.5 },
  { id: 5, name: 'Prawn Biryani', category: 'Indian', image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=300', rating: 4.6 },
  { id: 6, name: 'Egg Biryani', category: 'Indian', image: 'https://images.unsplash.com/photo-1642821373181-696a54913e93?w=300', rating: 4.4 },
  
  // Pizza varieties
  { id: 7, name: 'Margherita Pizza', category: 'Italian', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300', rating: 4.6 },
  { id: 8, name: 'Pepperoni Pizza', category: 'Italian', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300', rating: 4.7 },
  { id: 9, name: 'BBQ Chicken Pizza', category: 'Italian', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300', rating: 4.5 },
  { id: 10, name: 'Veggie Pizza', category: 'Italian', image: 'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=300', rating: 4.4 },
  
  // Burgers
  { id: 11, name: 'Chicken Burger', category: 'American', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300', rating: 4.5 },
  { id: 12, name: 'Beef Burger', category: 'American', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=300', rating: 4.7 },
  { id: 13, name: 'Veggie Burger', category: 'American', image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=300', rating: 4.3 },
  { id: 14, name: 'Cheese Burger', category: 'American', image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=300', rating: 4.6 },
  
  // Indian Curries
  { id: 15, name: 'Butter Chicken', category: 'Indian', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300', rating: 4.8 },
  { id: 16, name: 'Paneer Tikka', category: 'Indian', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300', rating: 4.7 },
  { id: 17, name: 'Chicken Tikka Masala', category: 'Indian', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300', rating: 4.9 },
  { id: 18, name: 'Dal Makhani', category: 'Indian', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300', rating: 4.5 },
  
  // Pasta
  { id: 19, name: 'Spaghetti Carbonara', category: 'Italian', image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=300', rating: 4.7 },
  { id: 20, name: 'Penne Arrabbiata', category: 'Italian', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300', rating: 4.6 },
  { id: 21, name: 'Fettuccine Alfredo', category: 'Italian', image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=300', rating: 4.5 },
  { id: 22, name: 'Lasagna', category: 'Italian', image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=300', rating: 4.8 },
  
  // Sushi
  { id: 23, name: 'California Roll', category: 'Japanese', image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300', rating: 4.6 },
  { id: 24, name: 'Dragon Roll', category: 'Japanese', image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=300', rating: 4.8 },
  { id: 25, name: 'Salmon Sushi', category: 'Japanese', image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300', rating: 4.7 },
  { id: 26, name: 'Tempura Roll', category: 'Japanese', image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300', rating: 4.5 },
  
  // Noodles
  { id: 27, name: 'Pad Thai', category: 'Thai', image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=300', rating: 4.7 },
  { id: 28, name: 'Hakka Noodles', category: 'Chinese', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300', rating: 4.5 },
  { id: 29, name: 'Ramen', category: 'Japanese', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300', rating: 4.8 },
  { id: 30, name: 'Chow Mein', category: 'Chinese', image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=300', rating: 4.4 },
  
  // Rice dishes
  { id: 31, name: 'Fried Rice', category: 'Chinese', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300', rating: 4.5 },
  { id: 32, name: 'Pulao', category: 'Indian', image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=300', rating: 4.4 },
  
  // Sandwiches
  { id: 33, name: 'Club Sandwich', category: 'American', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300', rating: 4.5 },
  { id: 34, name: 'Grilled Cheese Sandwich', category: 'American', image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?w=300', rating: 4.3 },
  
  // Tacos
  { id: 35, name: 'Chicken Tacos', category: 'Mexican', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300', rating: 4.6 },
  { id: 36, name: 'Fish Tacos', category: 'Mexican', image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300', rating: 4.7 },
  
  // Desserts
  { id: 37, name: 'Chocolate Brownie', category: 'Dessert', image: 'https://images.unsplash.com/photo-1564355808853-1fc6fb5fc843?w=300', rating: 4.8 },
  { id: 38, name: 'Cheesecake', category: 'Dessert', image: 'https://images.unsplash.com/photo-1533134242820-c9f0c9d1c0b7?w=300', rating: 4.7 },
  { id: 39, name: 'Ice Cream Sundae', category: 'Dessert', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300', rating: 4.6 },
  { id: 40, name: 'Tiramisu', category: 'Italian', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300', rating: 4.9 },
  
  // Salads
  { id: 41, name: 'Caesar Salad', category: 'Healthy', image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300', rating: 4.4 },
  { id: 42, name: 'Greek Salad', category: 'Healthy', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300', rating: 4.5 },
];

const filteredResults = searchText.length > 0 
  ? allDishes.filter(item => 
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.category.toLowerCase().includes(searchText.toLowerCase())
    ).slice(0, 10) 
  : [];

  const trendingSearches = [
    'Biryani', 'Pizza', 'Burger', 'Momos', 'Thali', 'Sandwich'
  ];

  const handleSearchItemClick = (itemName: string) => {
    setSearchText(itemName);
    setIsSearchFocused(false);
  };

  const clearRecentSearch = (id: number) => {
    console.log('Clear search:', id);
  };

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100">
  {/* Modern Search Bar */}
<View className="px-1 py-3 flex-row items-center bg-white/80 backdrop-blur-xl border-b border-gray-100">
  {/* 🔙 Back Button (fixed width) */}
  <TouchableOpacity
    onPress={() => router.back()}
    className="p-2 bg-white rounded-full shadow-md mr-1"
    style={{ width: 44, height: 44, justifyContent: "center", alignItems: "center" }}
  >
    <Ionicons name="chevron-back" size={24} color="#1F2937" />
  </TouchableOpacity>

  {/* 🔍 Search Input (flexes to fill rest) */}
  <View className={`flex-1 flex-row items-center bg-white rounded-2xl px-5 py-1 ${isSearchFocused ? 'shadow-2xl border-2 border-orange-500' : 'shadow-lg border border-gray-200'}`}>
    <EvilIcons name="search" size={24} color="#f97316" />
    <TextInput
      className="flex-1 ml-4 text-base text-gray-900 font-medium"
      placeholder="Search dishes, cuisines, restaurants..."
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
  
    {/* Search Dropdown - Shows when typing */}
  {searchText.length > 0 && isSearchFocused && (
    <View className="absolute top-20 left-0 right-0 z-50 bg-white mx-2 rounded-2xl shadow-2xl border border-gray-200" 
          style={{ maxHeight: '60%' }}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Dropdown Header */}
        <View className="px-4 py-3 border-b border-gray-100">
          <Text className="text-sm font-semibold text-gray-500">
            Results for "{searchText}"
          </Text>
        </View>

        {/* Search Results */}
        <View className="py-2">
          {filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  handleSearchItemClick(item.name);
                  setSearchText('');
                  setIsSearchFocused(false);
                  router.push("/SinglePage")
                }}
                className="flex-row items-center px-4 py-3 active:bg-gray-50 border-b border-gray-50"
              >
                <Image
                  source={{ uri: item.image }}
                  className="w-14 h-14 rounded-xl"
                  resizeMode="cover"
                />
                <View className="flex-1 ml-3">
                  <Text className="text-gray-800 font-bold text-base">
                    {item.name}
                  </Text>
                  <View className="flex-row items-center mt-1">
                    <Text className="text-gray-500 text-sm">{item.category}</Text>
                    {item.rating && (
                      <>
                        <View className="w-1 h-1 bg-gray-400 rounded-full mx-2" />
                        <Ionicons name="star" size={12} color="#eab308" />
                        <Text className="text-gray-600 text-xs ml-1 font-semibold">
                          {item.rating}
                        </Text>
                      </>
                    )}
                  </View>
                </View>
                <Ionicons name="arrow-forward" size={18} color="#d1d5db" />
              </TouchableOpacity>
            ))
          ) : (
            <View className="py-8 items-center">
              <View className="bg-gray-100 rounded-full p-4 mb-3">
                <Ionicons name="search-outline" size={32} color="#9ca3af" />
              </View>
              <Text className="text-gray-500 font-semibold">No results found</Text>
              <Text className="text-gray-400 text-sm mt-1">Try searching for something else</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  )}

{/* Backdrop overlay when dropdown is active */}
{searchText.length > 0 && isSearchFocused && (
  <TouchableOpacity
    activeOpacity={1}
    onPress={() => setIsSearchFocused(false)}
    className="absolute inset-0 bg-black/60"
    style={{ 
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 40 
    }}
  />
)}
  <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
    {isSearchFocused || searchText.length > 0 ? (
      <View className="px-5 py-4">
        {/* Trending Searches with Modern Card */}
        <View className="mb-8">
          <View className="flex-row items-center mb-4">
            <LinearGradient
              colors={['#f97316', '#dc2626']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{borderRadius:12}}
              className="rounded-xl p-2.5 mr-3"
            >
              <Ionicons name="flame" size={20} color="white" />
            </LinearGradient>
            <Text className="text-xl font-bold text-gray-800">Trending Now</Text>
          </View>
          <View className="flex-row flex-wrap gap-2">
            {trendingSearches.map((trend, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleSearchItemClick(trend)}
                className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-full px-5 py-3 shadow-sm active:scale-95"
              >
                <Text className="text-gray-700 text-sm font-bold">{trend}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recent Searches - Enhanced */}
        {recentSearches.length > 0 && (
          <View className="mb-8">
            <View className="flex-row items-center justify-between mb-4">
              <View className="flex-row items-center">
                <Ionicons name="time-outline" size={22} color="#64748b" />
                <Text className="text-xl font-bold text-gray-800 ml-2">Recent</Text>
              </View>
              <TouchableOpacity>
                <Text className="text-orange-600 text-sm font-bold">Clear All</Text>
              </TouchableOpacity>
            </View>
            <View className="space-y-3">
              {recentSearches.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => handleSearchItemClick(item.name)}
                  className="bg-white rounded-2xl p-4 flex-row items-center shadow-lg border border-gray-100 active:scale-98"
                >
                  <View className="relative">
                    <Image
                      source={{ uri: item.image }}
                      className="w-16 h-16 rounded-xl"
                      resizeMode="cover"
                    />
                    <View className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl" />
                  </View>
                  <View className="flex-1 ml-4">
                    <Text className="text-gray-800 font-bold text-base">{item.name}</Text>
                    <Text className="text-gray-500 text-sm mt-1">{item.category}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => clearRecentSearch(item.id)}
                    className="p-2 bg-gray-50 rounded-full"
                  >
                    <Ionicons name="close" size={18} color="#94a3b8" />
                  </TouchableOpacity>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Quick Categories */}
        <View className="mb-8">
          <Text className="text-xl font-bold text-gray-800 mb-4">Browse Categories</Text>
          <View className="flex-row flex-wrap gap-3">
            {['🍔 Fast Food', '🍜 Asian', '🍕 Italian', '🍰 Dessert'].map((cat, index) => (
              <TouchableOpacity
                key={index}
                className="flex-1 min-w-[45%] bg-white rounded-2xl p-4 flex-row items-center shadow-md border border-gray-100 active:scale-95"
              >
                <View className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl p-3 mr-3">
                  <Text className="text-2xl">{cat.split(' ')[0]}</Text>
                </View>
                <Text className="text-gray-700 font-bold flex-1">{cat.split(' ').slice(1).join(' ')}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recommended - Premium Design */}
        <View className="mb-6">
          <View className="flex-row items-center mb-4">
            <LinearGradient
              colors={['#a855f7', '#ec4899']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{borderRadius:12}}
              className=" p-2.5 mr-3"
            >
              <Ionicons name="sparkles" size={18} color="white" />
            </LinearGradient>
            <Text className="text-xl font-bold text-gray-800">Recommended for You</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 20 }}
          >
            {recommended.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleSearchItemClick(item.name)}
                className="mr-4 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden active:scale-95"
                style={{ width: 180 }}
              >
                <View className="relative">
                  <Image
                    source={{ uri: item.image }}
                    className="w-full h-44"
                    resizeMode="cover"
                  />
                  <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.7)']}
                    className="absolute inset-0"
                  />
                  <View className="absolute top-3 right-3 bg-[#006400]  backdrop-blur-sm rounded-full px-3 py-1.5 flex-row items-center">
                    <Ionicons name="star" size={12} color="#eab308" />
                    <Text className="text-white text-xs font-bold ml-1">4.8</Text>
                  </View>
                </View>
                <View className="p-4">
                  <Text className="text-gray-800 font-bold text-base mb-2" numberOfLines={1}>
                    {item.name}
                  </Text>
                  <View className="flex-row items-center justify-between">
                    <View className="bg-orange-100 rounded-full px-3 py-1.5">
                      <Text className="text-orange-600 text-xs font-bold">
                        {item.category}
                      </Text>
                    </View>
                    <Ionicons name="arrow-forward" size={16} color="#f97316" />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    ) : (
      <View className="flex-1 items-center justify-center px-8 py-20">
        <View className="relative mb-6">
          <View className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-full p-10 shadow-2xl">
            <Ionicons name="search" size={56} color="#f97316" />
          </View>
          <View className="absolute -top-2 -right-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-2 shadow-xl">
            <Ionicons name="sparkles" size={20} color="white" />
          </View>
        </View>
        <Text className="text-3xl font-bold text-gray-800 mb-3 text-center">
          What are you craving?
        </Text>
        <Text className="text-gray-500 text-center text-lg">
          Discover amazing dishes from top restaurants near you
        </Text>
      </View>
    )}
  </ScrollView>
</SafeAreaView>
  );
}