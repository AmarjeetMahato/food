import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StatusBar, Alert, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, MapPin, MoreVertical, Share2, Clock, Truck, Receipt, XCircle, Package } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import OrderDetails from './orderdetails';
import OrderListSkeleton from '../../skeltons/OrderDetailsSkeleton';

// --- TYPE DEFINITIONS ---
interface OrderItem {
  name: string;
  quantity: number;
}

interface Order {
  id: string;
  restaurantName: string;
  restaurantLocation: string;
  totalAmount: number;
  orderTime: string;
  deliveryStatus: 'Delivered' | 'On the Way' | 'Preparing' | 'Cancelled';
  items: OrderItem[];
  imageUri: string;
}

// --- MOCK DATA ---
const formatOrderTime = (orderTime: string) => {
  const isoTime = orderTime.replace(', ', 'T');
  const date = new Date(isoTime);
  return date.toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).replace(',', '');
};

const mockOrders: Order[] = [
  {
    id: 'ZOM001',
    restaurantName: 'The Spice Grill',
    restaurantLocation: 'Sector 45, Gurgaon',
    totalAmount: 499,
    orderTime: '2025-10-04T20:30:00',
    deliveryStatus: 'Delivered',
    items: [
      { name: 'Chicken Biryani', quantity: 1 },
      { name: 'Butter Naan', quantity: 2 },
      { name: 'Coke', quantity: 1 },
    ],
    imageUri: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400',
  },
  {
    id: 'ZOM002',
    restaurantName: 'Pizza Hub',
    restaurantLocation: 'Cyber Hub, DLF Phase 2',
    totalAmount: 899,
    orderTime: '2025-10-04T20:30:00',
    deliveryStatus: 'On the Way',
    items: [
      { name: 'Farmhouse Pizza (L)', quantity: 1 },
      { name: 'Choco Lava Cake', quantity: 1 },
    ],
    imageUri: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
  },
  {
    id: 'ZOM003',
    restaurantName: 'Healthy Bowls',
    restaurantLocation: 'Huda City Centre',
    totalAmount: 320,
    orderTime: '2025-10-04T20:30:00',
    deliveryStatus: 'Preparing',
    items: [
      { name: 'Quinoa Salad', quantity: 1 },
      { name: 'Protein Shake', quantity: 1 },
    ],
    imageUri: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400',
  },
];

