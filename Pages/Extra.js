// import React, { useState } from "react";
// import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
// import data from "../data/data";

// const History = () => {
//   const allQuestions = data;
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//   return (
//     <View style={styles.container}>
//       {/* Question Counter//////////////////////////////// */}
//       <Text
//         style={{
//           color: "#ffba08",
//           fontSize: 18,
//           textAlign: "center",
//           marginBottom: 10,
//         }}
//       >
//         {currentQuestionIndex + 1}&nbsp;/ {allQuestions.length}
//       </Text>

//       {/* Question/////////////////////////////////////////// */}
//       <Text
//         style={{
//           color: "#ffba08",
//           fontSize: 25,
//           textAlign: "center",
//         }}
//       >
//         {allQuestions[currentQuestionIndex]?.question}
//       </Text>
//       <View style={styles.frame}>
//         <Image
//           style={styles.banner}
//           source={require("../Images/Question.png")}
//         />
//       </View>
//       {/* Options////////////////////////////////////////////// */}
//       {allQuestions[currentQuestionIndex]?.options.map((option) => (
//         <View key={option} style={styles.buttondiv}>
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttontext}>{option}</Text>
//           </TouchableOpacity>
//         </View>
//       ))}
//     </View>
//   );
// };

// export default History;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#03071e",
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingTop: 30,
//   },
//   buttondiv: {
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   button: {
//     width: "80%",
//     backgroundColor: "#e85d04",
//     padding: 5,
//     borderRadius: 16,
//     borderWidth: 2,
//     borderColor: "#ffba08",
//     marginVertical: 5,
//   },
//   buttontext: {
//     color: "white",
//     fontSize: 16,
//     textAlign: "center",
//   },
//   banner: {
//     width: 180,
//     height: 180,
//   },
//   frame: {
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 15,
//   },
// });
