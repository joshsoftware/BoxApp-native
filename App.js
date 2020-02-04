import React from 'react';
import {  StyleSheet, View, Text} from 'react-native';
import SelectLevel from './pages/SelectLevel';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LevelPage from './pages/LevelPage';
import Description from './pages/Description';
import CitySports from './pages/CitySports';
import SelectSport from './pages/SelectSport';

const MainNavigator = createStackNavigator({
    SelectSports: SelectSport,
   Sports: CitySports,
   Select: SelectLevel,
  Level: LevelPage,
});

const AppContainer = createAppContainer(MainNavigator);



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

  

  return (
     <AppContainer />
  );
};

export default App;
