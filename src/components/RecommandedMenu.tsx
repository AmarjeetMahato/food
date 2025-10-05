import { View, Text, FlatList, Image, Dimensions, Pressable } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';



const { width } = Dimensions.get('window');
const numColumns = 2;
const boxSize = width / numColumns - 24; // adjust for margin/padding

const foodItems = [
  { id: '1', name: 'Burger', price: '$5', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVyZ2VyfGVufDB8fDB8fHww' },
  { id: '2', name: 'Pizza', price: '$8', image: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?auto=format&fit=crop&w=600&q=80' },
  { id: '3', name: 'Sushi', price: '$12', image: 'https://images.unsplash.com/photo-1701579231378-3726490a407b?auto=format&fit=crop&w=600&q=80' },
  { id: '4', name: 'Pasta', price: '$7', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

   {
    id: '5',
    name: 'Tacos',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop',
    price: '$9',
  },
  {
    id: '6',
    name: 'Ramen',
    image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?q=80&w=800&auto=format&fit=crop',
    price: '$13',
  },
  {
    id: '7',
    name: 'Steak',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop',
    price: '$25',
  },
  {
    id: '8',
    name: 'Salad',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop',
    price: '$8',
  },
  {
    id: '9',
    name: 'Fried Chicken',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop',
    price: '$11',
  },
  {
    id: '10',
    name: 'Ice Cream',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop',
    price: '$5',
  },
  {
    id: '11',
    name: 'Sandwich',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop',
    price: '$6',
  },
  {
    id: '12',
    name: 'Donuts',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop',
    price: '$4',
  },
];

export default function RecommendedMenu() {
    const router = useRouter()
  return (
      <View className=" px-1 pt-3 pb-0 rounded-md">
      <FlatList
        data={foodItems}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        columnWrapperStyle={{ justifyContent: 'space-between', marginBottom:5 }}
        scrollEnabled={false}
        renderItem={({ item }) => (
                   <Pressable
            onPress={() =>
              router.push({
                pathname: "/SinglePage",
                  params: { item: JSON.stringify(item) }, // optional: pass item id
              })
            }
          >
            <View
              className="relative rounded-2xl overflow-hidden shadow-md"
              style={{ width: boxSize, height: boxSize * 1.3 }}
            >
              {/* Food Image */}
              <Image
                source={{ uri: item.image }}
                className="w-full h-full"
                style={{ resizeMode: "cover" }}
              />

              {/* Overlay Text */}
              <View className="absolute inset-0 p-3 flex justify-between">
                <Text className="text-white font-bold text-lg uppercase shadow-md">
                  {item.name}
                </Text>
                <View className="self-end bg-black/50 px-3 py-1 rounded-full">
                  <Text className="text-white font-semibold text-sm">{item.price}</Text>
                </View>
              </View>
            </View>
          </Pressable>

        )}
      />
    </View>

  );
}
