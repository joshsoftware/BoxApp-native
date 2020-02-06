import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import {Button, Text } from 'galio-framework';
import { CustomInputPassword } from '../components/CustomInput';
import { validateSetPassword, showAlertForInvalidInput } from '../components/Validation';
import { setToken } from '../components/TokenManager';
import qs from 'qs';

const SetPasswordPage = (props) => {
  const { navigation } = props;
  const [ user, setUser] = useState({});
  const [ errors, setErrors] = useState({});
  let confirmationToken;

  useEffect(() => {
    confirmationToken=navigation.state.params.confirm
  })
  
  const handleInput = (value, name) => {
    setUser({ ...user, [name]: value})
  }

  const setPasswordForUser = () => {
    console.log(confirmationToken)
    fetch("http://192.168.1.84:3000/api/v1/setpwd",
    {
      method: 'POST',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        user: {
          confirmation_token: confirmationToken,
          password: user.password,
          password_confirmation: user.confirmPassword,
        }      
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      setToken('setPasswordToken',responseJson)
      Alert.alert("Password has been set successfully..")
      navigation.navigate('YourOpponents')
    })
    .catch((err) => {
      console.log("Error",err);
    })
    confirmationToken=""
  }

  const noErrorsPresent = (validationErrors) => {
    return !validationErrors.password && !validationErrors.confirmPassword
  }

  /* Function to check whether input fields are valid
      If so, api call for setting the password
      Else alert with invalid input is shown  */
  const checkForSetPassword = () => {
    setErrors(validateSetPassword(user));
    const validationErrors = validateSetPassword(user);

    if(noErrorsPresent(validationErrors)){
      setPasswordForUser()
    }
    else{
      showAlertForInvalidInput(user, validationErrors)
    }
  }

  return(
    <View style={styles.bodyContainer}>
      
      <Text h4 style={styles.registerLabel}>Set password here..</Text>

      <CustomInputPassword 
        placeholder="Password" 
        name="password"
        defaultValue={user.password}
        handleInputChange={handleInput}
        borderStyle={ errors.password ? styles.error : styles.textInputBorder }
      />

      <CustomInputPassword 
        placeholder="Confirm Password" 
        name="confirmPassword"
        defaultValue={user.confirmPassword}
        handleInputChange={handleInput}
        borderStyle={ errors.confirmPassword ? styles.error : styles.textInputBorder }
      />

      <Button 
        color="info" 
        size="small" 
        shadowColor="black" 
        round
        onPress={checkForSetPassword}
        style={styles.submitButton}>    Confirm
      </Button>

      <Button 
        color="error" 
        size="small" 
        shadowColor="black" 
        round
        onPress={() => navigation.navigate('Intro')}
        style={styles.submitButton}>    Cancel
      </Button>

    </View>
  )
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    alignItems: "center",
    padding: "10%",
    justifyContent: 'center',
    backgroundColor: '#041530',
  },

  registerLabel: {
    padding: "10%",
    color: "white",
  },

  submitButton: {
    margin: 10,
  },

  error: {
    borderColor: "red",
    borderWidth: 2,
  },

  textInputBorder: {
    borderColor: "yellow",
    borderWidth: 1,
  }
})

export default SetPasswordPage;