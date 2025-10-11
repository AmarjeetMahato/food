import React from "react";
import { View, FlatList } from "react-native";
import FavouriteCard from "../../components/FavouriteCard";
import { SafeAreaView } from "react-native-safe-area-context";



const FavouriteScreen = () => (
  <SafeAreaView>
    <FavouriteCard/>
  </SafeAreaView>
);

export default FavouriteScreen;
