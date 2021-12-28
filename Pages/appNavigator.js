import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Pages/Home.js";

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Navigator headerMode="none" initialRouteName="Home">
      <Screen name="Home" component={Home}></Screen>
    </Navigator>
  </NavigationContainer>
);

export default AppNavigator;
