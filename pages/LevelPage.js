import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ReactNativeItemSelect from 'react-native-item-select';
import SelectLevel from './SelectLevel';
import { NavigationEvents } from 'react-navigation';
import ApiHelper from './ApiHelper';
 
const LevelPage = (props) => {

  const {navigation} = props;
 
  useEffect(()=>{
    //ApiHelper.api("levels",'','GET','')
      
    const user = {
      first_name: 'Anamika',
      last_name: 'Kumari',
      contact_number: '1268618356',
      email: 'anamika@joshsoftware.com',
      password: '123456',
      city_id: '8'
    }     
    const bodyy = JSON.stringify({user});
    ApiHelper.api("users",bodyy,'POST','')
  })

    return (
      <Text>Showing Levels</Text>
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