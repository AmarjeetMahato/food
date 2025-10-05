

import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import category from "../../assets/data/catgeory.json"
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

type CategoryProps = {
  id: number;
  name: string;
  image: string;
};


const Categories = ({id,  name, image }: CategoryProps) => {
     const router = useRouter();
  return (
     <Pressable
      onPress={() =>
        router.push({
          pathname: "/category",
          params: { id, name },
        })
      }
      className="flex items-center mr-3"
    >
      {/* Gradient Ring Wrapper */}
      <LinearGradient
        colors={["#FF8008", "#FFC837"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          padding: 3,
          borderRadius: 999,
        }}
      >
        <Image
          source={{ uri: image }}
          className="w-[60px] h-[60px] rounded-full"
        />
      </LinearGradient>

      {/* Name */}
      <Text className="text-[14px] font-medium mt-1">{name}</Text>
    </Pressable>
  )
}

export default Categories
