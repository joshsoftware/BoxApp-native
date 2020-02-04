import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import {Button, Input, Text, Toast, theme } from 'galio-framework';
import { CustomInputText, CustomInputPassword } from '../components/CustomInput';
import YourOpponentsPage from '../pages/YourOpponentsPage';
import { validateSignIn, showAlertForInvalidInput } from '../components/Validation';
import { setToken, getToken } from '../components/TokenManager';

//Component to manage the Sign in page
const SignInPage = (props) => {

  const {navigation} = props;

  const [ user, setUser] = useState({})
  const [ errors, setErrors] = useState({})

  const handleInput = (value, name) => {
      setUser({ ...user, [name]: value})
      console.log(user)
  }

  //Method to be called when Sign in button is pressed
  const signIn = () => {
    console.log("In signIn method")
    fetch("http://192.168.1.69:3000/api/v1/sessions",
    {
      method: 'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
          email: user.emailId,
          password: user.password
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.error){
        Alert.alert("Invalid details","Sorry email id or password is incorrect..")
      }
      else{
        setToken('signInToken',responseJson)
        navigation.navigate('YourOpponents')
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  const noErrorsPresent = (validationErrors) => {

    if(validationErrors.emailId !== "" ||
      validationErrors.password !== "")
    return false

    else
      return true
  }

  const checkForSignIn = () => {
    setErrors(validateSignIn(user))
    const validationErrors = validateSignIn(user)
    console.log(validationErrors)

    if(noErrorsPresent(validationErrors)){
      console.log("No errors")
      signIn()
    }
    else{
      showAlertForInvalidInput(user, validationErrors);
    }
  } 

  return(
    <View style={styles.bodyContainer}>
      
      <Text h4 style={styles.signInLabel}>Sign In!</Text>

      <CustomInputText 
        placeholder="Email ID" 
        name="emailId" 
        defaultValue={user.emailId}
        handleInputChange={handleInput}
        borderStyle={errors.emailId? styles.error : styles.textInputBorder}
      /> 

      <CustomInputPassword 
        placeholder="Password" 
        name="password"
        defaultValue={user.password}
        handleInputChange={handleInput}
        borderStyle={errors.password? styles.error : styles.textInputBorder}
      />

      <Button 
        color="info" 
        size="small" 
        shadowColor="black" 
        round
        style={styles.submitButton}
        onPress={ checkForSignIn }>    Sign In
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
    backgroundColor: '#041530'
  },

  signInLabel: {
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
});


export default SignInPage;