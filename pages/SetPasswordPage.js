import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import {Button, Text, Toast, theme } from 'galio-framework';
import { CustomInputPassword } from '../components/CustomInput';
import { validator } from '../components/Validation';

const SetPasswordPage = (props) => {

  const {navigation} = props;
  const [ user, setUser] = useState({});
  const [isShowToast, setShowToast] = useState(false);
  const [variableInToast, setVariableInToast] = useState("");

  const handleInput = (value, name) => {

    if(name==="confirmPassword")
    {
      if(user.password===value)
        setUser({ ...user, [name]: value})
      else{
        setShowToast(true)
        setVariableInToast("Passwords are not matching.")
      }
      return
    }

    if(validator(name, value)){
      setShowToast(false)
      setUser({ ...user, [name]: value})
      console.log(user)
    }
    else{
      setShowToast(true)
      setVariableInToast(name)
    }
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

  return(
    <View style={styles.bodyContainer}>
      
      <Text h4 style={styles.registerLabel}>Set password here..</Text>

      <Toast 
        isShow={isShowToast} 
        color="red"
        style={{margin: 40}}
      >
        <Text style={{color:"white"}}>
          Please enter a valid {variableInToast}.
        </Text>
      </Toast>

      <CustomInputPassword 
        placeholder="Password" 
        name="password"
        defaultValue={user.password}
        handleInputChange={handleInput}
      />

      <CustomInputPassword 
        placeholder="Confirm Password" 
        name="confirmPassword"
        defaultValue={user.confirmPassword}
        handleInputChange={handleInput}
      />

      <Button 
        color="info" 
        size="small" 
        shadowColor="black" 
        round
        onPress={setPasswordForUser}
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

})

export default SetPasswordPage;