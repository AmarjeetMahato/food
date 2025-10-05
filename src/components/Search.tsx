import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Search() {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.push('/search')} className="mx-1 my-2">
      <View className="flex-row items-center bg-gray-100 rounded-xl px-4 py-4 shadow-lg">
        <EvilIcons name="search" size={24} color="gray" />
        <Text className="ml-3 text-base text-gray-500">
          Search for food...
        </Text>
      </View>
    </Pressable>
  );
}
