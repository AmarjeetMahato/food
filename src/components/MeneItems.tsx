import React from 'react';
import { View, Image, Text, FlatList, Dimensions } from 'react-native';

type FoodItem = {
    id: string;
    name: string;
    image: string;
};

const foodItems: FoodItem[] = [
    { id: '1', name: 'Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '2', name: 'Burger', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '3', name: 'Sushi', image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '4', name: 'Salad', image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2FsYWR8ZW58MHx8MHx8fDA%3D' },
    { id: '5', name: 'Pasta', image: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '6', name: 'Chicken', image: 'https://plus.unsplash.com/premium_photo-1661419883163-bb4df1c10109?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '7', name: 'Paneer', image: 'https://images.unsplash.com/photo-1701579231378-3726490a407b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '8', name: 'Tacos', image: 'https://plus.unsplash.com/premium_photo-1661730329741-b3bf77019b39?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const numColumns = 4;
const boxSize = Dimensions.get('window').width / numColumns - 16;

const MeneItems: React.FC = () => {
    return (
        <View className="p-2 rounded-md bg-white">
            <FlatList
                data={foodItems}
                keyExtractor={item => item.id}
                numColumns={numColumns}
                scrollEnabled={false} // prevent FlatList from scrolling; height grows naturally
                contentContainerStyle={{ justifyContent: 'center', paddingBottom: 8 }}
                renderItem={({ item }) => (
                    <View
                        className='bg-gray-100 rounded-xl items-center m-1 p-2 shadow'
                        style={{ width: boxSize }}
                    >
                        <Image
                            source={{ uri: item.image }}
                            className="rounded-lg mb-1"
                            style={{ width: boxSize - 16, height: boxSize - 16 }}
                        />
                        <Text className="text-base font-semibold text-gray-800 text-center">
                            {item.name}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};


export default MeneItems;
