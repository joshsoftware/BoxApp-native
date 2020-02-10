import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { Button } from 'galio-framework';
import Mycard from './MyCard';
 
const Opponents = (props) => {

  const {navigation} = props;
  const [datasource, setDataSource] = useState([]);

 useEffect(()=>{
    fetch("http://192.168.1.82:3000/api/v1/levels")
    .then((response)=> response.json())
    .then((responseJson) => {
      setDataSource(responseJson)
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  let count = Object.keys(datasource).length;

//   useEffect(() => {
//     fetch('http://192.168.1.84:3000/api/v1/list_opponents', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//          'user-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo4fQ.5m2O7KcykOJ8iOJoA8hcSxaeibYATt9aeeq3L2yYnQ0',
//       },
//     })
//       .then(response => response.json())
//       .then(responseJson => {
//         setDataSource(responseJson);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

  if(count==1){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>We Are Waiting For more Players to Join</Text>
        </View>
      );
  } else{
      return(
        <View style={styles.bodyContainer}>
          <View>
              {
                  datasource.map((u, i) => {
                      return (
                          <View>
                              <ScrollView>
                                  <Mycard name={u.name} number={u.description} />
                              </ScrollView>
                          </View>
                       );
                  })
              }
          </View>
        </View>
    );
  }
  
}
 
const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: '#F9A28F',
  },
  container: {
    flex: 1,
    backgroundColor: '#F9A28F',
    alignContent: 'center'
  },
  item: {
    flex: 1,
    height: 100,
    margin: 1,
    borderColor: 'black',
    borderWidth: 5,
    backgroundColor: 'pink'
  },
  list: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  submitButton: {
    margin: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'stretch'
  }
});

export default Opponents;