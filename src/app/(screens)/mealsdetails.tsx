import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { useColorScheme } from "react-native";

const { height } = Dimensions.get("window");

const MealsDetails = () => {
  const [isClosed, setIsClosed] = useState(false);

    const colorScheme = useColorScheme();
 
  const mealDetails = {
    type: "Breakfast",
    menu: "Poha, Masala Chai, Banana",
    time: "8:00-10:00 AM",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
    description:
      "A perfectly balanced meal with fresh ingredients, carefully prepared to meet your nutritional goals. Packed with protein, vitamins, and essential nutrients.",
    calories: 450,
    protein: "35g",
    carbs: "28g",
    fats: "18g",
    fiber: "8g",
    ingredients: [
      "Grilled Chicken Breast",
      "Fresh Mixed Greens",
      "Cherry Tomatoes",
      "Cucumber Slices",
      "Olive Oil Dressing",
      "Feta Cheese",
      "Quinoa",
    ],
    benefits: [
      "High in protein for muscle recovery",
      "Rich in vitamins and minerals",
      "Supports weight management",
      "Boosts energy levels",
    ],
  };

  const getMealIcon = () => {
      const type = mealDetails.type?.toLowerCase() ?? ""; 
    switch (type) {
      case "breakfast":
        return "🌅";
      case "lunch":
        return "🍽️";
      case "dinner":
        return "🌙";
      case "snack":
        return "🍎";
      default:
        return "🍴";
    }
  };

  if (isClosed) return null;

  return (
    <SafeAreaView className="flex-1 ">
         <StatusBar
        backgroundColor={colorScheme === "dark" ? "#000" : "#FFF"}
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />

   <TouchableOpacity
  onPress={() => router.back()}
  className="bg-white rounded-full shadow-md items-center justify-center"
  style={{
    width: 40,
    height: 40,
    position: 'absolute',
    top: 10,    
    left: 16,  
    zIndex: 10, 
  }}
>
  <Ionicons name="chevron-back" size={24} color="#1F2937" />
</TouchableOpacity>



      <ScrollView
      className=""
      showsVerticalScrollIndicator={false} bounces={false}>
        {/* Header Image with Gradient */}
        <View className="relative" style={{ height: height * 0.4 }}>
          <Image
            source={{ uri: mealDetails.image }}
            className="w-full h-full"
            resizeMode="cover"
          />

          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            className="absolute bottom-0 left-0 right-0 h-32"
          />

       

          {/* Meal Type Badge */}
          <View className="absolute top-[6.5rem] left-4">
            <View className="bg-white/90 rounded-full px-4 py-2 flex-row items-center">
              <Text className="text-xl mr-2">{getMealIcon()}</Text>
              <Text className="font-bold text-gray-800 capitalize">
                {mealDetails.type}
              </Text>
            </View>
          </View>

          {/* Time Badge */}
          <View className="absolute bottom-4 left-4">
            <View className="bg-white/90 rounded-full px-4 py-2">
              <Text className="font-semibold text-gray-800">
                ⏰ {mealDetails.time}
              </Text>
            </View>
          </View>
        </View>

        {/* Content */}
        <View className="bg-white rounded-t-3xl -mt-6 px-6 pt-6 pb-8">
          {/* Meal Name */}
          <Text className="text-3xl font-bold text-gray-900 mb-2">
            {mealDetails.menu}
          </Text>

          {/* Description */}
          <Text className="text-gray-600 text-base leading-6 mb-6">
            {mealDetails.description}
          </Text>

          {/* Nutrition Facts */}
          <Text className="text-lg font-bold text-gray-900 mb-3">
            Nutrition Facts
          </Text>
          <View className="flex-row flex-wrap gap-3 mb-6">
            <View className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl px-4 py-3 flex-1 min-w-[45%] border border-green-200">
              <Text className="text-green-600 text-xs font-bold mb-1">CALORIES</Text>
              <Text className="text-green-900 text-2xl font-bold">
                {mealDetails.calories}
              </Text>
              <Text className="text-green-700 text-xs">kcal</Text>
            </View>

            <View className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl px-4 py-3 flex-1 min-w-[45%] border border-blue-200">
              <Text className="text-blue-600 text-xs font-bold mb-1">PROTEIN</Text>
              <Text className="text-blue-900 text-2xl font-bold">{mealDetails.protein}</Text>
              <Text className="text-blue-700 text-xs">grams</Text>
            </View>

            <View className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl px-4 py-3 flex-1 min-w-[45%] border border-orange-200">
              <Text className="text-orange-600 text-xs font-bold mb-1">CARBS</Text>
              <Text className="text-orange-900 text-2xl font-bold">{mealDetails.carbs}</Text>
              <Text className="text-orange-700 text-xs">grams</Text>
            </View>

            <View className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl px-4 py-3 flex-1 min-w-[45%] border border-purple-200">
              <Text className="text-purple-600 text-xs font-bold mb-1">FATS</Text>
              <Text className="text-purple-900 text-2xl font-bold">{mealDetails.fats}</Text>
              <Text className="text-purple-700 text-xs">grams</Text>
            </View>
          </View>

          {/* Ingredients */}
          <View className="mb-6">
            <Text className="text-lg font-bold text-gray-900 mb-3">🥗 Ingredients</Text>
            <View className="bg-gray-50 rounded-2xl p-4">
              {mealDetails.ingredients.map((ingredient, index) => (
                <View key={index} className="flex-row items-center mb-3">
                  <View className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                  <Text className="text-gray-700 text-base flex-1">{ingredient}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Benefits */}
          <View className="mb-6">
            <Text className="text-lg font-bold text-gray-900 mb-3">✨ Health Benefits</Text>
            <View className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-4 border border-emerald-200">
              {mealDetails.benefits.map((benefit, index) => (
                <View key={index} className="flex-row items-start mb-3">
                  <Text className="text-emerald-600 text-lg mr-2">✓</Text>
                  <Text className="text-gray-700 text-base flex-1">{benefit}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Action Buttons */}
          <View className="flex-row gap-3 mt-4">
            <TouchableOpacity
              onPress={() => setIsClosed(true)}
              className="bg-green-600 rounded-2xl py-4 flex-1 items-center shadow-lg"
            >
              <Text className="text-white font-bold text-base">✓ Mark as Eaten</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {}}
              className="bg-gray-800 rounded-2xl py-4 px-6 items-center shadow-lg"
            >
              <Text className="text-white font-bold text-base">📤</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => setIsClosed(true)} className="mt-4 py-3">
            <Text className="text-center text-gray-500 font-medium">
              Swipe down or tap to close
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MealsDetails;
