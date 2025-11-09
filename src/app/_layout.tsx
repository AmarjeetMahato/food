import { Stack } from "expo-router"
import React from "react"
import "../../global.css"
export default function RootLayout() {
   return (
      <Stack screenOptions={{ headerShown: false }}>
               <Stack.Screen name="(screens)/splash" options={{ headerShown: false }} />

         <Stack.Screen name="(screens)/category" options={{
            headerShown: false, // ✅ show header
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation: "slide_from_right",
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
            animation:"slide_from_right",
         }} />

            <Stack.Screen name="(screens)/orderdetails" options={{
            headerShown: true, // ✅ show header
              title:"Orders Details",
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation:"slide_from_right",
         }} />

           <Stack.Screen name="(screens)/settings" options={{
            headerShown: false, // ✅ show header
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation:"slide_from_right",
         }} />


         
            <Stack.Screen name="(screens)/editprofile" options={{
            headerShown: true, // ✅ show header
              title:"Edit Profile",
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation:"slide_from_right",
         }} />


         <Stack.Screen name="(screens)/orderhistory" options={{
            headerShown: false, // ✅ show header
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation:"slide_from_right",
         }} />

             <Stack.Screen name="(screens)/address" options={{
            headerShown: false,
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation:"slide_from_right",
         }} />

               <Stack.Screen name="(screens)/helpandsupport" options={{
            headerShown: false,
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation:"slide_from_right",
         }} />


               <Stack.Screen name="(screens)/paymentdetails" options={{
            headerShown: false, // ✅ show header
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation:"slide_from_right",
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
            animation:"slide_from_right",
         }} />

         <Stack.Screen name="(screens)/messfooddetails" options={{
            headerShown: false, // ✅ show header
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation:"slide_from_bottom",
         }} 
            
         />

             <Stack.Screen name="(screens)/favourite" options={{
            headerShown: false, // ✅ show header
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation:"slide_from_right",
         }} 
            
         />
   
   
           <Stack.Screen name="(screens)/notificationpage" options={{
            headerShown: false, // ✅ show header
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation: "slide_from_right",
         }} />
   
   
   
   
          <Stack.Screen name="(screens)/notifications" options={{
            headerShown: true, // ✅ show header
            title: "Notifications", // ✅ set title
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation: "slide_from_right",
         }} />

           <Stack.Screen name="(screens)/wallet" options={{
            headerShown: false, // ✅ show header
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation: "slide_from_right",
         }} />


            <Stack.Screen name="(screens)/mealsdetails" options={{
            headerShown: false, // ✅ show header
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation: "slide_from_right",
         }} />

               <Stack.Screen name="(screens)/auth" options={{
            headerShown: false, // ✅ show header
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation: "slide_from_right",
         }} />

          <Stack.Screen name="(screens)/otp" options={{
            headerShown: false, // ✅ show header
            headerTintColor: "black", // ✅ back arrow color
            headerTitleAlign: "center", // ✅ center the title
            animation: "slide_from_right",
         }} />

      </Stack>
   )
}