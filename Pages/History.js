import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import data from "../data/data";

const History = () => {
  const allQuestions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <View>
      {allQuestions[currentQuestionIndex]?.options.map((option) => (
        <TouchableOpacity
          key={option}
          style={{
            borderWidth: 3,
            borderColor: "white",
            backgroundColor: "blue",
            height: 60,
            borderRadius: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default History;

const styles = StyleSheet.create({});
