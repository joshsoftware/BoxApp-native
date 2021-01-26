import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Text} from 'galio-framework';
import Grid from './Grid';
import ApiHelper from './ApiHelper';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_SPORT_ID} from '../actions/AddSportId';

const CitySports = props => {
  const {navigation} = props;
  const [datasource, setDataSource] = useState([]);
  const tokenObject = navigation.getParam('token');
  const dispatch = useDispatch();
  const SportReducer = useSelector(state => state);

  /** Fetch sports list for user city */
  useEffect(() => {
    if (tokenObject['token']) {
      ApiHelper('city_sports/display', null, {}, 'GET', {
        'user-auth-token': tokenObject['token'],
      })
        .then(responseJson => {
          setDataSource(responseJson);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [tokenObject]);

  const onSelect = (number, name) => {
    dispatch(ADD_SPORT_ID(number, name));
    navigation.navigate('Select', {
      sport: number,
      sportname: name,
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
