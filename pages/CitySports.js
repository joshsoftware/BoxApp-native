import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text} from 'galio-framework';
import LevelPage from './LevelPage';
import Grid from './Grid';

const CitySports = props => {
  const {navigation} = props;
  const [datasource, setDataSource] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.171:3000/api/v1/city_sports/display', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo4fQ.5m2O7KcykOJ8iOJoA8hcSxaeibYATt9aeeq3L2yYnQ0',
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        setDataSource(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const onSelect = (number, name) => {
    let sportId = number;
    let sportName = name;
    navigation.navigate('Level', {sport: sportId, sportname: sportName, token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo4fQ.5m2O7KcykOJ8iOJoA8hcSxaeibYATt9aeeq3L2yYnQ0'});
  };

  if (datasource.length > 0) {
    return (
      <View>
        <Grid
            items={datasource}
            setLevelChange={onSelect}
        />
      </View>
    );
  } else {
    return <Text>Loading.....</Text>;
  }
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '30%',
    padding: '50%',
    backgroundColor: '#cff089',
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
    padding: '23%',
  },
  registerLabel: {
    padding: '70%',
    textAlign: 'center',
  },
});

export default CitySports;