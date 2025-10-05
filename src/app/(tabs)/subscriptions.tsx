import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import SubscriptionsCard from '../../components/Subscriptions';

const Subscriptions = () => {
 
  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-gray-50">
            <SubscriptionsCard />
    </SafeAreaView>
  );
};

export default Subscriptions;