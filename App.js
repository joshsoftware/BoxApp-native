import React, { useEffect, useState } from 'react';
import IntroPage from './pages/IntroPage';
import SignUpPage from './pages/SignUpPage';
import SetPasswordPage from './pages/SetPasswordPage';
import SignInPage from './pages/SignInPage';
import YourOpponentsPage from './pages/YourOpponentsPage';
import SelectSport from './pages/SelectSport';
import LevelPage from './pages/LevelPage';
import CitySports from './pages/CitySports';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const RootStack = createStackNavigator(
  {
    Intro: {
      screen:  IntroPage,
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

const App = () => {

  const prefix = "app://boxapp/"

  return (
    <AppContainer uriPrefix={prefix} />
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;