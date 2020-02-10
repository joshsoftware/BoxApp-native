import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text} from 'galio-framework';
import LevelPage from './LevelPage';
import Grid from './Grid';
import {getToken} from '../components/TokenManager';
import ApiHelper from './ApiHelper';

const CitySports = props => {
  const {navigation} = props;
  const [datasource, setDataSource] = useState([]);
  const tokenObject = navigation.getParam('token');

  /** Fetch sports list for user city */
  useEffect(() => {
    if (tokenObject['token']) {
      ApiHelper('city_sports/display', null, {}, 'GET', {
        'user-auth-token': tokenObject['token'],
      })
        .then(responseJson => {
          console.log(responseJson);
          setDataSource(responseJson);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [tokenObject]);

  const onSelect = (number, name) => {
    let sportId = number;
    let sportName = name;
    navigation.navigate('Level', {
      sport: sportId,
      sportname: sportName,
      token: tokenObject['token'],
    });
  };

  if (datasource.length > 0) {
    return (
      <View>
        <Grid items={datasource} setLevelChange={onSelect} />
      </View>
    );
  } else {
    return <Text>Loading.....</Text>;
  }
};

export default CitySports;
