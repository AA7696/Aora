import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

// This component represents the root layout of the application
const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });
  
  useEffect(() => {
    if (error) throw error;
  
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    

    // This is the main navigation component that allows users to navigate between screens
    <Stack>
      {/*  Header configuration option
         * 
         * This option is set to false to hide the header on this screen */}
           <Stack.Screen name='index' options={{
      headerShown: false
     }} />

<Stack.Screen name='(auth)' options={{
      headerShown: false
     }} />


    </Stack>
  ) 
}

export default RootLayout

