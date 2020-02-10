import React from 'react';
import {  StyleSheet, View, Text} from 'react-native';
import Select from './pages/Select';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Opponents from './pages/Opponents';

const RootStack = createStackNavigator(
  {
    Select: Select,
    Opponents: Opponents
  },
  {
    initialRouteName: 'Select',
  },
);

const AppContainer = createAppContainer(RootStack);

const App = () => {
  return (
    <AppContainer />
  );
};

export default App;
