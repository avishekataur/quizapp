import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import AppNavigator from "./Pages/AppNavigator";

const App = () => {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
