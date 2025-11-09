import { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  Animated,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";



export default function AuthScreen() {
  const [activeTab, setActiveTab] = useState<"mobile" | "email">("mobile");
  const [inputValue, setInputValue] = useState("");
  const scrollViewRef = useRef<ScrollView>(null);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const keyboardWillShow = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      () => {
        scrollViewRef.current?.scrollTo({ y: 150, animated: true });
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start();
      }
    );

    const keyboardWillHide = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      () => {
        scrollViewRef.current?.scrollTo({ y: 0, animated: true });
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
      }
    );

    return () => {
      keyboardWillShow.remove();
      keyboardWillHide.remove();
    };
  }, []);

  const handleInputFocus = () => {
    scrollViewRef.current?.scrollTo({ y: 150, animated: true });
    router.push("/otp");
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        ref={scrollViewRef}
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 40 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Logo Section */}
        <Animated.View style={{ opacity: fadeAnim }} className="items-center pt-16 mb-8">
          <View className="w-20 h-20 bg-orange-500 rounded-full items-center justify-center mb-6">
            <Text className="text-white text-3xl font-bold">A</Text>
          </View>
          <Text className="text-2xl font-bold text-gray-800">Welcome Back</Text>
          <Text className="text-gray-500 mt-2">Sign in to continue</Text>
        </Animated.View>

        {/* Main Form Container */}
        <View className="px-6 mt-8">
          {/* Tab Switcher - Minimal */}
          <View className="flex-row mb-6">
            <TouchableOpacity
              onPress={() => setActiveTab("mobile")}
              className="flex-1 items-center pb-3 border-b-2"
              style={{
                borderBottomColor: activeTab === "mobile" ? "#F97316" : "#E5E7EB",
              }}
            >
              <Text
                className={`font-semibold ${
                  activeTab === "mobile" ? "text-orange-500" : "text-gray-400"
                }`}
              >
                Mobile
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setActiveTab("email")}
              className="flex-1 items-center pb-3 border-b-2"
              style={{
                borderBottomColor: activeTab === "email" ? "#F97316" : "#E5E7EB",
              }}
            >
              <Text
                className={`font-semibold ${
                  activeTab === "email" ? "text-orange-500" : "text-gray-400"
                }`}
              >
                Email
              </Text>
            </TouchableOpacity>
          </View>

          {/* Input Field */}
          <View className="mb-4">
            <TextInput
              value={inputValue}
              onChangeText={setInputValue}
              onFocus={handleInputFocus}
              placeholder={
                activeTab === "mobile"
                  ? "Enter mobile number"
                  : "Enter email address"
              }
              keyboardType={activeTab === "mobile" ? "phone-pad" : "email-address"}
              className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-base text-gray-800"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          {/* Policy Text */}
          <Text className="text-xs text-gray-500 text-center mb-6 px-4">
            By continuing, you agree to our{" "}
            <Text className="text-orange-500 underline">Terms of Service</Text> and{" "}
            <Text className="text-orange-500 underline">Privacy Policy</Text>
          </Text>

          {/* Continue Button */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleInputFocus}
            className="bg-orange-500 rounded-xl py-4 items-center mb-8 shadow-sm"
          >
            <Text className="text-white font-bold text-base">Continue</Text>
          </TouchableOpacity>

          {/* Divider with "Or sign in with" */}
          <View className="flex-row items-center mb-8">
            <View className="flex-1 h-px bg-gray-300" />
            <Text className="text-gray-500 text-sm mx-4">Or sign in with</Text>
            <View className="flex-1 h-px bg-gray-300" />
          </View>

          {/* Social Login Icons */}
          <View className="flex-row justify-center gap-4">
            <TouchableOpacity
              activeOpacity={0.7}
              className="w-14 h-14 bg-white border border-gray-200 rounded-xl items-center justify-center shadow-sm"
            >
                  <FontAwesome name="google" size={22} color="#DB4437" />

            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              className="w-14 h-14 bg-white border border-gray-200 rounded-xl items-center justify-center shadow-sm"
            >
                  <FontAwesome name="facebook" size={22} color="#1877F2" />

            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              className="w-14 h-14 bg-white border border-gray-200 rounded-xl items-center justify-center shadow-sm"
            >
<FontAwesome6 name="x-twitter" size={22} color="black" />        
    </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}