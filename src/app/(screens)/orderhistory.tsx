import { Text, View, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft } from 'lucide-react-native'
import { useRouter } from 'expo-router'
import BottomSheet from '../../components/BottomSheet'
import OrderHistorySkeleton from '../../skeltons/OrderHistorySkeleton'

const tabs = ['All Orders', 'Delivered', 'Cancelled', 'Last Week', 'Monthly']

const orders = [
    {
        id: 1,
        restaurant: 'Pizza Paradise',
        items: 'Margherita Pizza, Garlic Bread, Coke',
        date: 'Oct 2, 2025',
        time: '7:30 PM',
        price: 450,
        rating: 4.5,
        status: 'Delivered',
        statusColor: 'green',
        itemCount: 3
    },
    {
        id: 2,
        restaurant: 'Burger House',
        items: 'Cheese Burger, French Fries, Chocolate Milkshake',
        date: 'Sep 28, 2025',
        time: '8:15 PM',
        price: 380,
        rating: 4.8,
        status: 'Delivered',
        statusColor: 'green',
        itemCount: 3
    },
    {
        id: 3,
        restaurant: 'Spice Kitchen',
        items: 'Chicken Biryani, Raita, Gulab Jamun',
        date: 'Sep 25, 2025',
        time: '9:00 PM',
        price: 520,
        rating: 4.2,
        status: 'Delivered',
        statusColor: 'green',
        itemCount: 3
    }
]

