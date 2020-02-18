import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import Grid from './Grid';
import ApiHelper from './ApiHelper';

const LevelPage = props => {
  const { navigation } = props;
  const [datasource, setDataSource] = useState([]);
  let level = 0;
  const sportId = JSON.stringify(navigation.getParam('sport'));
  const sportName = JSON.stringify(navigation.getParam('sportname'));
  const token = navigation.getParam('token');

  useEffect(() => {
    ApiHelper(
      'city_sport_levels',
      JSON.stringify({ sport_id: sportId }),
      {},
      'POST',
      {
        'user-auth-token': token,
      },
    )
      .then(responseJson => {
        setDataSource(responseJson);
      })
      .catch(error => {
        Alert.alert('Server error', 'Sorry, an unexpected error has occured..');
      });
  }, []);

  const addLevel = (token, sportID, level) => {
    ApiHelper(
      'level_sports',
      JSON.stringify({
        sport_id: sportID,
        level_id: level,
      }),
      {},
      'POST',
      { 'user-auth-token': token },
    )
      .then(responseJson => {
        Alert.alert('Sports and level status', responseJson.message);
        navigation.navigate('Opponents', { token });
      })
      .catch(err => {
        Alert.alert(
          'Server Error',
          'An unexpected error has occured, unable to store selected sport and level.',
        );
      });
  };

  const setLevel = (id, name, freeSlots) => {
    if (freeSlots === 0) {
      Alert.alert('SORRY!', 'This box is full. Please select another box.');
      return;
    }
    Alert.alert(
      `Level ${name} selected`,
      'Are you sure you want to select this level?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
        },
        {
          text: 'OK',
          onPress: () => addLevel(token, sportId, level),
        },
      ],
    );
    level = id;
  };

  if (datasource.length > 0) {
    return (
      <View styles={styles.bodyContainer}>
        <Grid items={datasource} setLevelChange={setLevel} />
      </View>
    );
  }
  return (
    <View style={styles.levelsContainer}>
      <Text style={styles.levels}>
        Sorry, There are no levels available for this sport.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    padding: '5%',
    justifyContent: 'center',
    backgroundColor: '#041530',
  },
  item: {
    flex: 1,
    height: 100,
    margin: 1,
    borderColor: 'black',
    borderWidth: 5,
    backgroundColor: 'pink',
  },
  list: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  submitButton: {
    margin: 10,
  },
  levels: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
  },
  levelsContainer: {
    flex: 1,
    padding: '10%',
    backgroundColor: '#041530',
  },
});

export default LevelPage;
