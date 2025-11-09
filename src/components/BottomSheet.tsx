import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Dimensions, Animated, Easing } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

interface FoodItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
  foodItems: FoodItem[];
  gstPercent?: number;
}

const { height } = Dimensions.get("window");

const BottomSheet = ({ visible, onClose, foodItems, gstPercent = 5 }: BottomSheetProps) => {
  const [translateY] = useState(new Animated.Value(height));

  const subtotal = foodItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const gstAmount = (subtotal * gstPercent) / 100;
  const total = subtotal + gstAmount;

  React.useEffect(() => {
    Animated.timing(translateY, {
      toValue: visible ? 0 : height,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [visible]);

  return (
    <Animated.View
      style={{
        transform: [{ translateY }],
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        maxHeight: "80%",
        backgroundColor: "white",
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 10,
      }}
    >
      <View className="px-5 pt-5 pb-4 flex-1">
        {/* Header */}
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-xl font-bold text-gray-900">Your Order</Text>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close" size={28} color="#6b7280" />
          </TouchableOpacity>
        </View>

        {/* Food Items */}
        <FlatList
          data={foodItems}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <View className="flex-row justify-between items-center mb-3">
              <View>
                <Text className="text-gray-900 font-medium">{item.name}</Text>
                <Text className="text-gray-500 text-sm">Qty: {item.quantity}</Text>
              </View>
              <Text className="text-gray-900 font-bold">₹{item.price * item.quantity}</Text>
            </View>
          )}
        />

        {/* Divider */}
        <View className="h-px bg-gray-200 my-3" />

        {/* Subtotal & GST */}
        <View className="mb-3">
          <View className="flex-row justify-between mb-1">
            <Text className="text-gray-500">Subtotal</Text>
            <Text className="text-gray-900 font-bold">₹{subtotal.toFixed(2)}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-500">GST ({gstPercent}%)</Text>
            <Text className="text-gray-900 font-bold">₹{gstAmount.toFixed(2)}</Text>
          </View>
        </View>

        {/* Total */}
        <View className="flex-row justify-between items-center py-3 px-4 rounded-xl bg-orange-50 mb-4">
          <Text className="text-lg font-bold text-gray-900">Total</Text>
          <Text className="text-lg font-bold text-gray-900">₹{total.toFixed(2)}</Text>
        </View>

        {/* Checkout Button */}
        <TouchableOpacity activeOpacity={0.8}>
          <LinearGradient
            colors={["#fb923c", "#ea580c"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="py-4 rounded-2xl items-center"
          >
            <Text className="text-white font-bold text-lg">Place Order</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default BottomSheet;
