import React, { useState, useEffect } from 'react';
import { StyleSheet, View, BackHandler, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from 'galio-framework';
import Grid from './Grid';
import getSports from '../actions/getSportsAction';

const CitySports = props => {
  const { navigation } = props;
  // const tokenObject = navigation.getParam('token');

  const dispatch = useDispatch();
  const sportsList = useSelector(state => state.sportsReducer);
  const PasswordToken = useSelector(state => state.setPasswordReducer);
  // let { token } = PasswordToken.userPasswordToken;

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

    dispatch(getSports());

    // if (tokenObject.token) {
    //   dispatch(fetchSports());
    // }
  }, []);

  const onSelect = () => {
    navigation.navigate('Level');
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