// --- UTILITY COMPONENTS ---
const ThreeDotsMenu: React.FC<{ order: Order }> = ({ order }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleViewDetails = () => {
    setIsOpen(false);
    router.push("/orderdetails");
  };

  const handleShareOrder = () => {
    setIsOpen(false);
    alert(`Shared order link for ${order.restaurantName}!`);
  };

  return (
    <View className="relative">
      <TouchableOpacity 
        onPress={() => setIsOpen(!isOpen)} 
        className="p-2.5 bg-orange-50 rounded-full active:bg-orange-100"
      >
        <MoreVertical size={18} color="#F97316" />
      </TouchableOpacity>
      {isOpen && (
        <View className="absolute top-12 right-0 w-44 bg-white rounded-2xl shadow-2xl z-50 border border-gray-100 overflow-hidden">
          <TouchableOpacity 
            onPress={handleViewDetails}
            className="flex-row items-center gap-x-3 px-4 py-3.5 active:bg-orange-50 border-b border-gray-100"
          >
            <View className="bg-orange-100 p-2 rounded-lg">
              <Receipt size={16} color="#F97316" /> 
            </View>
            <Text className="text-sm font-semibold text-gray-800">Order Details</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={handleShareOrder}
            className="flex-row items-center px-4 py-3.5 active:bg-orange-50 gap-x-3"
          >
            <View className="bg-orange-100 p-2 rounded-lg">
              <Share2 size={16} color="#F97316" />
            </View>
            <Text className="text-sm font-semibold text-gray-800">Share Order</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const OrderCard: React.FC<{ order: Order }> = ({ order }) => {
  const isDelivered = order.deliveryStatus === 'Delivered';
  const isCancellable = order.deliveryStatus !== 'Delivered' && order.deliveryStatus !== 'Cancelled';

  const getStatusConfig = () => {
    switch (order.deliveryStatus) {
      case 'Delivered':
        return { 
          icon: <Package size={14} color="#10B981" />, 
          textClass: 'text-emerald-600',
          bgClass: 'bg-emerald-50',
          dotClass: 'bg-emerald-500'
        };
      case 'On the Way':
        return { 
          icon: <Truck size={14} color="#F97316" />, 
          textClass: 'text-orange-600',
          bgClass: 'bg-orange-50',
          dotClass: 'bg-orange-500'
        };
      case 'Preparing':
        return { 
          icon: <Clock size={14} color="#3B82F6" />, 
          textClass: 'text-blue-600',
          bgClass: 'bg-blue-50',
          dotClass: 'bg-blue-500'
        };
      case 'Cancelled':
        return { 
          icon: <XCircle size={14} color="#EF4444" />, 
          textClass: 'text-red-600',
          bgClass: 'bg-red-50',
          dotClass: 'bg-red-500'
        };
      default:
        return { 
          icon: null, 
          textClass: 'text-gray-600',
          bgClass: 'bg-gray-50',
          dotClass: 'bg-gray-500'
        };
    }
  };
  
  const status = getStatusConfig();
  
  const ActionButton: React.FC<{ text: string; onPress: () => void; isTrack?: boolean }> = ({ text, onPress, isTrack = false }) => (
    <TouchableOpacity 
      onPress={onPress} 
      className="flex-1 rounded-2xl overflow-hidden active:opacity-90"
      style={{ elevation: isTrack ? 8 : 0 }}
    >
      <LinearGradient
        colors={isTrack ? ["#F97316", "#EA580C"] : ["#FFFFFF", "#FFFFFF"]} 
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className={`py-3.5 flex-row items-center justify-center rounded-2xl ${!isTrack ? 'border-2 border-gray-200' : ''}`}
      >
        <Text className={`font-bold text-base ${isTrack ? 'text-white' : 'text-gray-700'}`}>
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <View className="bg-white rounded-3xl shadow-lg shadow-gray-300/50 overflow-hidden mb-4 border border-gray-100">
      {/* Status Badge Ribbon */}
      <View className={`absolute top-0 right-0 ${status.bgClass} px-4 py-1.5 rounded-bl-2xl z-10 flex-row items-center gap-x-1.5`}>
        <View className={`w-1.5 h-1.5 rounded-full ${status.dotClass}`} />
        <Text className={`text-xs font-bold ${status.textClass}`}>
          {order.deliveryStatus.toUpperCase()}
        </Text>
      </View>

      <View className="p-5">
        {/* Header Section */}
        <View className="flex-row items-start mb-4">
          <View className="relative">
            <Image 
              source={{ uri: order.imageUri }} 
              className="w-16 h-16 rounded-2xl"
            />
            <View className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md">
              <View className="w-5 h-5 bg-orange-500 rounded-full items-center justify-center">
                <Text className="text-white text-xs font-bold">✓</Text>
              </View>
            </View>
          </View>
          
          <View className="flex-1 ml-4 mr-2">
            <Text className="font-bold text-lg text-gray-900 mb-1" numberOfLines={1}>
              {order.restaurantName}
            </Text>
            <View className="flex-row items-center">
              <MapPin size={12} color="#9CA3AF" />
              <Text className="text-xs text-gray-500 ml-1 flex-1" numberOfLines={1}>
                {order.restaurantLocation}
              </Text>
            </View>
            <Text className="text-xs text-gray-400 mt-1">
              Order #{order.id}
            </Text>
          </View>

          <ThreeDotsMenu order={order} />
        </View>

        {/* Items Summary Card */}
        <View className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4 mb-4">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-sm font-bold text-gray-700">
              Items Ordered
            </Text>
            <View className="bg-white px-2.5 py-1 rounded-full">
              <Text className="text-xs font-bold text-orange-600">
                {order.items.length} items
              </Text>
            </View>
          </View>
          <Text className="text-sm text-gray-600 leading-5">
            {order.items.map(item => `${item.quantity}x ${item.name}`).join(' • ')}
          </Text>
        </View>

        {/* Order Info Grid */}
        <View className="flex-row bg-gray-50 rounded-2xl p-4 mb-4">
          <View className="flex-1">
            <Text className="text-xs text-gray-500 mb-1 font-medium">Total Amount</Text>
            <Text className="text-lg font-bold text-gray-900">
              ₹{order.totalAmount}
            </Text>
          </View>
          <View className="w-px bg-gray-200 mx-3" />
          <View className="flex-1">
            <Text className="text-xs text-gray-500 mb-1 font-medium">Order Time</Text>
            <Text className="text-sm font-semibold text-gray-800">
              {formatOrderTime(order.orderTime).split(' ').slice(0, 2).join(' ')}
            </Text>
            <Text className="text-xs text-gray-500">
              {formatOrderTime(order.orderTime).split(' ').slice(2).join(' ')}
            </Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View className="flex-row gap-x-3">
          {isCancellable && (
            <TouchableOpacity 
              onPress={() => Alert.alert(`Cancel Order`, `Are you sure you want to cancel order ${order.id}?`)}
              className="border-2 border-gray-200 px-5 py-3.5 rounded-2xl active:bg-gray-50 flex-row items-center justify-center"
            >
              <XCircle size={16} color="#6B7280" />
              <Text className="text-sm font-bold text-gray-700 ml-2">Cancel</Text>
            </TouchableOpacity>
          )}

          <ActionButton 
            text={isDelivered ? '🔄 Reorder' : '📍 Track Order'} 
            onPress={() => Alert.alert(
              isDelivered ? `Reorder` : `Track`, 
              isDelivered ? `Reordering ${order.id}` : `Tracking ${order.id}`
            )}
            isTrack={!isDelivered}
          />
        </View>
      </View>
    </View>
  );
};

// --- MAIN SCREEN COMPONENT ---
const OrderHistoryScreen: React.FC = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

      const [loading, setLoading] = useState<boolean>(true);
  
        useEffect(() => {
           const timer = setTimeout(() => setLoading(false), 2000); 
           return () => clearTimeout(timer);
         }, []);

   

  const walletBalance = 2450.75; // Example balance
  const recentTransactions = 12; // Example stat

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-gray-50 to-white">
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" /> 

      {/* Modern Header with Gradient */}
      <View className="bg-white shadow-xl">
        <LinearGradient
          colors={["#FFFFFF", "#FFF7ED"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="px-5 pt-4 pb-6"
        >
          <View className="flex-row items-center gap-x-4 mb-4">
            <TouchableOpacity 
              onPress={() => router.back()} 
              className="p-2.5 bg-white rounded-2xl shadow-md active:bg-gray-50"
            >
              <ArrowLeft size={22} color="#374151" />
            </TouchableOpacity>
            <View className="flex-1">
              <Text className="text-2xl font-bold text-gray-900">Your Orders</Text>
              <Text className="text-sm text-gray-500 mt-0.5">
                {mockOrders.length} orders • Last 30 days
              </Text>
            </View>
          </View>

          {/* Enhanced Search Bar */}
          <View className={`flex-row items-center bg-white rounded-2xl px-5 py-1 ${
            isSearchFocused 
              ? 'shadow-xl border-2 border-orange-400' 
              : 'shadow-md border border-gray-200'
          }`}>
            <View className={`${isSearchFocused ? 'bg-orange-100' : 'bg-gray-100'} p-2 rounded-xl`}>
              <EvilIcons name="search" size={20} color={isSearchFocused ? "#F97316" : "#6B7280"} />
            </View>
            <TextInput
              className="flex-1 ml-3 text-base text-gray-900 font-medium"
              placeholder="Search your orders..."
              placeholderTextColor="#94a3b8"
              value={searchText}
              onChangeText={setSearchText}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            {searchText.length > 0 && (
              <TouchableOpacity 
                onPress={() => setSearchText('')}
                className="bg-orange-100 rounded-xl p-2 active:bg-orange-200"
              >
                <Ionicons name="close" size={16} color="#F97316" />
              </TouchableOpacity>
            )}
          </View>
        </LinearGradient>
      </View>

      {/* Order List */}
      {loading ? 
      <OrderListSkeleton /> : 
        <ScrollView 
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 20, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {mockOrders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </ScrollView>}
    
    </SafeAreaView>
  );
};

export default OrderHistoryScreen;