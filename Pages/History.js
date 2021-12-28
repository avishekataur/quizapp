import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import data from "../data/data";

const History = () => {
  const allQuestions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <View style={styles.container}>
      <View
        style={{
          marginVertical: 40,
        }}
      >
        {/* Question Counter */}

        <Text
          style={{
            color: "#ffba08",
            fontSize: 18,
            textAlign: "center",
          }}
        >
          {currentQuestionIndex + 1}&nbsp;/ {allQuestions.length}
        </Text>

        {/* Question */}
        <Text
          style={{
            color: "#ffba08",
            fontSize: 30,
            textAlign: "center",
          }}
        >
          {allQuestions[currentQuestionIndex]?.question}
        </Text>
      </View>
      {/* Options //////////////////////////////////////////////////// */}
      {allQuestions[currentQuestionIndex]?.options.map((option) => (
        <View key={option} style={styles.buttondiv}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontext}>{option}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#03071e",
    flex: 1,
    paddingHorizontal: 20,
  },
  buttondiv: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80%",
    backgroundColor: "#e85d04",
    padding: 10,
    borderRadius: 16,
    borderWidth: 4,
    borderColor: "#ffba08",
    marginVertical: 5,
  },
  buttontext: {
    color: "white",
    fontSize: 20,
    textAlign: "left",
  },
});