const Orderhistory = () => {
    const [activeTab, setActiveTab] = useState('All Orders')
    const [open, setOpen] = useState<boolean>(false)
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(true);

      useEffect(() => {
         const timer = setTimeout(() => setLoading(false), 2000); 
         return () => clearTimeout(timer);
       }, []);

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

            {/* Modern Header with Gradient - Same as Your Orders */}
            <View className="bg-white shadow-xl">
                <LinearGradient
                    colors={["#FFFFFF", "#FFF7ED"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className="px-5 pt-4 pb-3"
                >
                    <View className="flex-row items-center gap-x-4 mb-1">
                        <TouchableOpacity 
                            onPress={() => router.back()} 
                            className="p-2.5 bg-white rounded-2xl shadow-md active:bg-gray-50"
                        >
                            <ArrowLeft size={22} color="#374151" />
                        </TouchableOpacity>
                        <View className="flex-1">
                            <Text className="text-2xl font-bold text-gray-900">Order History</Text>
                            <Text className="text-sm text-gray-500 mt-0.5">
                                {orders.length} orders • Last 30 days
                            </Text>
                        </View>
                    </View>
                </LinearGradient>
            </View>

            {/* Enhanced Horizontal Tabs */}
            {loading ? <OrderHistorySkeleton/> :
            <>
                    <View className="bg-white shadow-md">
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className="px-5 py-4"
                    contentContainerStyle={{
                        paddingHorizontal: 20,
                        gap: 12,
                        alignItems: 'center',
                    }}
                >
                    {tabs.map((tab) => (
                        <TouchableOpacity
                            key={tab}
                            onPress={() => setActiveTab(tab)}
                            activeOpacity={0.7}
                        >
                            {activeTab === tab ? (
                                <LinearGradient
                                    colors={['#F97316', '#EA580C']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    className="px-6 py-3"
                                    style={{
                                        shadowColor: '#F97316',
                                        shadowOffset: { width: 0, height: 4 },
                                        shadowOpacity: 0.3,
                                        shadowRadius: 8,
                                        elevation: 6,
                                        borderRadius: 16
                                    }}
                                >
                                    <Text className="text-white text-sm font-bold">{tab}</Text>
                                </LinearGradient>
                            ) : (
                                <View className="px-6 py-3 rounded-2xl bg-gray-100">
                                    <Text className="text-gray-600 text-sm font-semibold">{tab}</Text>
                                </View>
                            )}
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

          
            <ScrollView 
                className="flex-1" 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: 16, paddingTop: 20, paddingBottom: 24 }}
            >
                {orders.map((order) => (
                    <View 
                        key={order.id}
                        className="bg-white rounded-3xl overflow-hidden mb-4 border border-gray-100"
                        style={{
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.08,
                            shadowRadius: 16,
                            elevation: 4,
                        }}
                    >
                        {/* Status Badge Ribbon */}
                        <View className="absolute top-0 right-0 bg-emerald-50 px-4 py-1.5 rounded-bl-2xl z-10 flex-row items-center gap-x-1.5">
                            <View className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <Text className="text-xs font-bold text-emerald-600">
                                {order.status.toUpperCase()}
                            </Text>
                        </View>

                        {/* Card Header with Enhanced Gradient */}
                        <LinearGradient
                            colors={['rgba(249, 115, 22, 0.05)', 'transparent']}
                            className="p-5 pb-0"
                        >
                            <View className="flex-row justify-between items-start mb-4 mt-2">
                                <View className="flex-1 mr-4">
                                    <View className="flex-row items-center mb-2">
                                        <Text className="text-lg font-bold text-gray-900" numberOfLines={1}>
                                            {order.restaurant}
                                        </Text>
                                    </View>
                                    <View className="bg-orange-100 px-2.5 py-1 rounded-full self-start mb-2">
                                        <Text className="text-orange-600 text-xs font-bold">
                                            {order.itemCount} items
                                        </Text>
                                    </View>
                                    <Text className="text-gray-600 text-sm leading-5" numberOfLines={2}>
                                        {order.items}
                                    </Text>
                                </View>
                                
                                {/* Enhanced Price Tag */}
                                <View className="bg-gradient-to-br from-orange-50 to-amber-50 px-4 py-2 rounded-2xl">
                                    <Text className="text-xs text-gray-500 font-medium mb-0.5">Total</Text>
                                    <Text className="text-xl font-bold text-gray-900">
                                        ₹{order.price}
                                    </Text>
                                </View>
                            </View>

                            {/* Enhanced Date Time Row */}
                            <View className="flex-row items-center bg-gray-50 rounded-2xl px-4 py-3 mb-4">
                                <View className="bg-orange-100 p-2 rounded-xl mr-3">
                                    <Ionicons name="time-outline" size={16} color="#F97316" />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-xs text-gray-500 font-medium mb-0.5">Order Time</Text>
                                    <Text className="text-sm font-semibold text-gray-800">
                                        {order.date} • {order.time}
                                    </Text>
                                </View>
                            </View>
                        </LinearGradient>

                        {/* Enhanced Divider */}
                        <View className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-5" />

                        {/* Enhanced Action Footer */}
                        <View className="flex-row items-center justify-between px-5 py-4">
                            {/* Enhanced Rating Badge */}
                            <View className="flex-row items-center bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-2.5 rounded-2xl border border-amber-200">
                                <Ionicons name="star" size={16} color="#F59E0B" />
                                <Text className="text-amber-700 text-sm font-bold ml-1.5">
                                    {order.rating}
                                </Text>
                                <Text className="text-amber-600 text-xs font-medium ml-1">/5</Text>
                            </View>

                            {/* Enhanced Action Buttons */}
                            <View className="flex-row items-center gap-3">
                                <TouchableOpacity 
                                    onPress={() => setOpen(prev => !prev)}
                                    className="px-4 py-2.5 border-2 border-gray-200 rounded-2xl active:bg-gray-50"
                                    activeOpacity={0.7}
                                >
                                    <Text className="text-gray-700 text-sm font-bold">
                                        Details
                                    </Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity 
                                    className="overflow-hidden rounded-2xl"
                                    activeOpacity={0.8}
                                    style={{
                                        shadowColor: '#F97316',
                                        shadowOffset: { width: 0, height: 4 },
                                        shadowOpacity: 0.3,
                                        shadowRadius: 8,
                                        elevation: 6,
                                    }}
                                >
                                    <LinearGradient
                                        colors={['#F97316', '#EA580C']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        className="px-5 py-2.5 flex-row items-center"
                                    >
                                        <Ionicons name="repeat-outline" size={18} color="white" />
                                        <Text className="text-white text-sm font-bold ml-2">
                                            Reorder
                                        </Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}

                {/* Enhanced Empty State */}
                {orders.length === 0 && (
                    <View className="items-center justify-center py-20 mt-10">
                        <View className="bg-gray-100 p-8 rounded-full mb-4">
                            <Ionicons name="receipt-outline" size={64} color="#9CA3AF" />
                        </View>
                        <Text className="text-gray-700 text-lg font-bold mb-2">
                            No orders yet
                        </Text>
                        <Text className="text-gray-500 text-sm">
                            Start ordering delicious food!
                        </Text>
                    </View>
                )}

                {open && (
                    <View className="absolute inset-0 bg-black bg-opacity-50">
                        <BottomSheet
                            visible={open}
                            onClose={() => setOpen(false)} 
                            foodItems={[
                                { id: "1", name: "Hyderabadi Chicken Biryani", quantity: 2, price: 250 },
                                { id: "2", name: "Paneer Butter Masala", quantity: 1, price: 180 },
                                { id: "3", name: "Garlic Naan", quantity: 3, price: 40 },
                            ]}
                            gstPercent={5} 
                        />
                    </View>
                )}
            </ScrollView>
            </>
            
            }
           
        </SafeAreaView>
    )
}

export default Orderhistory