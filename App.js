import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IntroPage from './pages/IntroPage';
import SignUpPage from './pages/SignUpPage';
import SetPasswordPage from './pages/SetPasswordPage';
import SignInPage from './pages/SignInPage';
import Opponents from './pages/Opponents';
import LevelPage from './pages/LevelPage';
import CitySports from './pages/CitySports';

const RootStack = createStackNavigator({
  Intro: {
    screen: IntroPage,
    navigationOptions: {
      headerShown: false,
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
      headerLeft: () => {
        null;
      },
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

  Level: {
    screen: LevelPage,
    navigationOptions: {
      headerTitle: 'Select Level',
    },
  },

  Sports: {
    screen: CitySports,
    navigationOptions: {
      headerTitle: 'Select Sport',
      headerLeft: () => {
        null;
      },
    },
  },

  Opponents: {
    screen: Opponents,
    navigationOptions: {
      headerTitle: 'Your Opponents',
      headerLeft: () => {
        null;
      },
    },
    path: 'opponents',
  },

  initialRouteName: 'Intro',
});

const AppContainer = createAppContainer(RootStack);

const App = () => {
  const prefix = 'app://boxapp/';

  return <AppContainer uriPrefix={prefix} />;
};

export default App;
