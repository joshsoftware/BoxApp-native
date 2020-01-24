import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {Button, Input, Text, Block, theme } from 'galio-framework';

const SignInPage = (props) => {

  const {navigation} = props;

  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');

  return(
    <View style={styles.bodyContainer}>
      
      <Text h4 style={styles.signInLabel}>Sign In!</Text>
      
      <Input 
        placeholder="Email ID" 
        value={emailId}
        onChangeText={ e => setEmailId(e.target.value) }
        style={{ borderColor: theme.COLORS.INFO }} 
        color="black" rounded 
      />

      <Input 
        placeholder="Password" 
        secureTextEntry = {true}
        value={password}
        onChangeText={ e => setPassword(e.target.value) }
        style={{ borderColor: theme.COLORS.INFO }} 
        color="black" rounded 
      />

      <Button 
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
    // borderColor: 'black',
    // borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: '#cff089',
  },

  signInLabel: {
    padding: "10%",
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