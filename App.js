import React from 'react';
import {  StyleSheet, View, Text} from 'react-native';
import SelectLevel from './pages/SelectSport';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LevelPage from './pages/LevelPage';
import CitySports from './pages/CitySports';

const RootStack = createStackNavigator(
  {
    Select: SelectLevel,
    Level: LevelPage,
    Sports: CitySports
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
