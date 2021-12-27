import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { NativeRouter, Routes, Route, Link } from "react-router-native";
import Home from "../quizapp/App/pages/Home";

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
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
