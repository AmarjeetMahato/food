import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Redirect to home after 2.5 seconds
      router.replace("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={["#FF7E00", "#FF4500"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1 justify-center items-center"
    >
      <Text className="text-white text-3xl font-extrabold">Welcome to Our App</Text>
    </LinearGradient>
  );
}
