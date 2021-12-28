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
      <Stack.Navigator headerMode="none" initialRouteName="home">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="categories" component={Categories} />
        <Stack.Screen name="question" component={Question} />
        <Stack.Screen name="result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
