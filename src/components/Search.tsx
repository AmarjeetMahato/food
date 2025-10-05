import React from 'react';
import { View, TextInput } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'
export default function Search() {
    return (
        <View className="flex-row items-center bg-gray-100 rounded-xl px-4 py-2 mx-1 my-2 shadow-sm">
            <EvilIcons name="search" size={24} color="black" />
            <TextInput
                className="flex-1 ml-3 text-base text-gray-700"
                placeholder="Search for food..."
                placeholderTextColor="#9CA3AF"
            />
        </View>
    );
}