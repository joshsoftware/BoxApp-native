import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ReactNativeItemSelect from 'react-native-item-select';
import SelectLevel from './SelectLevel';
import Description from './Description';
import { NavigationEvents } from 'react-navigation';
 
const LevelPage = (props) => {

  const {navigation} = props;
  const [datasource, setDataSource] = useState([]);
  const [description, setDescription] = useState([]);

    // const data = [
    //   {level: 'B1'},
    //   {level: 'B2'},
    //   {level: 'B3'},
    //   {level: 'C1'},
    //   {level: 'C2'},
    //   {level: 'C3'},
    // ];
 
    useEffect(()=>{
      fetch("http://192.168.1.82:3000/api/v1/levels")
      .then((response)=> response.json())
      .then((responseJson) => {
        setDataSource(responseJson)
        console.log(responseJson)
      })
      .catch((error) => {
        console.error(error);
      });
    })

    return (
      <ReactNativeItemSelect
        data = {datasource}
        itemComponent={
          item => (
            <View style={styles.item}>
              <Text style={styles.text}>{item.level}</Text>
            </View>
          )
        }
        onSubmit={()=> navigation.navigate('Description')}
      />
    );
  
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