import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ReactNativeItemSelect from 'react-native-item-select';
import SelectLevel from './SelectLevel';
import Description from './Description';
import { NavigationEvents } from 'react-navigation';
 
const LevelPage = (props) => {

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

  if(datasource.length>0)
  {
    return (
      <ReactNativeItemSelect
        data = {datasource}
        itemComponent={
          item => (
            <View style={styles.item}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>{item.description}</Text>
            </View>
          )
          }
        onSubmit={()=> navigation.navigate('Select')}
      />
    );
  }
  else
  {
    return(
      <Text>Loading.....</Text>
    )
  }
}
 
const styles = StyleSheet.create({
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
    fontWeight: 'bold'
  }
});

export default LevelPage;