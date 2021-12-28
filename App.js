import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#03071e",
    flex: 1,
  },
});
