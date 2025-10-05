import React from "react";
import { Tabs } from "expo-router";
import { AntDesign, MaterialIcons  ,FontAwesome5 } from "@expo/vector-icons";
import { Image } from "react-native";

const isSubscribed = true;

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
           tabBarActiveTintColor:"black",
      }}
      >
        <Tabs.Screen name="index" options={{
               title:"Home",
              
               tabBarIcon:({focused})=>(
                    focused ? <FontAwesome5 name="home" size={24}  color={focused ? "#FF7E5F" : "gray"}/> : <FontAwesome5 name="home" size={24}  color={focused ? "#FF7E5F" : "gray"}/>
               )
        }}/>
        <Tabs.Screen
  name="subscriptions"
  options={{
        title: isSubscribed ? "Subscribed" : "Subscriptions",

    tabBarIcon: ({ focused }) => {
      // Example: change icon if user is subscribed

      return isSubscribed ? (
        <FontAwesome5 name="check-circle" size={24} color={focused ? "#FF7E5F" : "gray"} />
      ) : (
        <FontAwesome5 name="bell" size={24} color={focused ? "#FF7E5F" : "gray"} />
      );
    },
  }}
/>
        <Tabs.Screen name="menu" options={{
               title:"Menu",
               tabBarActiveTintColor:"black",
               tabBarIcon:({focused})=>(
                    focused ? <MaterialIcons  name="restaurant-menu" size={24}  color={focused ? "#FF7E5F" : "gray"}/> : <MaterialIcons  name="restaurant-menu" size={24}  color={focused ? "#FF7E5F" : "gray"}/>
               )
        }}/>

      <Tabs.Screen
  name="profile"
  options={{
    title: "Profile",
    tabBarIcon: ({ focused }) => {
      const isAuth = true; // 👉 replace with your auth state (Redux, Context, Zustand etc.)
      const profileImage =
        "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // 👉 user profile photo URL

      if (isAuth) {
        return (
          <Image
            source={{ uri: profileImage }}
            style={{
              width: 28,
              height: 28,
              borderRadius:50
            }}
          />
        );
      } else {
        return (
          <FontAwesome5
            name="user-alt"
            size={24}
             color={focused ? "#FF7E5F" : "gray"}
          />
        );
      }
    },
  }}
/>


        

      </Tabs>
  );
}
