import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Categories from '../pages/Categories';
import Question from '../pages/Question';
import Result from '../pages/Result';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="categories" component={Categories} />
      <Stack.Screen name="question" component={Question} />
      <Stack.Screen name="result" component={Result} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
