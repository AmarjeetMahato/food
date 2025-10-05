import { Stack } from "expo-router"
import React from "react"
import "../../global.css"
export default function RootLayout() {
   return (
      <Stack screenOptions={{ headerShown: false }}>
         <Stack.Screen name="(screens)/category" options={{
            headerShown: true, // ✅ show header
            title: "Category", // ✅ set title
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation: "fade_from_bottom",
         }} />

      <Stack.Screen name="(screens)/SinglePage" options={{
            headerShown: false, // ✅ show header
          
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation: "slide_from_right",
         }} />

         
      <Stack.Screen name="(screens)/order" options={{
            headerShown: false, // ✅ show header
      
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation:"slide_from_bottom",
         }} />

            <Stack.Screen name="(screens)/orderdetails" options={{
            headerShown: true, // ✅ show header
              title:"Orders Details",
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation:"flip",
         }} />

         <Stack.Screen name="(screens)/orderhistory" options={{
            headerShown: true, // ✅ show header
              title:"Orders History",
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation:"slide_from_bottom",
         }} />

               <Stack.Screen name="(screens)/paymentdetails" options={{
            headerShown: true, // ✅ show header
              title:"Orders History",
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation:"slide_from_bottom",
         }} />

         
               <Stack.Screen name="(screens)/search" options={{
            headerShown: false, // ✅ show header
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation:"fade_from_bottom",
         }} />
   
                 <Stack.Screen name="(screens)/chat" options={{
            headerShown: false, // ✅ show header
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation:"fade_from_bottom",
         }} />
   
   
   
   
   
   
   
          <Stack.Screen name="(screens)/notifications" options={{
            headerShown: true, // ✅ show header
            title: "Notifications", // ✅ set title
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation: "slide_from_right",
         }} />

           <Stack.Screen name="(screens)/wallet" options={{
            headerShown: true, // ✅ show header
            title: "wallet", // ✅ set title
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation: "slide_from_right",
         }} />


      </Stack>
   )
}