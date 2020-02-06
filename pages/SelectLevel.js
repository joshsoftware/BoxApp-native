import React, { useState } from 'react';
import { StyleSheet, View, Picker, ScrollView, TouchableOpacity, Modal } from 'react-native';
import {Button, Input, Text, Block, theme, Card } from 'galio-framework';
import LevelPage from './LevelPage';

const SelectLevel = (props) => {

  const {navigation} = props;
  const level = JSON.stringify(navigation.getParam('boxlevel'));
  console.log(level);
  
  const state = () =>{
    isModalVisible = false;
  }

  
  return(
    <View style={styles.bodyContainer}>
      <Button 
        color="info" 
        size="small" 
        shadowColor="black" 
        round
        onPress={()=> navigation.navigate('Level')}
        style={styles.submitButton}>    Select Level
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    bodyContainer: {
    flex: 1,
    alignItems: "center",
    padding: "10%",
    backgroundColor: '#cff089',
  },
  bodyContainerr: {
    flex: 1,
    alignItems: "center",
    padding: "10%",
    backgroundColor: '#cff089',
  },
  card: {
    backgroundColor: '#fff',
    marginBottom:10,
    marginLeft:'2%',
    width:'96%',
    shadowColor:'#000',
    shadowOpacity:0.2,
    shadowRadius:1,
    shadowOffset:{
        width:3,
        height:3
    }
  },
  cardImage:{
    width:'100%',
    height:200,
    resizeMode:'cover'
  },
  registerLabel: {
    padding: "10%",
    textAlign: "center"
  },
});

export default SelectLevel;




// import React, { Component } from "react";
// import { Button, Text, View } from "react-native";
// import Modal from "react-native-modal";
 
// export default class ModalTester extends Component {
//   state = {
//     isModalVisible: false
//   };
 
//   toggleModal = () => {
//     this.setState({ isModalVisible: !this.state.isModalVisible });
//   };
 
//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <Button title="Show modal" onPress={this.toggleModal} />
//         <Modal isVisible={this.state.isModalVisible}>
//           <View style={{ flex: 1 }}>
//             <Text>Hello!</Text>
//             <Button title="Hide modal" onPress={this.toggleModal} />
//           </View>
//         </Modal>
//       </View>
//     );
//   }
// }