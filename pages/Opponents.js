/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  BackHandler,
  Alert,
} from 'react-native';
import { Button } from 'galio-framework';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Mycard from './MyCard';
import ApiHelper from './ApiHelper';
import { getToken } from '../components/TokenManager';
import { listOpponents } from '../actions/getOpponentsAction';
import opponentsReducer from '../reducers/opponentsReducer';

const Opponents = props => {
  const { navigation } = props;
  const [datasource, setDataSource] = useState([]);
  const [fetchOpponents, setFetchOpponents] = useState(false);
  const [noOfPlayersRemainingText, setNoOfPlayersRemainingText] = useState('');

  const dispatch = useDispatch();
  const opponentReducer = useSelector(state => state.opponentsReducer);

  const signinDetails = useSelector(state => state.signInReducer);
  const { token } = signinDetails.userSignInDetails[0];

  useEffect(() => {
    dispatch(listOpponents(token));

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
  }, []);

  const signOut = () => {
    AsyncStorage.clear();
    navigation.navigate('Intro');
  };

  const count = Object.keys(datasource).length;
  if (opponentReducer.OpponentsList.opponents.length > 0) {
    return (
      <View style={styles.bodyContainer}>
        <View style={styles.buttonsContainer}>
          <Button
            color="info"
            size="small"
            shadowColor="black"
            round
            onPress={signOut}>
            Sign Out
          </Button>
        </View>

        <View>
          {opponentReducer.OpponentsList.opponents.map((user, i) => {
            return (
              <View key={i}>
                <ScrollView>
                  <Mycard
                    key={user.id}
                    name={`${user.first_name} ${user.last_name}`}
                    number={user.contact_number}
                  />
                </ScrollView>
              </View>
            );
          })}
        </View>
        {fetchOpponents && count < 4 && (
          <Text style={styles.text}>
            We are waiting for {noOfPlayersRemainingText} to join..
          </Text>
        )}
      </View>
    );
  }
  return <Text>Loading.....</Text>;
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: '#041530',
  },
  container: {
    flex: 1,
    backgroundColor: '#F9A28F',
    alignContent: 'center',
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
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 20,
  },
  submitButton: {
    margin: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
  buttonsContainer: {
    alignItems: 'flex-end',
    margin: 10,
  },
});

export default Opponents;
