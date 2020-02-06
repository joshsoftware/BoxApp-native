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
  }

  const addUser = () => {
    fetch("http://192.168.1.84:3000/api/v1/users",
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
      if(result.ok){
        console.log("User created");
        showAlertForEmailVerification()
      }
    }).catch((error) => {
      console.log(error);
    })
  }

  const noErrorsPresent = (validationErrors) => {
    return !validationErrors.firstName && !validationErrors.lastName && 
    !validationErrors.contactNumber && !validationErrors.emailId
  }

  const showAlertForEmailVerification = () => {
    Alert.alert("Email Verification","An email verification link has been sent to you. Please verify yourself.")
  }
  
  const showAlertForEmailExists = () => {
    Alert.alert("Already Registered","This email address is already registered.")
  }

  const showAlertForServerError = () => {
    Alert.alert("Server Error","Sorry, cannot process further. Server error..")
  }

  const checkForSignUp = () => {
    setErrors(validateSignUp(user))
    const validationErrors = validateSignUp(user);

    if(noErrorsPresent(validationErrors)){
      addUser()
    }
    else{
      showAlertForInvalidInput(user, validationErrors)
    }
  }

  useEffect(()=>{
    fetch("http://192.168.1.84:3000/api/v1/cities")
    .then((response) =>  response.json())
    .then((responseJson) => {
      setDataSource(responseJson)
    })
    .catch((error) => {
      console.error(error);
    });
  },[]) 
  
  const pickerHandler = (item, key) => {
    setPickerValue(item);
    handleInput(item,"cityId");
  }

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
        onValueChange={pickerHandler}
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