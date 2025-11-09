import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import MealDetailModal from '../app/(screens)/messfooddetails';
import { router } from 'expo-router';

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
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

  const [activeTab, setActiveTab] = useState('subscription');
  const [currentSubscription, setCurrentSubscription] = useState<Subscription | null>({
    plan: 'Premium Monthly',
    expiryDate: 'Feb 15, 2025',
    remainingMeals: 18
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };


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

    const handleViewMeal = (mealData: Meal) => {
    setSelectedMeal(mealData);
    setModalVisible(true);
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

const upcomingMeals: UpcomingMeal[] = [
  {
    date: '2024-01-16',
    day: 'Today',
    meals: [
      { 
        type: 'Breakfast', 
        menu: 'Poha, Masala Chai, Banana', 
        time: '8:00-10:00 AM' 
      },
      { 
        type: 'Lunch', 
        menu: 'Dal Rice, Aloo Sabzi, Roti, Pickle', 
        time: '12:00-2:00 PM' 
      },
      { 
        type: 'Dinner', 
        menu: 'Rajma, Jeera Rice, Chapati, Salad', 
        time: '7:00-9:00 PM' 
      }
    ]
  },
  {
    date: '2024-01-17',
    day: 'Tomorrow',
    meals: [
      { 
        type: 'Breakfast', 
        menu: 'Paratha, Curd, Pickle, Tea', 
        time: '8:00-10:00 AM' 
      },
      { 
        type: 'Lunch', 
        menu: 'Chole Bhature, Lassi, Pickle', 
        time: '12:00-2:00 PM' 
      },
      { 
        type: 'Dinner', 
        menu: 'Mixed Dal, Rice, Sabzi, Roti', 
        time: '7:00-9:00 PM' 
      }
    ]
  },
  {
    date: '2024-01-18',
    day: 'Thursday',
    meals: [
      { 
        type: 'Breakfast', 
        menu: 'Idli Sambar, Coconut Chutney, Coffee', 
        time: '8:00-10:00 AM' 
      },
      { 
        type: 'Lunch', 
        menu: 'Biryani, Raita, Boiled Egg', 
        time: '12:00-2:00 PM' 
      },
      { 
        type: 'Dinner', 
        menu: 'Palak Paneer, Rice, Naan', 
        time: '7:00-9:00 PM' 
      }
    ]
  }
];

   const totalMeals = upcomingMeals.reduce(
    (acc, day) => acc + day.meals.length,
    0
  );

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
                          {totalMeals} meals • {upcomingMeals.length} days
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
              <View className="gap-y-3">
   {upcomingMeals.map((day, dayIndex) => (
        <View key={dayIndex} className="gap-y-3">
          {/* Optional: Day Header */}
          <Text className="text-gray-500 font-semibold mb-2">{day.day}</Text>

          {day.meals.map((meal, mealIndex) => (
            <View
              key={mealIndex}
              className="bg-white rounded-xl   overflow-hidden border border-gray-100 shadow-sm"
            >
              {/* Header Section */}
              <View className="bg-gradient-to-r from-orange-50 to-amber-50 px-4 py-3 flex-row justify-between items-center">
                <View className="flex-row items-center">
                  <View
                    className={`${
                      meal.type === 'Breakfast'
                        ? 'bg-yellow-100'
                        : meal.type === 'Lunch'
                        ? 'bg-orange-100'
                        : 'bg-indigo-100'
                    } rounded-full p-2.5 mr-3`}
                  >
                    <Ionicons
                      name={
                        meal.type === 'Breakfast'
                          ? 'cafe'
                          : meal.type === 'Lunch'
                          ? 'sunny'
                          : 'moon'
                      }
                      size={18}
                      color={
                        meal.type === 'Breakfast'
                          ? '#f59e0b'
                          : meal.type === 'Lunch'
                          ? '#ea580c'
                          : '#6366f1'
                      }
                    />
                  </View>
                  <View>
                    <Text className="font-bold text-gray-800 text-base">
                      {meal.type}
                    </Text>
                    <View className="flex-row items-center mt-0.5">
                      <Ionicons name="time-outline" size={12} color="#9CA3AF" />
                      <Text className="text-gray-400 text-xs ml-1">{meal.time}</Text>
                    </View>
                  </View>
                </View>

                <View className="flex-row gap-x-2">
                  <TouchableOpacity
                    onPress={() => router.push("/mealsdetails")}
                    className="bg-white px-4 py-2 rounded-lg border border-green-200 shadow-sm"
                  >
                    <View className="flex-row items-center">
                      <Ionicons name="eye-outline" size={14} color="#16a34a" />
                      <Text className="text-green-600 text-xs font-semibold ml-1">
                        View
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => handleSkipMeal(day.date, meal.type.toLowerCase())}
                    className="bg-white px-4 py-2 rounded-lg border border-red-200 shadow-sm"
                  >
                    <View className="flex-row items-center">
                      <Ionicons name="close-circle-outline" size={14} color="#dc2626" />
                      <Text className="text-red-600 text-xs font-semibold ml-1">
                        Skip
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Menu Content */}
              <View className="px-4 py-3">
                <View className="flex-row items-start">
                  <Ionicons
                    name="restaurant-outline"
                    size={16}
                    color="#f97316"
                    className="mt-0.5"
                  />
                  <Text className="text-gray-700 text-sm leading-5 ml-2 flex-1">
                    {meal.menu}
                  </Text>
                </View>

                <View className="flex-row gap-x-2 mt-3">
                  <View className="bg-green-50 px-2 py-1 rounded-full">
                    <Text className="text-green-700 text-xs font-medium">🌾 Veg</Text>
                  </View>
                  <View className="bg-blue-50 px-2 py-1 rounded-full">
                    <Text className="text-blue-700 text-xs font-medium">⚡ 450 kcal</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      ))}
  
  {/* Modal (move outside the map for better performance) */}
  {selectedMeal && (
    <MealDetailModal
      isVisible={isModalVisible}
      onClose={() => setModalVisible(false)}
      meal={selectedMeal}
    />
  )}
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