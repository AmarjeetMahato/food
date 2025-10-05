import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';

export default function PaymentDetails() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['All', 'Credits', 'Debits', 'Pending'];

  const transactions = [
    {
      id: 1,
      type: 'credit',
      title: 'Money Added',
      description: 'Added via UPI',
      date: 'Oct 3, 2025',
      time: '3:45 PM',
      amount: 500,
      status: 'completed',
      icon: '✅',
      iconBg: 'bg-green-100',
      paymentMethod: 'UPI - Google Pay'
    },
    {
      id: 2,
      type: 'debit',
      title: 'Pizza Paradise',
      description: 'Order #12458',
      date: 'Oct 2, 2025',
      time: '7:30 PM',
      amount: -450,
      status: 'completed',
      icon: '🍕',
      iconBg: 'bg-red-100',
      paymentMethod: 'Wallet'
    },
    {
      id: 3,
      type: 'debit',
      title: 'Burger House',
      description: 'Order #12441',
      date: 'Sep 28, 2025',
      time: '8:15 PM',
      amount: -380,
      status: 'completed',
      icon: '🍔',
      iconBg: 'bg-red-100',
      paymentMethod: 'Wallet'
    },
    {
      id: 4,
      type: 'credit',
      title: 'Cashback Received',
      description: 'Order #12441',
      date: 'Sep 28, 2025',
      time: '8:20 PM',
      amount: 50,
      status: 'completed',
      icon: '🎁',
      iconBg: 'bg-green-100',
      paymentMethod: 'Cashback'
    },
    {
      id: 5,
      type: 'debit',
      title: 'Spice Kitchen',
      description: 'Order #12398',
      date: 'Sep 25, 2025',
      time: '9:00 PM',
      amount: -520,
      status: 'completed',
      icon: '🍛',
      iconBg: 'bg-red-100',
      paymentMethod: 'Wallet'
    },
    {
      id: 6,
      type: 'credit',
      title: 'Money Added',
      description: 'Added via Card',
      date: 'Sep 24, 2025',
      time: '2:15 PM',
      amount: 1000,
      status: 'completed',
      icon: '✅',
      iconBg: 'bg-green-100',
      paymentMethod: 'Credit Card •••• 4523'
    },
    {
      id: 7,
      type: 'debit',
      title: 'Tandoor Nights',
      description: 'Order #12356',
      date: 'Sep 22, 2025',
      time: '8:45 PM',
      amount: -420,
      status: 'completed',
      icon: '🍗',
      iconBg: 'bg-red-100',
      paymentMethod: 'Wallet'
    },
    {
      id: 8,
      type: 'pending',
      title: 'Refund Processing',
      description: 'Order #12340',
      date: 'Sep 20, 2025',
      time: '6:30 PM',
      amount: 250,
      status: 'pending',
      icon: '⏳',
      iconBg: 'bg-yellow-100',
      paymentMethod: 'Wallet Refund'
    }
  ];

  const filteredTransactions = transactions.filter(transaction => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Credits') return transaction.type === 'credit';
    if (activeFilter === 'Debits') return transaction.type === 'debit';
    if (activeFilter === 'Pending') return transaction.status === 'pending';
    return true;
  });

  return (
    <SafeAreaView edges={["bottom"]} className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="px-6 pt-4 pb-3 bg-white border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-800 mb-4">Payment History</Text>
        
        {/* Search Bar */}
        <View className="bg-gray-100 rounded-xl px-4 py-3 flex-row items-center mb-4">
          <Text className="text-gray-400 mr-2">🔍</Text>
          <TextInput
            placeholder="Search transactions..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            className="flex-1 text-gray-800"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Filter Tabs */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 16 }}
        >
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter}
              onPress={() => setActiveFilter(filter)}
              className="mr-3"
            >
              {activeFilter === filter ? (
                <LinearGradient
                  colors={['#f97316', '#ea580c']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 8,
                    borderRadius: 9999
                  }}
                >
                  <Text className="text-white text-sm font-bold">{filter}</Text>
                </LinearGradient>
              ) : (
                <View className="px-5 py-2 rounded-full bg-gray-200">
                  <Text className="text-gray-600 text-sm font-semibold">{filter}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Summary Cards */}
      <View className="px-6 py-4 flex-row justify-between">
        <View className="bg-white rounded-xl p-4 flex-1 mr-2 border border-gray-100">
          <Text className="text-gray-500 text-xs mb-1">Total Credits</Text>
          <Text className="text-green-600 text-xl font-bold">₹1,550</Text>
        </View>
        <View className="bg-white rounded-xl p-4 flex-1 ml-2 border border-gray-100">
          <Text className="text-gray-500 text-xs mb-1">Total Debits</Text>
          <Text className="text-red-600 text-xl font-bold">₹1,770</Text>
        </View>
      </View>

      {/* Transactions List */}
      <ScrollView className="flex-1 px-6">
        <Text className="text-sm font-semibold text-gray-500 mb-3">
          {filteredTransactions.length} Transactions
        </Text>
        
        {filteredTransactions.map((transaction) => (
          <TouchableOpacity 
            key={transaction.id}
            className="bg-white rounded-xl p-4 mb-3 border border-gray-100"
          >
            <View className="flex-row justify-between items-start mb-3">
              <View className="flex-row items-start flex-1">
                <View className={`${transaction.iconBg} rounded-full p-3 mr-3`}>
                  <Text className="text-lg">{transaction.icon}</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-gray-800 font-semibold text-sm mb-1">
                    {transaction.title}
                  </Text>
                  <Text className="text-gray-500 text-xs mb-1">
                    {transaction.description}
                  </Text>
                  <Text className="text-gray-400 text-xs">
                    {transaction.date} • {transaction.time}
                  </Text>
                </View>
              </View>
              <View className="items-end ml-2">
                <Text 
                  className={`font-bold text-base mb-1 ${
                    transaction.type === 'credit' ? 'text-green-600' : 
                    transaction.status === 'pending' ? 'text-yellow-600' : 
                    'text-red-600'
                  }`}
                >
                  {transaction.amount > 0 ? '+' : ''} ₹{Math.abs(transaction.amount)}
                </Text>
                {transaction.status === 'pending' && (
                  <View className="bg-yellow-100 px-2 py-1 rounded-full">
                    <Text className="text-yellow-700 text-xs font-semibold">Pending</Text>
                  </View>
                )}
              </View>
            </View>

            {/* Payment Method */}
            <View className="border-t border-gray-100 pt-3">
              <View className="flex-row items-center justify-between">
                <Text className="text-gray-500 text-xs">Payment Method</Text>
                <Text className="text-gray-700 text-xs font-semibold">
                  {transaction.paymentMethod}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        {filteredTransactions.length === 0 && (
          <View className="items-center justify-center py-20">
            <Text className="text-6xl mb-4">📭</Text>
            <Text className="text-gray-500 text-base">No transactions found</Text>
          </View>
        )}
      </ScrollView>

      {/* Download Statement Button */}
      <View className="px-6 py-4 bg-white border-t border-gray-200">
        <TouchableOpacity className="bg-orange-500 rounded-xl py-4">
          <Text className="text-white text-center text-base font-bold">
            📄 Download Statement
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}