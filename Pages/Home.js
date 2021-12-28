import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

interface categoriesProps {
  navigation: any;
}

const Home = (props: categoriesProps) => {
  // const categories = () => Alert.alert("Not Working");
  const categories = () => props.navigation.navigate("CATEGORIES");

  return (
    <View style={styles.container}>
      <Text style={styles.tinytext}>Welcome To</Text>
      <Text style={styles.text}>QUIZPRO</Text>
      <View style={styles.frame}>
        <Image style={styles.banner} source={require("../Images/banner.png")} />
      </View>
      <Text style={styles.text}>Let's Start</Text>
      <View style={styles.buttondiv}>
        <TouchableOpacity style={styles.button} onPress={categories}>
          <Text style={styles.buttontext}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    backgroundColor: "#03071e",
    flex: 1,
  },
  tinytext: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
  },
  text: {
    fontSize: 50,
    color: "#ffba08",
    fontWeight: "bold",
    textAlign: "center",
  },
  banner: {
    width: 300,
    height: 300,
  },
  frame: {
    paddingTop: 40,
    paddingBottom: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttondiv: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "60%",
    backgroundColor: "#dc2f02",
    padding: 10,
    borderRadius: 16,
    marginVertical: 5,
  },
  buttontext: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
