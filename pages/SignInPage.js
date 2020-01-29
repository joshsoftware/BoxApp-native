import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {Button, Input, Text, Block, theme } from 'galio-framework';
import { CustomInputText, CustomInputPassword } from '../components/CustomInput';
import YourOpponentsPage from '../pages/YourOpponentsPage';
import AsyncStorage from '@react-native-community/async-storage';


//Component to manage the Sign in page
const SignInPage = (props) => {

  const {navigation} = props;

  //Method to be called when Sign in button is pressed
  const signIn = () => {
    console.log("In signIn method")
    fetch("http://192.168.1.84:3000/api/v1/auth/login",
    {
      method: 'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        user: {
          email: user.emailId,
          password: user.password
        }      
      })
    })
    .then((response) =>  response.json())
    .then((responseJson) => {
      setToken(responseJson)
    })
    .catch((error) => {
      console.error(error);
    });
  }

  const setToken = async(tokenObject) => {
    try {
      await AsyncStorage.setItem('tokenObject', JSON.stringify(tokenObject))
    } 
    catch (e) { 
      console.log(e)  
    }
  }

  const getToken = async() => {
    try{
      const tokenObject = await AsyncStorage.getItem('tokenObject')
      const tokenParsed = JSON.parse(tokenObject);
    }
    catch(e){
      console.log(e);
    }
  }
  
  const [ user, setUser] = useState({})
  const handleInput = (value, name) => {
    console.log(value);
    setUser({ ...user, [name]: value})
    console.log(user);
  }

  return(
    <View style={styles.bodyContainer}>
      
      <Text h4 style={styles.signInLabel}>Sign In!</Text>
      
      <CustomInputText 
        placeholder="Email ID" 
        name="emailId" 
        defaultValue={user.emailId}
        handleInputChange={handleInput}
      /> 

      <CustomInputPassword 
        placeholder="Password" 
        name="password"
        defaultValue={user.password}
        handleInputChange={handleInput}
      />

      <Button 
        onPress={signIn}
        color="info" 
        size="small" 
        shadowColor="black" 
        round
        style={styles.submitButton}>    Sign In
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
});


export default SignInPage;