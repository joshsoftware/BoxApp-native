import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
import ReactNativeItemSelect from 'react-native-item-select';
import SelectLevel from './SelectLevel';
import Description from './Description';
import { NavigationEvents } from 'react-navigation';
import { FlatGrid } from 'react-native-super-grid';
import { Button } from 'galio-framework';
 
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

  const setLevel = (name) => {
    console.log(name);
  }

  if(datasource.length>0)
  {
    return (
      <View style={styles.bodyContainer}>
        <FlatGrid
          itemDimension={130}
          items={datasource}
          style={styles.gridView}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={setLevel}>
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <Button
          color="error" 
          size="small" 
          shadowColor="black" 
          round
          onPress={() => navigation.navigate('Select')}
          style={styles.submitButton}>Submit
        </Button>
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
    padding: "10%",
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