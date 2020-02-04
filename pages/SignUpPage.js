import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Picker, ScrollView, Alert } from 'react-native';
import {Button, Input, Text, Toast, theme } from 'galio-framework';
import { CustomInputText, CustomInputNumber } from '../components/CustomInput';
import { validateSignUp, showAlertForInvalidInput } from '../components/Validation';

const SignUpPage = (props) => {

  const {navigation} = props;
  
  const [datasource, setDataSource] = useState([]);
  const [pickerValue, setPickerValue] = useState("Pune");

  //Initializing user fields
  const [ user, setUser] = useState({})
  const [ errors, setErrors] = useState({})

  const handleInput = (value, name) => {
      setUser({ ...user, [name]: value})
      console.log(user)
  }

  const addUser = () => {
    console.log("In add user method")

    fetch("http://192.168.1.69:3000/api/v1/users",
    {
      method: 'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        user: {
          first_name: user.firstName,
          last_name: user.lastName,
          contact_number: user.contactNumber,
          email: user.emailId,
          city_id: user.cityId
        }      
      })
    }).then((result) => {
      if(result.status === 200){
        console.log("User created");
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  const noErrorsPresent = (validationErrors) => {

    if(validationErrors.firstName !== "" ||
      validationErrors.lastName !== "" ||
      validationErrors.contactNumber !== "" ||
      validationErrors.emailId !== "")
    return false

    else
      return true
  }

  const showAlertForEmailVerification = () => {
    Alert.alert("An email verification link has been sent to you. Please verify yourself.")
  } 
  
  const checkForSignUp = () => {
    setErrors(validateSignUp(user))
    const validationErrors = validateSignUp(user);
    console.log(validationErrors)

    if(noErrorsPresent(validationErrors)){
      addUser()
      showAlertForEmailVerification()
    }

    else{
      showAlertForInvalidInput(user, validationErrors)
    }
  }

  useEffect(()=>{
    fetch("http://192.168.1.69:3002/api/v1/cities")
    .then((response) =>  response.json())
    .then((responseJson) => {
      setDataSource(responseJson)
    })
    .catch((error) => {
      console.error(error);
    });
  },[]) 
  
  return( 
    <View style={styles.bodyContainer}>
      
      <Text h4 style={styles.registerLabel}>Register here!</Text>

      <CustomInputText 
        placeholder="First Name" 
        name="firstName" 
        defaultValue={user.firstName}
        handleInputChange={handleInput}
        borderStyle={errors.firstName ? styles.error : styles.textInputBorder}
      /> 

      <CustomInputText 
        placeholder="Last Name" 
        name="lastName" 
        defaultValue={user.lastName}
        handleInputChange={handleInput}
        borderStyle={errors.lastName ? styles.error : styles.textInputBorder}
      /> 

      <CustomInputNumber 
        placeholder="Contact Number" 
        name="contactNumber"
        defaultValue={user.contactNumber}
        handleInputChange={handleInput}
        borderStyle={errors.contactNumber ? styles.error: styles.textInputBorder}
      />
      
      <CustomInputText 
        placeholder="Email ID" 
        name="emailId" 
        defaultValue={user.emailId}
        handleInputChange={handleInput}
        borderStyle={errors.emailId ? styles.error : styles.textInputBorder }
      /> 

      <Picker
        selectedValue={pickerValue}
        style={styles.cityDropDown}
        onValueChange={(item, key) => {
          console.log(item)
          setPickerValue(item);
          handleInput(item,"cityId");
        }}
      >
        { 
          datasource.map((item, key)=>(
          <Picker.Item label={item.name} value={item.id} key={key} />))
        }
      </Picker>

      <Button 
        color="info" 
        size="small" 
        shadowColor="black" 
        round
        onPress={checkForSignUp}
        style={styles.submitButton}>    Register
      </Button>

      <Button 
        color="error" 
        size="small" 
        shadowColor="black" 
        round
        onPress={() => navigation.navigate('Intro')}
        style={styles.submitButton}>    Cancel
      </Button>

      <Button 
        color="error" 
        size="small" 
        shadowColor="black" 
        round
        onPress={() => navigation.navigate('SetPassword')}
        style={styles.submitButton}>    Set Password Page
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

  pickCity: {
    backgroundColor: 'white',
    borderColor: 'blue',
    height: 50,
    width: "90%",
  },

  submitButton: {
    margin: 10,
  },

  cityDropDown: {
    margin: 10,
    width: "90%", 
    height: 40, 
    backgroundColor: "white", 
    color: "black",
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

export default SignUpPage;