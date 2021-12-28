import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Categories from "./Categories";
import Question from "./Question";
import Result from "./Result";

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
        <Stack.Screen name="QUESTION" component={Question} />
        <Stack.Screen name="RESULT" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
