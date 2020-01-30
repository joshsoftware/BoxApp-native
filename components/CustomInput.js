import React  from 'react';
import {Text, View} from 'react-native';
import {Input, theme} from 'galio-framework';

const CustomInputText = (props) => {

  const {placeholder, name, defaultValue, handleInputChange} =  props;

  return(
    <Input 
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
      onChangeText={(text) => {handleInputChange(text, name)}}
      style={{ borderColor: theme.COLORS.THEME }} 
      color="black" rounded
    />
  )
}

const CustomInputNumber = (props) => {

  const {placeholder, name, defaultValue, handleInputChange} =  props;
  return(
    <Input
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
      keyboardType="number-pad"
      maxLength={10}
      onChangeText={(text) => {handleInputChange(text, name)}}
      style={{ borderColor: theme.COLORS.THEME }} 
      color="black" rounded 
    />
  );
}

const CustomInputPassword = (props) => {

  const {placeholder, name, defaultValue, handleInputChange} =  props;

  return(
    <Input 
      placeholder={placeholder} 
      secureTextEntry = {true}
      name={name}
      defaultValue={defaultValue}
      onChangeText={(text) => {handleInputChange(text, name)}}
      style={{ borderColor: theme.COLORS.THEME }} 
      color="black" rounded 
    />
  );
}

export {CustomInputText, CustomInputNumber, CustomInputPassword};