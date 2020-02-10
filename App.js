import React, {useEffect, useState} from 'react';
import IntroPage from './pages/IntroPage';
import SignUpPage from './pages/SignUpPage';
import SetPasswordPage from './pages/SetPasswordPage';
import SignInPage from './pages/SignInPage';
import Opponents from './pages/Opponents';
import Select from './pages/Select';
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
        headerLeft: null,
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

    Select: Select,
    Level: LevelPage,
    Sports: CitySports,

    Opponents: {
      screen: Opponents,
      navigationOptions: {
        headerTitle: 'Your Opponents',
        headerLeft: null,
      },
    },
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
