// Option 1: Modern Bubble Chat with Gradient Header
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter

 } from 'expo-router';
interface Message {
  id: number;
  text: string;
  sender: 'user' | 'support';
  timestamp: string;
}

export default function ChatOption1() {
    const insets = useSafeAreaInsets();
    const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Hi! How can I help you today?', sender: 'support', timestamp: '10:30 AM' },
    { id: 2, text: 'I have a question about my order', sender: 'user', timestamp: '10:31 AM' },
    { id: 3, text: 'Sure! I\'d be happy to help. What\'s your order number?', sender: 'support', timestamp: '10:31 AM' },
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputText,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <LinearGradient
        colors={['#f97316', '#ea580c']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ paddingHorizontal: 16, paddingVertical: 16 }}
      >
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center flex-1">
            <TouchableOpacity className="mr-3">
              <Ionicons onPress={()=> router.back()} name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <View className="flex-row items-center flex-1">
              <View className="w-10 h-10 bg-white rounded-full items-center justify-center mr-3">
                <Ionicons name="headset" size={20} color="#ea580c" />
              </View>
              <View>
                <Text className="text-white font-bold text-lg">Support Team</Text>
                <View className="flex-row items-center">
                  <View className="w-2 h-2 bg-green-400 rounded-full mr-1" />
                  <Text className="text-white text-xs opacity-90">Online</Text>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <Ionicons name="call" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Messages */}
      <ScrollView className="flex-1 px-4 py-4">
        {messages.map((message) => (
          <View
            key={message.id}
            className={`mb-4 ${message.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <View
              className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                message.sender === 'user'
                  ? 'bg-orange-500 rounded-tr-none'
                  : 'bg-white rounded-tl-none border border-gray-200'
              }`}
            >
              <Text
                className={`text-base ${
                  message.sender === 'user' ? 'text-white' : 'text-gray-800'
                }`}
              >
                {message.text}
              </Text>
            </View>
            <Text className="text-xs text-gray-400 mt-1 px-2">{message.timestamp}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Input */}
 <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0} // adjust for header
      className="bg-white" // ✅ no flex-1
    >
      <View
        className="border-t border-gray-200 px-4 py-3 bg-white"
        style={{ paddingBottom: insets.bottom || 12 }}
      >
        <View className="flex-row items-center gap-2">
          {/* Add Button */}
          <TouchableOpacity className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center">
            <Ionicons name="add" size={24} color="#6B7280" />
          </TouchableOpacity>

          {/* Text Input */}
          <View className="flex-1 bg-gray-100 rounded-full px-4 py-2 flex-row items-center">
            <TextInput
              className="flex-1 text-base text-gray-800"
              placeholder="Type a message..."
              placeholderTextColor="#9CA3AF"
              value={inputText}
              onChangeText={setInputText}
              multiline
              maxHeight={100}
            />
            <TouchableOpacity>
              <Ionicons name="happy-outline" size={22} color="#6B7280" />
            </TouchableOpacity>
          </View>

          {/* Send Button */}
          <TouchableOpacity
            onPress={sendMessage}
            className="w-10 h-10 bg-orange-500 rounded-full items-center justify-center"
          >
            <Ionicons name="send" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
}