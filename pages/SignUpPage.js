import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Picker, ScrollView } from 'react-native';
import {Button, Input, Text, Block, theme } from 'galio-framework';
import {CustomInputText, CustomInputNumber, CustomInputPassword} from '../components/CustomInput';

const SignUpPage = (props) => {

  const {navigation} = props;
  const [datasource, setDataSource] = useState([]);
  const [pickerValue, setPickerValue] = useState("Pune");

  //Initializing user fields
  const [ user, setUser] = useState({})

  const handleInput = (value, name) => {
    console.log(value)
    setUser({ ...user, [name]: value})
    console.log(user)
  }

  const addUser = () => {
    console.log("In add user method")
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
          password: user.password,
          city_id: user.cityId
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

  useEffect(()=>{
    fetch("http://192.168.1.82:3000/api/v1/cities")
    .then((response) => response.json())
    .then((responseJson) => {
      setDataSource(responseJson)
    })
    .catch((error) => {
      console.error(error);
    });
  }) 
  
  return( 
    <View style={styles.bodyContainer}>
      
      <Text h4 style={styles.registerLabel}>Register here!</Text>

      <CustomInputText 
        placeholder="First Name" 
        name="firstName" 
        defaultValue={user.firstName}
        handleInputChange={handleInput}
      /> 

      <CustomInputText 
        placeholder="Last Name" 
        name="lastName" 
        defaultValue={user.lastName}
        handleInputChange={handleInput}
      /> 

      <CustomInputNumber 
        placeholder="Contact Number" 
        name="contactNumber"
        defaultValue={user.contactNumber}
        handleInputChange={handleInput}
      />
      
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

      <CustomInputPassword 
        placeholder="Confirm Password" 
        name="confirmPassword"
        defaultValue={user.confirmPassword}
        handleInputChange={handleInput}
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
        onPress={addUser}
        style={styles.submitButton}>    Submit
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
});

export default SignUpPage;