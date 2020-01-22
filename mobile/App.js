import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/screens/Home';
import Vehicle from './src/screens/Vehicle';

const AppNavigator = createStackNavigator({
 
  VehicleScreen: { screen: Vehicle }
});

export default createAppContainer(AppNavigator);