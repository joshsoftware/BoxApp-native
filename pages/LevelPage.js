import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, CheckBox} from 'react-native';
import Grid from './Grid';
import { NavigationEvents } from 'react-navigation';
import { Button } from 'galio-framework';
 
const LevelPage = (props) => {

  const {navigation} = props;
  const [datasource, setDataSource] = useState([]);
  let level=0;
  const sport_id = JSON.stringify(navigation.getParam('sport'));
  const sport_name = JSON.stringify(navigation.getParam('sportname'));
  const token = navigation.getParam('token');
 
  useEffect(()=>{
    fetch("http://192.168.1.84:3000/api/v1/levels")
    .then((response)=> response.json())
    .then((responseJson) => {
      setDataSource(responseJson)
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  const addLevel = (token, sportID, level) => {
    console.log("In add Level method")

    fetch("http://192.168.1.84:3000/api/v1/level_sports",
    {
      method: 'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
         "token": token,
         "sport_id": sportID,
         "level_id": level        
      })
    }).then((result) => {
      if(result.status === 200){
        console.log("Level submitted");
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  const Check = () => {
    if(level==0)
    {
      alert('Please Select Level');
    }
    else
    {
      addLevel();
    }
  }

  const setLevel = (id, name) => {
    Alert.alert(  
      'Level '+name+' selected',  
      'Are You Sure You Want To Submit The Level',  
      [  
        {  
            text: 'Cancel',  
            onPress: () => console.log('Cancel Pressed')  
        },  
        {
          text: 'OK', 
          onPress: () => addLevel(token, sport_id, level)
        },  
      ]  
    );  
    level = id;
    console.log(level);
  }

  if(datasource.length>0)
  {
    return (
      <View style={styles.bodyContainer}>
        <Grid
          items={datasource}
          setLevelChange={setLevel}
        />
      </View>
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
  bodyContainer: {
    flex: 1,
    alignItems: "center",
    padding: "5%",
    justifyContent: 'center',
    backgroundColor: '#F9A28F',
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
    fontWeight: 'bold'
  },
  submitButton: {
    margin: 10,
  }
});

export default LevelPage;