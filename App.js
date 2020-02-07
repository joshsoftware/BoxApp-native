import React, {useEffect, useState} from 'react';
import IntroPage from './pages/IntroPage';
import SignUpPage from './pages/SignUpPage';
import SetPasswordPage from './pages/SetPasswordPage';
import SignInPage from './pages/SignInPage';
import YourOpponentsPage from './pages/YourOpponentsPage';
import SelectSport from './pages/SelectSport';
import LevelPage from './pages/LevelPage';
import CitySports from './pages/CitySports';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const RootStack = createStackNavigator(
  {
    Intro: {
      screen: IntroPage,
      navigationOptions: {
        headerTitle: 'Welcome',
      },
      path: 'intro',
    },
    SignUp: {
      screen: SignUpPage,
      navigationOptions: {
        headerTitle: 'Sign up',
      },
      path: 'signup',
    },

    SetPassword: {
      screen: SetPasswordPage,
      navigationOptions: {
        headerTitle: 'Set Password',
      },
      path: 'setpassword',
    },

    SignIn: {
      screen: SignInPage,
      navigationOptions: {
        headerTitle: 'Sign In',
      },
      path: 'signin',
    },

    YourOpponents: {
      screen: YourOpponentsPage,
      navigationOptions: {
        headerTitle: 'Your Opponents',
      },
      path: 'youropponents',
    },

    Select: SelectSport,
    Level: LevelPage,
    Sports: CitySports,
  },
  {
    initialRouteName: 'Intro',
  },
);

const AppContainer = createAppContainer(RootStack);

const App = () => {
  const prefix = 'app://boxapp/';

  return <AppContainer uriPrefix={prefix} />;
};

export default App;
