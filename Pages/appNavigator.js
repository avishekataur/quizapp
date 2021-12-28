import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Categories from "./Categories";
import History from "./History";
import Science from "./Science";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HOME">
        <Stack.Screen
          options={{ headerShown: false }}
          name="HOME"
          component={Home}
        />
        <Stack.Screen name="CATEGORIES" component={Categories} />
        <Stack.Screen name="HISTORY" component={History} />
        <Stack.Screen name="TECHNOLOGY_SCIENCE" component={Science} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
