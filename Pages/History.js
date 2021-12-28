import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
} from "react-native";
import data from "../data/data";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const History = () => {
  const allQuestions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  const validateAnswer = (selectedOption) => {
    let correct_option = allQuestions[currentQuestionIndex]["correct_option"];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (selectedOption == correct_option) {
      // Set Score
      setScore(score + 1);
    }
    // Show Next Button
    setShowNextButton(true);
  };
  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      // Last Question
      // Show Score Modal
      setShowScoreModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const renderQuestion = () => {
    return (
      <View>
        {/* Question Counter//////////////////////////////// */}
        <Text
          style={{
            color: "#ffba08",
            fontSize: 18,
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          {currentQuestionIndex + 1}&nbsp;/ {allQuestions.length}
        </Text>

        {/* Question */}
        <Text
          style={{
            color: "#ffba08",
            fontSize: 25,
            textAlign: "center",
          }}
        >
          {allQuestions[currentQuestionIndex]?.question}
        </Text>
        <View style={styles.frame}>
          <Image
            style={styles.banner}
            source={require("../Images/Question.png")}
          />
        </View>
      </View>
    );
  };
  // Options //////////////////////////////////////////////////
  const renderOptions = () => {
    return (
      <View>
        {allQuestions[currentQuestionIndex]?.options.map((option) => (
          <TouchableOpacity
            onPress={() => validateAnswer(option)}
            disabled={isOptionsDisabled}
            key={option}
            style={{
              borderWidth: 4,
              borderColor:
                option == correctOption
                  ? "green"
                  : option == currentOptionSelected
                  ? "red"
                  : "#e85d04",
              backgroundColor:
                option == correctOption
                  ? "green"
                  : option == currentOptionSelected
                  ? "red"
                  : "#e85d04",

              borderRadius: 20,
              borderWidth: 2,
              borderColor: "#ffba08",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 5,
              marginVertical: 5,
              marginHorizontal: 30,
            }}
          >
            <Text style={{ fontSize: 16, color: "white" }}>{option}</Text>

            {/* Show Check Or Cross Icon based on correct answer*/}
            {option == correctOption ? (
              <View
                style={{
                  borderRadius: 16,
                  backgroundColor: "green",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="check"
                  style={{
                    color: "white",
                    fontSize: 20,
                  }}
                />
              </View>
            ) : option == currentOptionSelected ? (
              <View
                style={{
                  borderRadius: 16,
                  backgroundColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="close"
                  style={{
                    color: "white",
                    fontSize: 20,
                  }}
                />
              </View>
            ) : null}
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity
          onPress={handleNext}
          style={{
            marginTop: 20,
            width: "50%",
            backgroundColor: "#ffba08",
            padding: 8,
            borderRadius: 7,
          }}
        >
          <Text style={{ fontSize: 16, color: "white", textAlign: "center" }}>
            Next
          </Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ["0%", "100%"],
  });
  const renderProgressBar = () => {
    return (
      <View
        style={{
          width: "100%",
          height: 10,
          borderRadius: 20,
          backgroundColor: "#ffba08",
        }}
      >
        <Animated.View
          style={[
            {
              height: 10,
              borderRadius: 20,
              backgroundColor: "#e85d04",
            },
            {
              width: progressAnim,
            },
          ]}
        ></Animated.View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor="tomato" />
      <View
        style={{
          flex: 1,
          paddingVertical: 20,
          paddingHorizontal: 16,
          backgroundColor: "#03071e",
          position: "relative",
        }}
      >
        {/* ProgressBar */}
        {renderProgressBar()}

        {/* Question */}
        {renderQuestion()}

        {/* Options */}
        {renderOptions()}

        {/* Next Button */}
        {renderNextButton()}

        {/* Score Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showScoreModal}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: "90%",
                borderRadius: 20,
                padding: 20,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                {score > allQuestions.length / 2 ? "Congratulations!" : "Oops!"}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginVertical: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 30,
                    color: score > allQuestions.length / 2 ? "green" : "red",
                  }}
                >
                  {score}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: "black",
                  }}
                >
                  / {allQuestions.length}
                </Text>
              </View>
              {/* Retry Quiz button */}
              <TouchableOpacity
                onPress={restartQuiz}
                style={{
                  backgroundColor: "tomato",
                  padding: 20,
                  width: "100%",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  Retry Quiz
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({
  banner: {
    width: 180,
    height: 180,
  },
  frame: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
});
