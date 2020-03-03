import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Text } from 'galio-framework';
import { NativeRouter, Redirect, Route } from 'react-router-native';
import CustomInput from '../components/CustomInput';
import {
  validateSetPassword,
  showAlertForInvalidInput,
} from '../components/Validation';
import { setToken } from '../components/TokenManager';
import setPassword from '../actions/setPasswordAction';

const SetPasswordPage = props => {
  const { navigation } = props;
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});
  let confirmationToken;

  const dispatch = useDispatch();
  const PasswordToken = useSelector(state => state.setPasswordReducer);

  console.log(PasswordToken);

  useEffect(() => {
    confirmationToken = navigation.state.params.confirm;
  });

  const handleInput = (value, name) => {
    setUser({ ...user, [name]: value });
  };

  const setPasswordForUser = () => {
    dispatch(setPassword(confirmationToken, user));
    // navigation.navigate('Sports');

    confirmationToken = '';

    // ApiHelper(
    //   'set_password',
    //   JSON.stringify({
    //     user: {
    //       confirmation_token: confirmationToken,
    //       password: user.password,
    //       password_confirmation: user.confirmPassword,
    //     },
    //   }),
    //   {},
    //   'POST',
    // )
    // .then(responseJson => {
    //   if (responseJson.error) {
    //     Alert.alert('Server Error', responseJson.error);
    //   } else {
    //     setToken('setPasswordToken', responseJson);
    //     Alert.alert('Successful', 'Password has been set successfully..');
    //     navigation.navigate('Sports', { token: responseJson });
    //   }
    // })
    // .catch(err => {
    //   Alert.alert(
    //     'Server error',
    //     'An unexpected error has occured, unable to set password..',
    //   );
    // });
  };

  const noErrorsPresent = validationErrors => {
    return !validationErrors.password && !validationErrors.confirmPassword;
  };

  const cancelPressed = () => {
    navigation.navigate('Intro');
  };

  /* Function to check whether input fields are valid
      If so, api call for setting the password
      Else alert with invalid input is shown  */
  const checkForSetPassword = () => {
    setErrors(validateSetPassword(user));
    const validationErrors = validateSetPassword(user);

    if (noErrorsPresent(validationErrors)) {
      setPasswordForUser();
    } else {
      showAlertForInvalidInput(validationErrors);
    }
  };

  <Route>
    {PasswordToken
      ? (console.log('yyyyyyyy'), (<Redirect to="intro" />))
      : console.log('NNNNNNNNNNN')
    // <Redirect to="/setpassword" />
    }
  </Route>;

  return (
    <NativeRouter>
      <View style={styles.bodyContainer}>
        <Text h4 style={styles.registerLabel}>
          Set password here
        </Text>

        <CustomInput
          placeholder="Password"
          name="password"
          defaultValue={user.password}
          handleInputChange={handleInput}
          secureTextEntry
          borderStyle={errors.password ? styles.error : styles.textInputBorder}
        />

        <CustomInput
          placeholder="Confirm Password"
          name="confirmPassword"
          defaultValue={user.confirmPassword}
          handleInputChange={handleInput}
          secureTextEntry
          borderStyle={
            errors.confirmPassword ? styles.error : styles.textInputBorder
          }
        />

        <Button
          color="info"
          size="small"
          shadowColor="black"
          round
          onPress={checkForSetPassword}
          style={styles.submitButton}>
          Confirm
        </Button>

        <Button
          color="error"
          size="small"
          shadowColor="black"
          round
          onPress={cancelPressed}
          style={styles.submitButton}>
          Cancel
        </Button>
      </View>

      {/* <Route path="intro" component={Confirm} /> */}
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    padding: '10%',
    justifyContent: 'center',
    backgroundColor: '#041530',
  },

  registerLabel: {
    padding: '10%',
    color: 'white',
  },

  submitButton: {
    margin: 10,
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

export default SetPasswordPage;
