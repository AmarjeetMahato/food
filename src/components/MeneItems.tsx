import React, { useState } from 'react';
import { View, Image, Text, ScrollView, Pressable, Dimensions } from 'react-native';

const foodItems = [
    { id: '1', name: 'Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070' },
    { id: '2', name: 'Burger', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965' },
    { id: '3', name: 'Sushi', image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1025' },
    { id: '4', name: 'Salad', image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600' },
    { id: '5', name: 'Pasta', image: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?q=80&w=687' },
    { id: '6', name: 'Chicken', image: 'https://plus.unsplash.com/premium_photo-1661419883163-bb4df1c10109?q=80&w=687' },
    { id: '7', name: 'Paneer', image: 'https://images.unsplash.com/photo-1701579231378-3726490a407b?q=80&w=1974' },
    { id: '8', name: 'Tacos', image: 'https://plus.unsplash.com/premium_photo-1661730329741-b3bf77019b39?q=80&w=687' },
];

const MeneItems = () => {
    const [selectedId, setSelectedId] = useState('1');

    return (
        <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            className="py-1"
            contentContainerStyle={{ paddingHorizontal: 16 }}
        >
            {foodItems.map((item) => {
                const isSelected = selectedId === item.id;
                return (
                    <Pressable
                        key={item.id}
                        onPress={() => setSelectedId(item.id)}
                        className="mr-1"
                    >
                        <View className="items-center">
                            <View
                                className={`rounded-full overflow-hidden ${
                                    isSelected ? 'border-4 border-orange-500' : 'border-2 border-gray-200'
                                }`}
                                style={{ width: 70, height: 70 }}
                            >
                                <Image
                                    source={{ uri: item.image }}
                                    style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                                />
                            </View>
                            <Text
                                className={`text-xs font-semibold mt-2 ${
                                    isSelected ? 'text-orange-600' : 'text-gray-700'
                                }`}
                            >
                                {item.name}
                            </Text>
                        </View>
                    </Pressable>
                );
            })}
        </ScrollView>
    );
};

export default MeneItems;