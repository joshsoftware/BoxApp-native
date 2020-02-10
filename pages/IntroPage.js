import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import {Button} from 'galio-framework';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';

const IntroPage = props => {
  const {navigation} = props;

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.heading}>BoQ</Text>
      </View>

      <View style={styles.features}>
        <Image
          style={styles.coverImage}
          source={{
            uri: 'https://i.ya-webdesign.com/images/badminton-clipart-5.png',
          }}
        />
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
  body: {
    backgroundColor: '#041530',
    flex: 1,
  },

  header: {
    flex: 1,
    alignItems: 'center',
    padding: 70,
  },

  heading: {
    fontSize: 30,
    color: 'white',
    fontSize: 50,
  },

  buttonsContainer: {
    alignItems: 'center',
    padding: 30,
  },

  button: {
    marginTop: 20,
  },

  features: {
    padding: 10,
    alignItems: 'center',
  },

  coverImage: {
    width: 300,
    height: 300,
  },
});

export default IntroPage;
