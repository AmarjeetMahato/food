import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

  const plans = [
    {
      id: 1,
      name: 'Weekly Basic',
      duration: '7 days',
      price: '₹1200',
      originalPrice: '₹1400',
      savings: 'Save ₹200',
      mealsIncluded: '14 meals included',
      features: [
        { icon: 'restaurant-outline', text: 'Lunch & Dinner' },
        { icon: 'calendar-outline', text: '2 Free Meal Skips' },
        { icon: 'list-outline', text: 'Basic Menu Options' },
      ],
      color: 'from-blue-400 to-blue-600',
      badge: null,
    },
     {
      id: 2,
      name: 'Student Special',
      duration: '15 days',
      price: '₹2100',
      originalPrice: '₹2400',
      savings: 'Save ₹300',
      mealsIncluded: '30 meals included',
      features: [
        { icon: 'restaurant-outline', text: 'Lunch & Dinner' },
        { icon: 'calendar-outline', text: '3 Free Meal Skips' },
        { icon: 'school-outline', text: 'Student-Friendly Menu' },
        { icon: 'wallet-outline', text: 'Budget-Friendly Pricing' },
        { icon: 'book-outline', text: 'Exam Period Flexibility' },
      ],
      color: 'from-green-400 to-teal-600',
      badge: 'Student Offer',
    },
    {
      id: 3,
      name: 'Monthly Premium',
      duration: '30 days',
      price: '₹4500',
      originalPrice: '₹5400',
      savings: 'Save ₹900',
      mealsIncluded: '60 meals included',
      features: [
        { icon: 'sunny-outline', text: 'All Meals (Breakfast, Lunch, Dinner)' },
        { icon: 'calendar-outline', text: '5 Free Meal Skips' },
        { icon: 'star-outline', text: 'Premium Menu Options' },
        { icon: 'headset-outline', text: 'Priority Support' },
        { icon: 'car-outline', text: 'Free Delivery' },
        { icon: 'nutrition-outline', text: 'Nutritional Information' },
      ],
      color: 'from-purple-400 to-purple-600',
      badge: 'Most Popular',
    },
    {
      id: 4,
      name: 'Custom Plan',
      duration: 'Flexible',
      price: 'Custom',
      originalPrice: null,
      savings: 'Up to 30% Off',
      mealsIncluded: 'Choose meals',
      features: [
        { icon: 'time-outline', text: 'Choose Your Duration' },
        { icon: 'options-outline', text: 'Select Meal Times' },
        { icon: 'infinite-outline', text: 'Unlimited Skips' },
        { icon: 'apps-outline', text: 'All Menu Options' },
        { icon: 'people-outline', text: 'Dedicated Support' },
        { icon: 'calendar-number-outline', text: 'Flexible Scheduling' },
      ],
      color: 'from-orange-400 to-red-500',
      badge: 'Best Value',
    },
  ];

const SubscriptionsCard = () => {

  return (
  
      <ScrollView       className="flex-1"
      contentContainerStyle={{ paddingTop: 0, paddingBottom: 0 }} // remove any extra padding
      showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-6 pt-6 pb-4">
          <Text className="text-3xl font-bold text-gray-900 mb-2">Subscription Plans</Text>
          <Text className="text-gray-600 text-base">Choose the perfect plan for your lifestyle</Text>
        </View>

        {/* Plans */}
        <View className="px-4">
          {plans.map((plan, index) => (
            <View
              key={plan.id}
              className={`bg-white rounded-3xl shadow-lg mb-6 overflow-hidden ${
                plan.badge ? 'border-2 border-orange-400' : ''
              }`}
            >
              {/* Badge */}
              {/* {plan.badge && (
                <View className="bg-gradient-to-r from-orange-400 to-red-500 py-2">
                  <Text className="text-white text-center font-bold text-sm uppercase tracking-wide">
                    ⭐ ⭐ ⭐ ⭐ ⭐  {plan.badge}
                  </Text>
                </View>
              )} */}

              <View className="p-6 ">
                {/* Plan Header */}
                <View className="mb-4 flex items-center">
                  <Text className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</Text>
                  <View className="flex-row items-center gap-2">
                    <Ionicons name="time-outline" size={16} color="#6b7280" />
                    <Text className="text-gray-600 text-sm">{plan.duration}</Text>
                  </View>
                </View>

                {/* Pricing */}
                <View className="bg-gray-50 rounded-2xl p-4 mb-4">
                  <View className="flex-row items-end gap-2 mb-2">
                    <Text className="text-4xl font-bold text-orange-500">{plan.price}</Text>
                    {plan.originalPrice && (
                      <Text className="text-lg text-gray-400 line-through mb-1">
                        {plan.originalPrice}
                      </Text>
                    )}
                  </View>
                  <View className="bg-green-100 self-start px-3 py-1 rounded-full mb-2">
                    <Text className="text-green-700 font-semibold text-xs">{plan.savings}</Text>
                  </View>
                  <View className="flex-row items-center gap-1">
                    <Ionicons name="fast-food-outline" size={16} color="#6b7280" />
                    <Text className="text-gray-600 text-sm font-medium">{plan.mealsIncluded}</Text>
                  </View>
                </View>

                {/* Features */}
                <View className="mb-5">
                  <Text className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">
                    Features
                  </Text>
                  {plan.features.map((feature, idx) => (
                    <View key={idx} className="flex-row items-center gap-3 mb-3">
                      <View className="w-8 h-8 bg-orange-100 rounded-full items-center justify-center">
                        <Ionicons name={feature.icon as any} size={16} color="#ea580c" />
                      </View>
                      <Text className="text-gray-700 text-sm flex-1">{feature.text}</Text>
                    </View>
                  ))}
                </View>

                   {/* Subscribe Button with Gradient and Centered Text */}
            <View >
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => console.log(`Subscribing to ${plan.name}`)}
                    className="w-full" // ensures TouchableOpacity uses full width of parent View
                >
                    {/* LinearGradient for orange color gradient */}
                    <LinearGradient
                        colors={['#fb923c', '#ea580c']} // Tailwind's orange-400 to orange-700 approx.
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        className="py-4  rounded-xl  shadow-md "
                    >
                        <Text className="text-white text-center font-bold text-lg ">
                            {plan.price === 'Custom' ? 'Create Your Plan' : 'Subscribe Now'}
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
              </View>
            </View>
          ))}
        </View>

        {/* Footer Note */}
        <View className="mx-6 mt-4 bg-blue-50 rounded-2xl p-4">
          <View className="flex-row items-start gap-3">
            <Ionicons name="information-circle-outline" size={24} color="#3b82f6" />
            <View className="flex-1">
              <Text className="text-blue-900 font-semibold mb-1">Flexible Plans</Text>
              <Text className="text-blue-700 text-sm leading-relaxed">
                All plans can be paused or cancelled anytime. No hidden charges. Pay only for what
                you use.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

  );
};

export default SubscriptionsCard;