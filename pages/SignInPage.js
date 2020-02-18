import React, { useState } from 'react';
import { StyleSheet, ScrollView, Alert } from 'react-native';
import { Button, Text } from 'galio-framework';
import CustomInput from '../components/CustomInput';
import {
  validateSignIn,
  showAlertForInvalidInput,
} from '../components/Validation';
import { setToken } from '../components/TokenManager';
import ApiHelper from './ApiHelper';

// Component to manage the Sign in page
const SignInPage = props => {
  const { navigation } = props;
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});

  const handleInput = (value, name) => {
    setUser({ ...user, [name]: value });
  };

  const signIn = () => {
    ApiHelper(
      'sessions',
      JSON.stringify({
        email: user.emailId,
        password: user.password,
      }),
      {},
      'POST',
    )
      .then(responseJson => {
        if (responseJson.error) {
          Alert.alert(
            'Invalid details',
            'Sorry email id or password is incorrect..',
          );
        } else {
          setToken('signInToken', responseJson);
          navigation.navigate('Opponents', { token: responseJson.token });
        }
      })
      .catch(error => {
        Alert.alert(
          'Server error',
          'An unexpected error has occured, cannot sign in..',
        );
      });
  };

  const noErrorsPresent = validationErrors => {
    return !validationErrors.emailId && !validationErrors.password;
  };

  /* Function to check whether input fields are valid
    If so, api call for sign in
    Else alert with invalid input is shown  */
  const checkForSignIn = () => {
    setErrors(validateSignIn(user));
    const validationErrors = validateSignIn(user);

    if (noErrorsPresent(validationErrors)) {
      signIn();
    } else {
      showAlertForInvalidInput(validationErrors);
    }
  };

  return (
    <ScrollView style={styles.bodyContainer} centerContent>
      <Text h4 style={styles.signInLabel}>
        Sign In
      </Text>

      <CustomInput
        placeholder="Email ID"
        name="emailId"
        defaultValue={user.emailId}
        handleInputChange={handleInput}
        borderStyle={errors.emailId ? styles.error : styles.textInputBorder}
      />

      <CustomInput
        placeholder="Password"
        name="password"
        defaultValue={user.password}
        handleInputChange={handleInput}
        secureTextEntry
        borderStyle={errors.password ? styles.error : styles.textInputBorder}
      />

      <Button
        color="info"
        size="small"
        shadowColor="black"
        round
        style={styles.submitButton}
        onPress={checkForSignIn}>
        Sign In
      </Button>

      <Button
        color="error"
        size="small"
        shadowColor="black"
        round
        onPress={() => navigation.navigate('Intro')}
        style={styles.submitButton}>
        Cancel
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    padding: '10%',
    backgroundColor: '#041530',
  },

  signInLabel: {
    padding: '10%',
    color: 'white',
    alignSelf: 'center',
  },

  submitButton: {
    margin: 10,
    alignSelf: 'center',
  },

  error: {
    borderColor: 'red',
    borderWidth: 2,
  },

  textInputBorder: {
    borderColor: 'yellow',
    borderWidth: 1,
  },
});

export default SignInPage;
