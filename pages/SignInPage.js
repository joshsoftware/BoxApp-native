import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {Button, Input, Text, Block, theme } from 'galio-framework';
import { CustomInputText, CustomInputPassword } from '../components/CustomInput';

const SignInPage = (props) => {

  const {navigation} = props;

  // const [emailId, setEmailId] = useState('');
  // const [password, setPassword] = useState('');

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
    }).then((result) => {
      if(result.status === 200){
        console.log("Signed in successfully");
        console.log(result);
      }
    }).catch((err) => {
      console.log(err);
    })
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

  buttonsContainer:{
    // borderWidth: 1,
    // borderColor: 'black',
  },

  submitButton: {
    margin: 10,
  },
});


export default SignInPage;