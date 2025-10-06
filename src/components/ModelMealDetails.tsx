import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";
import Modal from "react-native-modal";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

interface Meal {
  type: string;
  menu: string;
  time: string;
}

interface MealDetailModalProps {
  isVisible: boolean;
  onClose: () => void;
  meal: Meal;
}

const MealDetailModal: React.FC<MealDetailModalProps> = ({
  isVisible,
  onClose,
  meal,
}) => {
  // Sample data - replace with your actual data
  const mealDetails = {
    name: meal.menu || "Delicious Meal",
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
    switch (meal.type?.toLowerCase()) {
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

  const getMealColor = () => {
    switch (meal.type?.toLowerCase()) {
      case "breakfast":
        return ["#FFB75E", "#ED8F03"];
      case "lunch":
        return ["#4FACFE", "#00F2FE"];
      case "dinner":
        return ["#667EEA", "#764BA2"];
      case "snack":
        return ["#FA709A", "#FEE140"];
      default:
        return ["#6EE7B7", "#3B82F6"];
    }
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection={["down"]}
      style={{ margin: 0 }}
      propagateSwipe={true}
      animationIn="slideInUp"
      animationOut="slideOutDown"
        animationInTiming={200}
  animationOutTiming={200}
      useNativeDriver={true}
      hideModalContentWhileAnimating={false}

    >
      <View className="flex-1 bg-gray-50">
        <StatusBar barStyle="light-content" />

        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          className="flex-1"
        >
          {/* Header Image with Gradient Overlay */}
          <View className="relative" style={{ height: height * 0.4 }}>
            <Image
              source={{ uri: mealDetails.image }}
              className="w-full h-full"
              resizeMode="cover"
            />

            {/* Gradient Overlay */}
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.8)"]}
              className="absolute bottom-0 left-0 right-0 h-32"
            />

            {/* Close Button */}
            <TouchableOpacity
              onPress={onClose}
              className="absolute top-12 right-4 bg-white/90 rounded-full p-2 shadow-lg"
              style={{ width: 40, height: 40 }}
            >
              <Text className="text-center text-xl leading-6">✕</Text>
            </TouchableOpacity>

            {/* Meal Type Badge */}
            <View className="absolute top-12 left-4">
              <View className="bg-white/90 rounded-full px-4 py-2 flex-row items-center">
                <Text className="text-xl mr-2">{getMealIcon()}</Text>
                <Text className="font-bold text-gray-800 capitalize">
                  {meal.type}
                </Text>
              </View>
            </View>

            {/* Time Badge */}
            <View className="absolute bottom-4 left-4">
              <View className="bg-white/90 rounded-full px-4 py-2">
                <Text className="font-semibold text-gray-800">
                  ⏰ {meal.time}
                </Text>
              </View>
            </View>
          </View>

          {/* Content */}
          <View className="bg-white rounded-t-3xl -mt-6 px-6 pt-6 pb-8">
            {/* Meal Name */}
            <Text className="text-3xl font-bold text-gray-900 mb-2">
              {mealDetails.name}
            </Text>

            {/* Description */}
            <Text className="text-gray-600 text-base leading-6 mb-6">
              {mealDetails.description}
            </Text>

            {/* Nutrition Cards */}
            <Text className="text-lg font-bold text-gray-900 mb-3">
              Nutrition Facts
            </Text>
            <View className="flex-row flex-wrap gap-3 mb-6">
              <View className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl px-4 py-3 flex-1 min-w-[45%] border border-green-200">
                <Text className="text-green-600 text-xs font-bold mb-1">
                  CALORIES
                </Text>
                <Text className="text-green-900 text-2xl font-bold">
                  {mealDetails.calories}
                </Text>
                <Text className="text-green-700 text-xs">kcal</Text>
              </View>

              <View className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl px-4 py-3 flex-1 min-w-[45%] border border-blue-200">
                <Text className="text-blue-600 text-xs font-bold mb-1">
                  PROTEIN
                </Text>
                <Text className="text-blue-900 text-2xl font-bold">
                  {mealDetails.protein}
                </Text>
                <Text className="text-blue-700 text-xs">grams</Text>
              </View>

              <View className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl px-4 py-3 flex-1 min-w-[45%] border border-orange-200">
                <Text className="text-orange-600 text-xs font-bold mb-1">
                  CARBS
                </Text>
                <Text className="text-orange-900 text-2xl font-bold">
                  {mealDetails.carbs}
                </Text>
                <Text className="text-orange-700 text-xs">grams</Text>
              </View>

              <View className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl px-4 py-3 flex-1 min-w-[45%] border border-purple-200">
                <Text className="text-purple-600 text-xs font-bold mb-1">
                  FATS
                </Text>
                <Text className="text-purple-900 text-2xl font-bold">
                  {mealDetails.fats}
                </Text>
                <Text className="text-purple-700 text-xs">grams</Text>
              </View>
            </View>

            {/* Ingredients Section */}
            <View className="mb-6">
              <Text className="text-lg font-bold text-gray-900 mb-3">
                🥗 Ingredients
              </Text>
              <View className="bg-gray-50 rounded-2xl p-4">
                {mealDetails.ingredients.map((ingredient, index) => (
                  <View key={index} className="flex-row items-center mb-3">
                    <View className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                    <Text className="text-gray-700 text-base flex-1">
                      {ingredient}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Benefits Section */}
            <View className="mb-6">
              <Text className="text-lg font-bold text-gray-900 mb-3">
                ✨ Health Benefits
              </Text>
              <View className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-4 border border-emerald-200">
                {mealDetails.benefits.map((benefit, index) => (
                  <View key={index} className="flex-row items-start mb-3">
                    <Text className="text-emerald-600 text-lg mr-2">✓</Text>
                    <Text className="text-gray-700 text-base flex-1">
                      {benefit}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Action Buttons */}
            <View className="flex-row gap-3 mt-4">
              <TouchableOpacity
                onPress={() => {
                  // Mark as eaten action
                  onClose();
                }}
                className="bg-green-600 rounded-2xl py-4 flex-1 items-center shadow-lg"
              >
                <Text className="text-white font-bold text-base">
                  ✓ Mark as Eaten
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  // Share action
                }}
                className="bg-gray-800 rounded-2xl py-4 px-6 items-center shadow-lg"
              >
                <Text className="text-white font-bold text-base">📤</Text>
              </TouchableOpacity>
            </View>

            {/* Close text button */}
            <TouchableOpacity onPress={onClose} className="mt-4 py-3">
              <Text className="text-center text-gray-500 font-medium">
                Swipe down or tap to close
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default MealDetailModal;