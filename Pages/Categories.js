import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose Any Category</Text>
      <View style={styles.buttondiv}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>History</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttondiv}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>Technology &amp; Science</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttondiv}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>Geography</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttondiv}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>Mathematics</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#03071e",
    paddingHorizontal: 20,
    flex: 1,
  },
  header: {
    paddingBottom: 50,
    paddingTop: 60,
    fontSize: 25,
    fontWeight: "bold",
    color: "#e85d04",
    textAlign: "center",
    textTransform: "uppercase",
  },
  banner: {
    width: 300,
    height: 300,
  },
  buttondiv: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    backgroundColor: "#ffba08",
    padding: 10,
    borderRadius: 16,
    borderWidth: 4,
    borderColor: "#e85d04",
    marginVertical: 5,
  },
  buttontext: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
