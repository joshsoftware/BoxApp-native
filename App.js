import React from 'react';
import IntroPage from './pages/IntroPage';
import SignUpPage from './pages/SignUpPage';
import SetPasswordPage from './pages/SetPasswordPage';
import SignInPage from './pages/SignInPage';
import YourOpponentsPage from './pages/YourOpponentsPage';
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
  },
  {
    initialRouteName: 'Intro',
  },
);

const AppContainer = createAppContainer(RootStack);

const App = () => {

  const prefix = "app://boxapp/"
  return (
    <AppContainer uriPrefix={prefix} />
  );
};

export default App;
