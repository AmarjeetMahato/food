import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

interface Meal {
  type: string;
  menu: string;
  time: string;
}

interface UpcomingMeal {
  date: string;
  day: string;
  meals: Meal[];
}

interface Subscription {
  plan: string;
  expiryDate: string;
  remainingMeals: number;
}

const SubscriptionScreen = () => {
  const [activeTab, setActiveTab] = useState('subscription');
  const [currentSubscription, setCurrentSubscription] = useState<Subscription | null>({
    plan: 'Premium Monthly',
    expiryDate: 'Feb 15, 2025',
    remainingMeals: 18
  });

  const upcomingMeals: UpcomingMeal[] = [
    {
      date: '2024-01-16',
      day: 'Today',
      meals: [
        { type: 'Lunch', menu: 'Dal Rice, Aloo Sabzi, Roti, Pickle', time: '12:00-2:00 PM' },
        { type: 'Dinner', menu: 'Rajma, Jeera Rice, Chapati, Salad', time: '7:00-9:00 PM' }
      ]
    },
    {
      date: '2024-01-17',
      day: 'Tomorrow',
      meals: [
        { type: 'Lunch', menu: 'Chole Bhature, Lassi, Pickle', time: '12:00-2:00 PM' },
        { type: 'Dinner', menu: 'Mixed Dal, Rice, Sabzi, Roti', time: '7:00-9:00 PM' }
      ]
    },
    {
      date: '2024-01-18',
      day: 'Thursday',
      meals: [
        { type: 'Lunch', menu: 'Biryani, Raita, Boiled Egg', time: '12:00-2:00 PM' },
        { type: 'Dinner', menu: 'Palak Paneer, Rice, Naan', time: '7:00-9:00 PM' }
      ]
    }
  ];

  const handlePauseSubscription = () => {
    Alert.alert(
      'Pause Subscription',
      'Are you sure you want to pause your subscription?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Pause', onPress: () => console.log('Subscription paused') }
      ]
    );
  };

  const handleSkipMeal = (date: string, mealType: string) => {
    Alert.alert(
      'Skip Meal',
      `Skip ${mealType} on ${date}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Skip',
          style: 'destructive',
          onPress: () => console.log(`Skipped ${mealType} on ${date}`)
        }
      ]
    );
  };

  // Calculate total meals
  const totalUpcomingMeals = upcomingMeals.reduce((acc, day) => acc + day.meals.length, 0);

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="p-3 gap-y-6">
          {currentSubscription ? (
            <>
              {/* Current Subscription Card */}
              <LinearGradient
                colors={['#f97316', '#ea580c', '#dc2626']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  borderRadius: 24,
                  padding: 32,
                  shadowColor: '#f97316',
                  shadowOffset: { width: 0, height: 8 },
                  shadowOpacity: 0.3,
                  shadowRadius: 12,
                  elevation: 8
                }}
              >
                <View className="flex-row justify-between items-start mb-6">
                  <View className="flex-1">
                    <Text className="text-white text-2xl font-bold mb-2">
                      {currentSubscription.plan}
                    </Text>
                    <Text className="text-white text-sm opacity-90">
                      Active until {currentSubscription.expiryDate}
                    </Text>
                  </View>
                  <View className="items-end ml-4">
                    <Text className="text-white text-4xl font-bold">
                      {currentSubscription.remainingMeals}
                    </Text>
                    <Text className="text-white text-xs opacity-90 mt-1">
                      meals remaining
                    </Text>
                  </View>
                </View>

                <View className="flex-row gap-x-3">
                  <TouchableOpacity
                    onPress={handlePauseSubscription}
                    className="flex-1 bg-white bg-opacity-20 rounded-xl py-3 flex-row items-center justify-center"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  >
                    <Ionicons name="pause" size={16} color="white" />
                    <Text className="text-white font-semibold ml-2">Pause Plan</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="flex-1 bg-white bg-opacity-20 rounded-xl py-3 flex-row items-center justify-center"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  >
                    <Ionicons name="settings-outline" size={16} color="white" />
                    <Text className="text-white font-semibold ml-2">Manage</Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>

              {/* Upcoming Meals */}
              <View className="bg-white rounded-2xl shadow-sm p-4">
                {/* Header with decorative elements */}
                <View className="mb-6">
                  {/* Top row with icon and badge */}
                  <View className="flex-row items-center justify-between mb-3">
                    <View className="flex-row items-center flex-1">
                      {/* Gradient Icon Container */}
                      <LinearGradient
                        colors={['#f97316', '#ea580c']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{
                          borderRadius: 16,
                          padding: 12,
                          marginRight: 12
                        }}
                      >
                        <Ionicons name="restaurant" size={24} color="white" />
                      </LinearGradient>
                      
                      {/* Title */}
                      <View className="flex-1">
                        <Text className="text-2xl font-bold text-gray-800">
                          Upcoming Meals
                        </Text>
                        <Text className="text-gray-500 text-xs mt-1">
                          {totalUpcomingMeals} meals • {upcomingMeals.length} days
                        </Text>
                      </View>
                    </View>

                    {/* Badge */}
                    <LinearGradient
                      colors={['#fed7aa', '#fdba74']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={{
                        borderRadius: 20,
                        paddingHorizontal: 12,
                        paddingVertical: 6
                      }}
                    >
                      <View className="flex-row items-center">
                        <Ionicons name="calendar" size={12} color="#ea580c" />
                        <Text className="text-orange-600 text-xs font-bold ml-1">
                          {upcomingMeals.length} days
                        </Text>
                      </View>
                    </LinearGradient>
                  </View>

                  {/* Decorative divider */}
                  <View className="h-px bg-orange-200" style={{ height: 1 }} />
                </View>

                {/* Meals List */}
                <View className="gap-y-4">
                  {upcomingMeals.map((day, index) => (
                    <View
                      key={index}
                      className="border border-gray-200 rounded-2xl p-3 bg-gray-50"
                    >
                      <View className="flex-row justify-between items-center mb-4">
                        <View>
                          <Text className="text-lg font-bold text-gray-800">{day.day}</Text>
                          <Text className="text-gray-500 text-sm mt-1">{day.date}</Text>
                        </View>
                        <View className="bg-orange-100 px-3 py-1 rounded-full">
                          <Text className="text-orange-600 text-xs font-bold">
                            {day.meals.length} meals
                          </Text>
                        </View>
                      </View>

                      <View className="space-y-3">
                        {day.meals.map((meal, mealIndex) => (
                          <View
                            key={mealIndex}
                            className="bg-white rounded-xl p-4 border border-gray-100"
                          >
                            <View className="flex-row justify-between items-start mb-3">
                              <View className="flex-row items-center">
                                <View className="bg-orange-100 rounded-full p-2 mr-3">
                                  <Ionicons
                                    name={meal.type === 'Lunch' ? 'sunny' : 'moon'}
                                    size={16}
                                    color="#ea580c"
                                  />
                                </View>
                                <Text className="font-bold text-orange-600 text-base">
                                  {meal.type}
                                </Text>
                              </View>
                              <TouchableOpacity
                                onPress={() => handleSkipMeal(day.date, meal.type)}
                                className="bg-red-50 px-3 py-1 rounded-lg"
                              >
                                <Text className="text-red-600 text-xs font-bold">Skip</Text>
                              </TouchableOpacity>
                            </View>
                            <Text className="text-gray-700 text-sm leading-5 mb-2">
                              {meal.menu}
                            </Text>
                            <View className="flex-row items-center mt-2">
                              <Ionicons name="time-outline" size={14} color="#9CA3AF" />
                              <Text className="text-gray-400 text-xs ml-1">{meal.time}</Text>
                            </View>
                          </View>
                        ))}
                      </View>
                    </View>
                  ))}
                </View>

                {/* Notice Banner */}
                <View className="mt-6 bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                  <View className="flex-row items-start">
                    <Ionicons name="time" size={18} color="#CA8A04" />
                    <Text className="text-yellow-700 text-xs ml-2 flex-1 leading-5">
                      Meal skip requests must be made before 8:00 AM on the day of delivery.
                    </Text>
                  </View>
                </View>
              </View>
            </>
          ) : (
            /* No Subscription State */
            <View className="items-center justify-center py-20">
              <View className="bg-gray-100 rounded-full p-6 mb-6">
                <Ionicons name="calendar-outline" size={64} color="#9CA3AF" />
              </View>
              <Text className="text-2xl font-bold text-gray-800 mb-3 text-center">
                No Active Subscription
              </Text>
              <Text className="text-gray-500 text-center mb-8 px-8 leading-6">
                Choose a meal plan to start enjoying delicious, homestyle meals.
              </Text>
              <TouchableOpacity
                onPress={() => setActiveTab('plans')}
                className="bg-orange-500 px-8 py-4 rounded-xl"
              >
                <Text className="text-white font-bold text-base">Browse Plans</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubscriptionScreen;