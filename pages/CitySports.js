import React, { useState, useEffect } from 'react';
import { StyleSheet, View, BackHandler, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from 'galio-framework';
import Grid from './Grid';
import ApiHelper from './ApiHelper';
import { fetchSports } from '../actions/getSportsAction';

const CitySports = props => {
  const { navigation } = props;
  const tokenObject = navigation.getParam('token');

  const dispatch = useDispatch();
  const sportsList = useSelector(state => state.sportsReducer);

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
      dispatch(fetchSports());
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

  if (sportsList.sportsForCity.length > 0) {
    return (
      <View style={styles.body}>
        <Grid items={sportsList.sportsForCity} setLevelChange={onSelect} />
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
