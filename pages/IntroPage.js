import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import {Button} from 'galio-framework';

const IntroPage = props => {
  const {navigation} = props;
  return (
    <ScrollView style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.heading}>
          Bo
          <Image
            style={styles.headerImage}
            source={require('../images/TennisBatNew.png')}
          />
          S
        </Text>

        <Text style={styles.tagline}>Level up your game..</Text>
      </View>

      <View style={styles.features}>
        <Image
          style={styles.coverImage}
          source={require('../images/cover.png')}
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
    </ScrollView>
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
    fontSize: 40,
    color: 'white',
  },

  tagline: {
    fontSize: 15,
    color: 'white',
    padding: 5,
  },

  buttonsContainer: {
    alignItems: 'center',
    padding: 10,
  },

  button: {
    marginTop: 20,
  },

  features: {
    padding: 10,
    height: 200,
    alignItems: 'center',
  },

  coverImage: {
    width: '80%',
    height: 200,
  },

  headerImage: {
    width: 40,
    borderColor: 'white',
    borderWidth: 1,
    height: 40,
  },
});

export default IntroPage;
