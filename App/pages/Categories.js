import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Categories = () => {
  return (
    <View styel={styles.container}>
      <Text styel={styles.tinytext}>Categories</Text>
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
    fontSize: 50,
    color: "white",
    textAlign: "center",
  },
});
