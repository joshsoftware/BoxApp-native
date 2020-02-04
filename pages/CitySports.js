import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {Button, Input, Text, Toast, theme } from 'galio-framework';
import ReactNativeItemSelect from 'react-native-item-select';
import ApiHelper from './ApiHelper';
  
const CitySports =(props) => {

  const {navigation} = props;
  const [datasource, setDataSource] = useState([]);



  useEffect(()=>{

    // //with helper
        
    //   const user = {
    //     "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMSJ9.O5Y5s_hvEW8BM7E8jq6HihxQ0DDFxO_2_xtnrvVj4PY"
    //   }     
    //   const body = JSON.stringify(user);

    // ApiHelper.api("city_sports/display",body,'POST','')




    //without helper

              console.log("In useEffect")
              fetch("http://192.168.1.171:3000/api/v1/city_sports/display",
              {

                method: 'POST',
                headers:{
                  "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMSJ9.O5Y5s_hvEW8BM7E8jq6HihxQ0DDFxO_2_xtnrvVj4PY"    
                })
              })
              .then((response)=> response.json())
              .then((responseJson) => { 
                console.log("geting response")
                setDataSource(responseJson)
              })
              .catch((error) => {
                console.error(error);
              });
  },[]);


  

  if(datasource.length>0)
  {
    return (
      <ReactNativeItemSelect
        data = {datasource}
        itemComponent={
          item => (
            <View style={styles.item}>
              <Text style={styles.text}>{item.name}</Text>
              {/* <Text style={styles.text}>{item.description}</Text> */}
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

  
  
  export default CitySports