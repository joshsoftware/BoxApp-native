import React from 'react';
import {  StyleSheet, View, Text} from 'react-native';
import IntroPage from './pages/IntroPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const RootStack = createStackNavigator(
  {
    Intro: IntroPage,
    SignUp: SignUpPage,
    SignIn: SignInPage,
  },
  {
    initialRouteName: 'Intro',
  },
);

const AppContainer = createAppContainer(RootStack);

const App = () => {
  return (
    <AppContainer />
  );
};

export default App;
