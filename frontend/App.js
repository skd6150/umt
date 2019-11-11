import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from './components/MainScreen'

const AppNavigator = createStackNavigator({
  Home: 
  {
    screen: MainScreen,
  },
})

export default createAppContainer(AppNavigator);
