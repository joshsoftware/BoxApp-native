import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import {Button} from 'galio-framework';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';

const IntroPage = (props) => { 

  const { navigation } = props;  

  return(
    <View style={styles.body}>  

      <View style={styles.header}>
        <Text style={styles.heading}>BoQ</Text>
      </View>

      <View style={styles.features}>

      </View>

      <View style={styles.buttonsContainer}>

        <View style={styles.button}>
          <Button
            color="info" 
            size="small" 
            round 
            onPress={() => navigation.navigate('SignUp')}>
            Sign up with email
          </Button>
        </View>

        <View style={styles.button}>
          <Button 
            color="#50C7C7" 
            size="small" 
            round 
            onPress={() => navigation.navigate('SignIn')}>
            Already a user? Sign in
          </Button>
        </View>

      </View>
      
    </View> 
  );
};

const styles = StyleSheet.create({

  body:{
    backgroundColor: "#041530",
  },

  header:{
    flex:1,
    alignItems: "center",
    // borderWidth: 1, 
    // borderColor: 'black',
    padding: 100,
  },

  heading: {
    fontSize: 30,
    color: "white",
    fontSize: 50,
    // borderWidth: 1, 
    // borderColor: 'black',
  },

  buttonsContainer: {
    alignItems: "center",
    // borderWidth: 1, 
    // borderColor: 'black',
  },

  button: {
    marginTop: 20,
  },

  features: {
    padding: 120,
    // borderWidth: 1, 
    // borderColor: 'black',
  }
});

export default IntroPage;