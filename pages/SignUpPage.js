import React, { useState } from 'react';
import { StyleSheet, View, Picker } from 'react-native';
import {Button, Input, Text, Block, theme } from 'galio-framework';

const SignUpPage = (props) => {

  const {navigation} = props;

  //Initializing user fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [ user, setUser] = useState({})
  
  const handleInput = (e) => {
    const { name, value} = e.target;
    setUser({ ...user, [name]: value})

  }

  //Methods to validate the input field provided by the user
  const firstNameHandler = inputFirstName => {
    setFirstName(inputFirstName.replace(/[^a-zA-Z]/g,''));
  }

  const lastNameHandler = inputLastName => {
    setLastName(inputLastName.replace(/[^a-zA-Z]/g,''));
  }

  const contactNumberHandler = inputContactNumber => {
    setContactNumber(inputContactNumber.replace(/[^0-9]/g,''));
  };

  const emailIdHandler = inputEmailId => {
    setEmailId();
  }

  const passwordHandler = inputPassword => {
    setPassword();
  };

  const confirmPasswordHandler = inputContactNumber => {
    setConfirmPassword();
  };

  return(
    <View style={styles.bodyContainer}>
      
      <Text h4 style={styles.registerLabel}>Register here!</Text>

      <Input 
        placeholder="First Name" 
        style={{ borderColor: theme.COLORS.THEME }} 
        value={firstName}
        onChangeText={firstNameHandler}
        color="black" rounded
      />

      <Input 
        placeholder="Last Name" 
        style={{ borderColor: theme.COLORS.THEME }} 
        value={lastName}
        onChangeText={lastNameHandler}
        color="black" rounded
      />

      <Input 
        placeholder="Contact Number" 
        keyboardType="number-pad"
        maxLength={10}
        value={contactNumber}
        onChangeText={contactNumberHandler}
        style={{ borderColor: theme.COLORS.INFO }} 
        color="black" rounded 
      />
      
      <Input 
        placeholder="Email ID" 
        value={emailId}
        onChangeText={emailIdHandler}
        style={{ borderColor: theme.COLORS.INFO }} 
        color="black" rounded 
      />

      <Input 
        placeholder="Password" 
        secureTextEntry = {true}
        value={password}
        onChangeText={passwordHandler}
        style={{ borderColor: theme.COLORS.INFO }} 
        color="black" rounded 
      />

      <Input 
        placeholder="Confirm Password" 
        secureTextEntry = {true}
        value={confirmPassword}
        onChangeText={confirmPasswordHandler}
        style={{ borderColor: theme.COLORS.INFO }} 
        color="black" rounded 
      />

      <Picker style={styles.pickCity}>
        <Picker.Item label="Select location"/>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>

      <Button 
        color="info" 
        size="small" 
        shadowColor="black" 
        round
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
    // borderColor: 'black',
    // borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: '#cff089',
  },

  registerLabel: {
    padding: "10%",
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
});

export default SignUpPage;