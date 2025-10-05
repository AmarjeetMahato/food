import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StatusBar, Alert } from 'react-native';
// Note: You must install these dependencies:
// npm install nativewind expo-linear-gradient lucide-react-native
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, Search, MoreVertical, MapPin, List, Share2, XCircle, Clock, Truck, Receipt } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../components/SearchBar';
import { useRouter } from 'expo-router';
// --- TYPE DEFINITIONS (TypeScript) ---

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
  imageUri: string; // Placeholder for restaurant image
}

// --- MOCK DATA ---

const formatOrderTime = (orderTime: string) => {
  // Replace the comma with 'T' and trim spaces
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
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);

  // Function to show full order details (could be a modal or navigation)
  const handleViewDetails = () => {
    setIsOpen(false);
    router.push("/orderdetails")
  };

  const handleShareOrder = () => {
    setIsOpen(false);
    alert(`Shared order link for ${order.restaurantName}!`);
  };

  return (
    <View className="relative">
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)} className="p-2">
        <MoreVertical size={20} color="orange" />
      </TouchableOpacity>
      {isOpen && (
        <View className="absolute top-8 right-0 w-40 bg-white rounded-lg shadow-xl z-10 border border-gray-100 overflow-hidden">
          <TouchableOpacity 
            onPress={handleViewDetails}
            className="flex-row items-center gap-x-3 p-3 active:bg-gray-50 border-b border-gray-100"
          >
            <Receipt size={16} color="#374151" className="mr-2" /> 
            <Text className="text-sm text-gray-800">Order Details</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={handleShareOrder}
            className="flex-row items-center p-3 active:bg-gray-50 gap-x-3"
          >
            <Share2 size={16} color="#374151" className="mr-2 " />
            <Text className="text-sm text-gray-800">Share Order</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const OrderCard: React.FC<{ order: Order }> = ({ order }) => {
  const isDelivered = order.deliveryStatus === 'Delivered';
  const isCancellable = order.deliveryStatus !== 'Delivered' && order.deliveryStatus !== 'Cancelled';

  const getStatusIcon = () => {
    switch (order.deliveryStatus) {
      case 'Delivered':
        return { icon: <Clock size={16} color="#10B981" className="mr-1" />, textClass: 'text-green-600' };
      case 'On the Way':
        return { icon: <Truck size={16} color="#F59E0B" className="mr-1" />, textClass: 'text-amber-600' };
      case 'Preparing':
        return { icon: <Clock size={16} color="#3B82F6" className="mr-1" />, textClass: 'text-blue-600' };
      case 'Cancelled':
        return { icon: <XCircle size={16} color="#EF4444" className="mr-1" />, textClass: 'text-red-600' };
      default:
        return { icon: null, textClass: 'text-gray-600' };
    }
  };
  const status = getStatusIcon();
  
  // Primary action button styling (Track or Reorder)
  const ActionButton: React.FC<{ text: string; onPress: () => void; isTrack?: boolean }> = ({ text, onPress, isTrack = false }) => (
    <TouchableOpacity onPress={onPress} className="flex-1 rounded-xl overflow-hidden shadow-md shadow-orange-500/50">
      <LinearGradient
        colors={isTrack ? ["#F97316", "#EA580C"] : ["#E5E7EB", "#D1D5DB"]} // Orange gradient for Track/Reorder, Gray for others
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="py-3 flex-row items-center justify-center rounded-xl"
      >
        <Text className={`font-bold text-base ${isTrack ? 'text-white' : 'text-gray-800'}`}>
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <View className="bg-white rounded-2xl shadow-lg shadow-gray-200 p-4  border border-gray-100">
      
      {/* 1. Header with Image, Location, and Three Dots */}
      <View className="flex-row justify-between items-start mb-4">
        <View className="flex-row items-center flex-1 pr-2">
          <Image 
            source={{ uri: order.imageUri }} 
            className="w-12 h-12 rounded-lg mr-4"
          />
          <View className="flex-1">
            <Text className="font-bold text-lg text-gray-900" numberOfLines={1}>
              {order.restaurantName}
            </Text>
            <View className="flex-row items-center mt-1">
              <MapPin size={14} color="#6B7280" className="mr-1" />
              <Text className="text-sm text-gray-600" numberOfLines={1}>
                {order.restaurantLocation}
              </Text>
            </View>
          </View>
        </View>
        <ThreeDotsMenu order={order} />
      </View>

      {/* Separator */}
      <View className="h-px bg-gray-200 mb-4" />

      {/* 2. Order Summary */}
      <View className="mb-4">
        <Text className="text-base font-semibold text-gray-900 mb-1">
          Order Summary
        </Text>
        <Text className="text-sm text-gray-600">
          {order.items.map(item => `${item.quantity} x ${item.name}`).join(', ')}
        </Text>
      </View>

      {/* Separator */}
      <View className="h-px bg-gray-200 mb-4" />

      {/* 3. Order Placement Details and Status */}
      <View className="flex-row justify-between items-center mb-4">
        <View>
          <Text className="text-xs text-gray-500">Order Placed</Text>
          <Text className="text-sm font-medium text-gray-800">
            {formatOrderTime(order.orderTime)
            }
</Text>
        </View>
        <View className="items-end">
          <Text className="text-xs text-gray-500">Status</Text>
          <View className="flex-row items-center">
            {status.icon}
            <Text className={`text-sm font-bold ${status.textClass}`}>
              {order.deliveryStatus}
            </Text>
          </View>
        </View>
      </View>

      {/* Separator */}
      <View className="h-px bg-gray-200 mb-4" />

      {/* 4. Action Buttons (Track and Cancel) */}
    <View className="flex-row gap-x-4 items-center">
  {/* Cancel Button (Minimalist, outlined, pill-shaped) */}
  {isCancellable ? (
    <TouchableOpacity 
      onPress={() => Alert.alert(`Cancel Order`, `Are you sure you want to cancel order ${order.id}?`)}
      // Smaller vertical padding, tighter rounding, minimal border
      className="border border-gray-300 px-4 py-2 rounded-full active:bg-gray-100"
    >
      <Text className="text-sm font-medium text-gray-700">Cancel</Text>
    </TouchableOpacity>
  ) : (
    // Spacer when not cancellable (ensures Track button stays on the right)
    <View className="flex-1" />
  )}

  {/* Track / Reorder Button (Primary gradient, slightly smaller padding) */}
  <View className="flex-1"> 
    <ActionButton 
      text={isDelivered ? 'Reorder' : 'Track Order'} 
      onPress={() => Alert.alert(isDelivered ? `Reorder` : `Track`, isDelivered ? `Reordering ${order.id}` : `Tracking ${order.id}`)}
      isTrack={!isDelivered}
      
    />
  </View>
</View>
      
    </View>
  );
};

// --- MAIN SCREEN COMPONENT ---

const OrderHistoryScreen: React.FC = () => {
  const router = useRouter()
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" /> 

      {/* UI Header */}
      <View className=" pb-4 px-4 gap-x-4 bg-white shadow-md flex-row tracking-widest  items-center border-b border-gray-100">
        <TouchableOpacity onPress={() => console.log('Go Back')} className="p-2">
          <ArrowLeft onPress={()=> router.back()} size={24} color="#374151" />
        </TouchableOpacity>
        <Text className="text-xl font-semibold text-gray-900">Your Orders</Text>
      
      </View>

      <SearchBar/>

      {/* Order List */}
    
             <ScrollView 
  // Use a NativeWind class string directly on style property for gap
  contentContainerStyle={{ paddingVertical: 16, }} 

  className="px-4 gap-y-3" // You can keep this, but let's add a wrapper for reliability
>
  {/* Adding a View wrapper is the most reliable way to enforce gap/space-y in RN */}
  <View className="space-y-4"> 
    {mockOrders.map((order) => (
      <OrderCard key={order.id} order={order} />
    ))}
    {/* Padding at the bottom for scroll comfort */}
    <View className="h-4" /> 
  </View>
</ScrollView>

    

    </SafeAreaView>
  );
};

export default OrderHistoryScreen;