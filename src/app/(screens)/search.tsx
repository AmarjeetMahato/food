import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, ScrollView, Modal } from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

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

  const trendingSearches = [
    'Biryani', 'Pizza', 'Burger', 'Momos', 'Thali', 'Sandwich'
  ];

  const handleSearchItemClick = (itemName: string) => {
    setSearchText(itemName);
    setIsSearchFocused(false);
  };

  const clearRecentSearch = (id: number) => {
    // Logic to remove from recent searches
    console.log('Clear search:', id);
  };

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-gray-50">
      {/* Search Bar */}
      <View className="px-4 py-2">
        <View className="flex-row items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200">
          <EvilIcons name="search" size={24} color="#ea580c" />
          <TextInput
            className="flex-1 ml-3 text-base text-gray-900"
            placeholder="Search for food..."
            placeholderTextColor="#9CA3AF"
            value={searchText}
            onChangeText={setSearchText}
            onFocus={() => setIsSearchFocused(true)}
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => setSearchText('')}>
              <Ionicons name="close-circle" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {isSearchFocused || searchText.length > 0 ? (
          <View className="px-4">
            {/* Trending Searches */}
            <View className="mb-6">
              <View className="flex-row items-center justify-between mb-3">
                <Text className="text-lg font-bold text-gray-800">🔥 Trending</Text>
              </View>
              <View className="flex-row flex-wrap gap-2">
                {trendingSearches.map((trend, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleSearchItemClick(trend)}
                    className="bg-orange-50 border border-orange-200 rounded-full px-4 py-2"
                  >
                    <Text className="text-orange-600 text-sm font-semibold">{trend}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <View className="mb-6">
                <View className="flex-row items-center justify-between mb-3">
                  <Text className="text-lg font-bold text-gray-800">Recent Searches</Text>
                  <TouchableOpacity>
                    <Text className="text-orange-600 text-sm font-semibold">Clear All</Text>
                  </TouchableOpacity>
                </View>
                <View className="space-y-3">
                  {recentSearches.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => handleSearchItemClick(item.name)}
                      className="bg-white rounded-xl p-3 flex-row items-center shadow-sm border border-gray-100"
                    >
                      <Image
                        source={{ uri: item.image }}
                        className="w-14 h-14 rounded-lg"
                        resizeMode="cover"
                      />
                      <View className="flex-1 ml-3">
                        <Text className="text-gray-800 font-semibold text-base">{item.name}</Text>
                        <Text className="text-gray-500 text-xs mt-1">{item.category}</Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => clearRecentSearch(item.id)}
                        className="p-2"
                      >
                        <Ionicons name="close" size={18} color="#9CA3AF" />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}

            {/* Recommended */}
            <View className="mb-6">
              <View className="flex-row items-center justify-between mb-3">
                <View className="flex-row items-center">
                  <LinearGradient
                    colors={['#f97316', '#ea580c']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{
                      borderRadius: 8,
                      padding: 6,
                      marginRight: 8
                    }}
                  >
                    <Ionicons name="star" size={16} color="white" />
                  </LinearGradient>
                  <Text className="text-lg font-bold text-gray-800">Recommended for You</Text>
                </View>
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: 16 }}
              >
                {recommended.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => handleSearchItemClick(item.name)}
                    className="mr-3 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                    style={{ width: 140 }}
                  >
                    <Image
                      source={{ uri: item.image }}
                      className="w-full h-32"
                      resizeMode="cover"
                    />
                    <View className="p-3">
                      <Text className="text-gray-800 font-semibold text-sm" numberOfLines={1}>
                        {item.name}
                      </Text>
                      <View className="flex-row items-center mt-1">
                        <View className="bg-orange-100 rounded-full px-2 py-1">
                          <Text className="text-orange-600 text-xs font-semibold">
                            {item.category}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        ) : (
          /* Default View - When Search is Not Focused */
          <View className="px-4">
            <View className="items-center justify-center py-20">
              <View className="bg-orange-100 rounded-full p-6 mb-4">
                <Ionicons name="search" size={48} color="#ea580c" />
              </View>
              <Text className="text-xl font-bold text-gray-800 mb-2">
                What are you craving?
              </Text>
              <Text className="text-gray-500 text-center px-8">
                Search for your favorite dishes and restaurants
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}