import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import {Button, Text, Toast, theme } from 'galio-framework';
import { CustomInputPassword } from '../components/CustomInput';
import { validateSetPassword, showAlertForInvalidInput } from '../components/Validation';

const SetPasswordPage = (props) => {

  const {navigation} = props;
  const [ user, setUser] = useState({});
  const [ errors, setErrors] = useState({});

  const handleInput = (value, name) => {
      setUser({ ...user, [name]: value})
      console.log(user)
  }

  const setPasswordForUser = () => {
    console.log("In set password for user method")
    
    fetch("http://192.168.1.84:3000/api/v1/users",
    {
      method: 'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        user: {
          password: user.password,
          confirmPassword: user.confirmPassword,
        }      
      })
    }).then((result) => {
      if(result.status === 200){
        console.log("User created");
        console.log(result);
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  const noErrorsPresent = (validationErrors) => {

    if(validationErrors.password !== "" ||
      validationErrors.confirmPassword !== "")
    return false

    else
      return true
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
        onPress={ () => {
            setErrors(validateSetPassword(user));
            const validationErrors = validateSetPassword(user);
            console.log(validationErrors);  

            if(noErrorsPresent(validationErrors)){
              // setPasswordForUser()
            }
            else{
              showAlertForInvalidInput(user, validationErrors)
            }
          }
        }
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