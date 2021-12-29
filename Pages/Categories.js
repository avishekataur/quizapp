import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

interface categoriesProps {
  navigation: any;
}

const Categories = (props: categoriesProps) => {
  const history = () => props.navigation.navigate("HISTORY");
  const science = () => props.navigation.navigate("TECHNOLOGY_SCIENCE");
  const geography = () => props.navigation.navigate("GEOGRAPHY");
  const mathematics = () => props.navigation.navigate("MATHEMATICS");
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose Any Category</Text>
      <View style={styles.buttondiv}>
        <TouchableOpacity style={styles.button} onPress={history}>
          <Text style={styles.buttontext}>History</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttondiv}>
        <TouchableOpacity style={styles.button} onPress={science}>
          <Text style={styles.buttontext}>Technology &amp; Science</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttondiv}>
        <TouchableOpacity style={styles.button} onPress={geography}>
          <Text style={styles.buttontext}>Geography</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttondiv}>
        <TouchableOpacity style={styles.button} onPress={mathematics}>
          <Text style={styles.buttontext}>Mathematics</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.frame}>
        <Image
          style={styles.banner}
          source={require("../Images/categories.png")}
        />
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
    paddingBottom: 30,
    paddingTop: 40,
    fontSize: 25,
    fontWeight: "bold",
    color: "#e85d04",
    textAlign: "center",
    textTransform: "uppercase",
  },
  banner: {
    width: 250,
    height: 250,
  },
  frame: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
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
