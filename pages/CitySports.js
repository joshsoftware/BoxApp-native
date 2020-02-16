import React, { useState, useEffect } from 'react';
import { StyleSheet, View, BackHandler, Alert } from 'react-native';
import { Text } from 'galio-framework';
import Grid from './Grid';
import ApiHelper from './ApiHelper';

const CitySports = props => {
  const { navigation } = props;
  const [datasource, setDataSource] = useState([]);
  const tokenObject = navigation.getParam('token');

  /* Fetch sports list for user city */
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      Alert.alert('Exit', 'Are you sure you want to exit?', [
        {
          text: 'Cancel',
          onPress: () => {},
        },
        {
          text: 'OK',
          onPress: () => {
            BackHandler.exitApp();
          },
        },
      ]);
      return true;
    });

    if (tokenObject.token) {
      ApiHelper('city_sports/display', null, {}, 'GET', {
        'user-auth-token': tokenObject.token,
      })
        .then(responseJson => {
          setDataSource(responseJson);
        })
        .catch(error => {
          Alert.alert(
            'Server error',
            'An unexpected error has occured, unable to fetch sports..',
          );
        });
    }
  }, [tokenObject]);

  const onSelect = (number, name) => {
    const sportId = number;
    const sportName = name;
    navigation.navigate('Level', {
      sport: sportId,
      sportname: sportName,
      token: tokenObject.token,
    });
  };

  if (datasource.length > 0) {
    return (
      <View style={styles.body}>
        <Grid items={datasource} setLevelChange={onSelect} />
      </View>
    );
  }
  return <Text>Loading.....</Text>;
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#041530',
    flex: 1,
  },
});

export default CitySports;
