import React from 'react';
import {  StyleSheet, View, Text} from 'react-native';
import SelectLevel from './pages/SelectLevel';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LevelPage from './pages/LevelPage';
import Description from './pages/Description';
import CitySports from './pages/CitySports';

 
// const RootStack = createStackNavigator(
//   {
//     Select: SelectLevel,
//     Level: LevelPage,
//     Description: Description
//   },
//   {
//     initialRouteName: 'Select',
//   },
// );

// const AppContainer = createAppContainer(RootStack);

const App = () => {
  // <SportsListPage />
  return (
     <CitySports />
    //<AppContainer />
  );
};

export default App;
