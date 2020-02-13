import React, {useEffect} from 'react';
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
import {getToken} from './components/TokenManager';

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

  Select: Select,
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
});

const AppContainer = createAppContainer(RootStack);

const App = () => {
  const prefix = 'app://boxapp';

  //Fetch token of user if available and navigate accordingly
  const fetchToken = async () => {
    const storedToken = await getToken('signInToken');
    console.log(storedToken);
    return storedToken;
  };

  return <AppContainer uriPrefix={prefix} />;
};

export default App;
