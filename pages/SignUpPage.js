import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Picker, ScrollView, Alert } from 'react-native';
import {Button, Input, Text, Toast, theme } from 'galio-framework';
import {CustomInputText, CustomInputNumber, CustomInputPassword} from '../components/CustomInput';
import { validator, validateName, validateNumber, validateEmailId } from '../components/Validation';

const SignUpPage = (props) => {

  const {navigation} = props;
  const [datasource, setDataSource] = useState([]);
  const [pickerValue, setPickerValue] = useState("Pune");
  const [isShowToast, setShowToast] = useState(false);
  const [variableInToast, setVariableInToast] = useState("");

  //Initializing user fields
  const [ user, setUser] = useState({})

  const handleInput = (value, name) => {

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

  const showAlertForEmailVerification = () => {
    Alert.alert("An email verification link has been sent to you. Please verify yourself.")
  } 

  useEffect(()=>{
    fetch("http://192.168.1.69:3000/api/v1/cities")
    .then((response) =>  response.json())
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

      <Toast 
        isShow={isShowToast} 
        color="red"
        style={{margin: 40}}
      >
        <Text style={{color:"white"}}>
          Please enter a valid {variableInToast}.
        </Text>
      </Toast>

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
        onPress={ () => {
            addUser()
            showAlertForEmailVerification()
          }
        }
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
});

export default SignUpPage;