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
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

export default function OTPScreen() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(TextInput | null)[]>([]);
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

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleOtpChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value !== "" && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResendOTP = () => {
    if (canResend) {
      setTimer(30);
      setCanResend(false);
      setOtp(["", "", "", ""]);
      // Add your resend OTP logic here
    }
  };

  const handleVerify = () => {
     router.push("/");
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
          <Text className="text-2xl font-bold text-gray-800">Verify OTP</Text>
          <Text className="text-gray-500 mt-2 text-center px-8">
            Enter the 4-digit code sent to your mobile
          </Text>
        </Animated.View>

        {/* Main Form Container */}
        <View className="px-6 mt-8">
          {/* OTP Input Boxes */}
          <View className="flex-row justify-center gap-4 mb-6">
            {otp.map((digit, index) => (
              <TextInput
  key={index}
   ref={(ref) => { inputRefs.current[index] = ref }}
  value={digit}
  onChangeText={(value) => handleOtpChange(value, index)}
  onKeyPress={(e) => handleKeyPress(e, index)}
  keyboardType="number-pad"
  maxLength={1}
  className="w-16 h-16  border-2 rounded-xl text-center text-2xl font-bold text-gray-800"
  style={{
    borderColor: digit ? "#F97316" : "#E5E7EB",
  }}
/>
            ))}
          </View>

          {/* Timer and Resend */}
          <View className="items-center mb-8">
            {!canResend ? (
              <Text className="text-gray-500 text-sm">
                Resend OTP in{" "}
                <Text className="text-orange-500 font-semibold">
                  00:{timer.toString().padStart(2, "0")}
                </Text>
              </Text>
            ) : (
              <TouchableOpacity onPress={handleResendOTP}>
                <Text className="text-orange-500 font-semibold text-sm">
                  Resend OTP
                </Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Verify Button with Gradient */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleVerify}
            className="rounded-xl overflow-hidden mb-6 shadow-sm"
          >
            <LinearGradient
              colors={["#FF6B35", "#FF8C42", "#FFA726"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              className="py-4 items-center"
            >
              <Text className="text-white font-bold text-base">Verify OTP</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Change Number */}
          <TouchableOpacity className="items-center">
            <Text className="text-gray-500 text-sm">
              Wrong number?
              <Text onPress={()=> router.push("/auth")} className="text-orange-500 font-semibold">
                Change Number
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}