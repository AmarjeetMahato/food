import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import SubscriptionsCard from '../../components/Subscriptions';
import SubscriptionDashboard from '../../components/Subscribed';
import SubscriptionScreen from '../../components/Subscribed';

const Subscriptions = () => {

   let isSubscribed = true;
 
  return (
    <View  className="flex-1 bg-gray-50">
          {isSubscribed ? <SubscriptionScreen/> : <SubscriptionsCard/>}
        
    </View>
  );
};

export default Subscriptions;