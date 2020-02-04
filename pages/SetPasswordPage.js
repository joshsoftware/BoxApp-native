import React, { useState } from 'react';
import { StyleSheet, View, Linking, Alert } from 'react-native';
import {Button, Text } from 'galio-framework';
import { CustomInputPassword } from '../components/CustomInput';
import { validateSetPassword, showAlertForInvalidInput } from '../components/Validation';
import { setToken, getToken } from '../components/TokenManager';
import qs from 'qs';

const SetPasswordPage = (props) => {

  const { navigation } = props;
  const [ user, setUser] = useState({});
  const [ errors, setErrors] = useState({});

  const handleInput = (value, name) => {
      setUser({ ...user, [name]: value})
      console.log(user)
  }

  const extractTokenFromURL = () => {
    console.log("In extract token")
    Linking.getInitialURL().then((url) => {
      if (url) {
        console.log('Initial url is: ' + url); 

        //url1 = "app://boxapp/setpassword?confirm=NPKZ9qxgWypV7Qmei1eP"
        let urlArray=url.split("?")
        let queryParams = urlArray[1]
        let setPasswordToken = qs.parse(queryParams).confirm
        console.log(setPasswordToken)
        setToken('setPasswordToken', setPasswordToken)
        return setPasswordToken
      }
    }).catch(err => console.error(err));
  } 


  const setPasswordForUser = () => {
    console.log("In set password for user method")
    
    fetch("http://192.168.1.69:3000/api/v1/setpwd",
    {
      method: 'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        user: {
          confirmation_token: extractTokenFromURL(),
          password: user.password,
          password_confirmation: user.confirmPassword,
        }      
      })
    }).then((result) => {
      if(result.status === 200){
        navigation.navigate('YourOpponents')
      }
      else{
        Alert.alert("Unsuccessful","Sorry, password has not been set..")
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
              setPasswordForUser()
              //navigation.navigate('YourOpponents')
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