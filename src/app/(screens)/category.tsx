import { Pressable, Text, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Category = () => {
  const { id, name } = useLocalSearchParams<{ id: string; name: string }>();
  const router = useRouter()
  return (
    <SafeAreaView    className="flex-1 bg-white"
      edges={["top", "left", "right"]}  >
     <View>
                <Text className="text-xl font-bold">Category: {name}</Text>
      <Text className="text-gray-600 mt-2">ID: {id}</Text>
    <Pressable onPress={() => router.push("/")}>
            <Text className=" inline  text-white py-2 px-3 bg-blue-500 ">
                  Go Back to Home
            </Text>
    </Pressable>

     </View>
      {/* Later: Fetch and show items of this category using id */}
    </SafeAreaView>
  );
};

export default Category;
