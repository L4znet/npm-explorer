import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, TextInput, View, Image} from 'react-native';
import {useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./Screens/HomeScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

