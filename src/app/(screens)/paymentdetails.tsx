import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, ScrollView, TextInput, StatusBar } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, Download, TrendingUp, TrendingDown, Wallet } from 'lucide-react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function PaymentDetails() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const router = useRouter();

  const filters = ['All', 'Credits', 'Debits', 'Pending'];

type Transaction = {
  id: number;
  type: "credit" | "debit" | "pending";
  title: string;
  description: string;
  date: string;
  time: string;
  amount: number;
  status: "completed" | "pending" | "failed";
  icon: keyof typeof Ionicons.glyphMap; // ✅ Strictly typed to valid Ionicons names
  iconBg: string;
  iconColor: string;
  paymentMethod: string;
};

  const transactions:Transaction[] = [
    {
      id: 1,
      type: 'credit',
      title: 'Money Added',
      description: 'Added via UPI',
      date: 'Oct 3, 2025',
      time: '3:45 PM',
      amount: 500,
      status: 'completed',
      icon: 'add-circle',
      iconBg: 'bg-emerald-100',
      iconColor: '#10B981',
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
      icon: 'restaurant',
      iconBg: 'bg-orange-100',
      iconColor: '#F97316',
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
      icon: 'fast-food',
      iconBg: 'bg-orange-100',
      iconColor: '#F97316',
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
      icon: 'gift',
      iconBg: 'bg-emerald-100',
      iconColor: '#10B981',
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
      icon: 'restaurant',
      iconBg: 'bg-orange-100',
      iconColor: '#F97316',
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
      icon: 'card',
      iconBg: 'bg-emerald-100',
      iconColor: '#10B981',
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
      icon: 'pizza',
      iconBg: 'bg-orange-100',
      iconColor: '#F97316',
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
      icon: 'time',
      iconBg: 'bg-amber-100',
      iconColor: '#F59E0B',
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

  const totalCredits = transactions
    .filter(t => t.type === 'credit')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalDebits = Math.abs(transactions
    .filter(t => t.type === 'debit')
    .reduce((sum, t) => sum + t.amount, 0));

  const walletBalance = totalCredits - totalDebits;

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="light-content" backgroundColor="#F97316" />

      {/* Modern Header with Gradient */}
      <LinearGradient
        colors={['#F97316', '#EA580C']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="pb-6"
      >
        {/* Header Top Bar */}
        <View className="px-5 pt-4 pb-4 flex-row items-center justify-between">
          <View className="flex-row items-center flex-1">
            <TouchableOpacity 
              onPress={() => router.back()} 
              className="p-2 bg-white/20 rounded-2xl mr-4 active:bg-white/30"
            >
              <ArrowLeft size={22} color="#FFFFFF" />
            </TouchableOpacity>
            <View>
              <Text className="text-2xl font-bold text-white">Payment History</Text>
              <Text className="text-orange-100 text-sm mt-0.5">All transactions</Text>
            </View>
          </View>
          <TouchableOpacity className="p-2.5 bg-white/20 rounded-2xl active:bg-white/30">
            <Download size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

     
      </LinearGradient>


      {/* Filter Tabs */}
      <View className="bg-white border-b border-gray-200">
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="px-5 py-4"
          contentContainerStyle={{ gap: 10 }}
        >
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter}
              onPress={() => setActiveFilter(filter)}
              activeOpacity={0.7}
            >
              {activeFilter === filter ? (
                <LinearGradient
                  colors={['#F97316', '#EA580C']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  className="px-6 py-2.5"
                  style={{
                    shadowColor: '#F97316',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    borderRadius:16,
                    elevation: 6,
                  }}
                >
                  <Text className="text-white text-sm font-bold">{filter}</Text>
                </LinearGradient>
              ) : (
                <View className="px-6 py-2.5 rounded-2xl bg-gray-100">
                  <Text className="text-gray-600 text-sm font-semibold">{filter}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Transactions List */}
      <ScrollView 
        className="flex-1" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 24 }}
      >
        <Text className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider">
          {filteredTransactions.length} Transactions
        </Text>
        
        {filteredTransactions.map((transaction, index) => (
          <TouchableOpacity 
            key={transaction.id}
            className="bg-white rounded-3xl p-4 mb-3 border border-gray-100"
            activeOpacity={0.7}
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05,
              shadowRadius: 8,
              elevation: 2,
            }}
          >
            <View className="flex-row items-center">
              {/* Icon */}
              <View className={`${transaction.iconBg} rounded-2xl p-3.5 mr-4`}>
                <Ionicons name={transaction.icon} size={24} color={transaction.iconColor} />
              </View>

              {/* Transaction Details */}
              <View className="flex-1">
                <View className="flex-row items-center justify-between mb-1">
                  <Text className="text-gray-900 font-bold text-base flex-1" numberOfLines={1}>
                    {transaction.title}
                  </Text>
                  <Text 
                    className={`font-bold text-lg ml-2 ${
                      transaction.type === 'credit' ? 'text-emerald-600' : 
                      transaction.status === 'pending' ? 'text-amber-600' : 
                      'text-red-600'
                    }`}
                  >
                    {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount)}
                  </Text>
                </View>

                <Text className="text-gray-600 text-sm mb-1.5" numberOfLines={1}>
                  {transaction.description}
                </Text>

                <View className="flex-row items-center justify-between">
                  <Text className="text-gray-400 text-xs">
                    {transaction.date} • {transaction.time}
                  </Text>
                  {transaction.status === 'pending' && (
                    <View className="bg-amber-100 px-2.5 py-1 rounded-full">
                      <Text className="text-amber-700 text-xs font-bold">Pending</Text>
                    </View>
                  )}
                </View>

                {/* Payment Method */}
                <View className="mt-2.5 pt-2.5 border-t border-gray-100">
                  <View className="flex-row items-center">
                    <Ionicons name="card-outline" size={12} color="#9CA3AF" />
                    <Text className="text-gray-500 text-xs ml-1.5 flex-1" numberOfLines={1}>
                      {transaction.paymentMethod}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        {filteredTransactions.length === 0 && (
          <View className="items-center justify-center py-20 mt-10">
            <View className="bg-gray-100 p-8 rounded-full mb-4">
              <Ionicons name="receipt-outline" size={64} color="#9CA3AF" />
            </View>
            <Text className="text-gray-700 text-lg font-bold mb-2">
              No transactions found
            </Text>
            <Text className="text-gray-500 text-sm">
              Try adjusting your filters
            </Text>
          </View>
        )}
      </ScrollView>

    </SafeAreaView>
  );
}