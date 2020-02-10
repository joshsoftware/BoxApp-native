import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  BackHandler,
} from 'react-native';
import {Card} from 'react-native-elements';
import {NavigationEvents} from 'react-navigation';
import {Button} from 'galio-framework';
import Mycard from './MyCard';
import ApiHelper from './ApiHelper';

const Opponents = props => {
  const {navigation} = props;
  const [datasource, setDataSource] = useState([]);
  const token = navigation.getParam('token');

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });
    ApiHelper('list_opponents', null, {}, 'GET', {'user-auth-token': token})
      .then(responseJson => {
        setDataSource(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  let count = Object.keys(datasource).length;

  if (count == 1) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>We Are Waiting For more Players to Join</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.bodyContainer}>
        <View>
          {datasource.map((user, i) => {
            return (
              <View>
                <ScrollView>
                  <Mycard
                    name={user.first_name + ' ' + user.last_name}
                    number={user.contact_number}
                  />
                </ScrollView>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: '#F9A28F',
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
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  submitButton: {
    margin: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
});

export default Opponents;
