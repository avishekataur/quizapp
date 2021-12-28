import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tinytext}>Choose Any Category</Text>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  tinytext: {
    paddingTop: 80,
    fontSize: 20,
    color: "blue",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
