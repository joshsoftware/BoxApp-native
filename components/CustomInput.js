import React from 'react';
import {Input} from 'galio-framework';

const CustomInputText = props => {
  const {
    placeholder,
    name,
    defaultValue,
    handleInputChange,
    borderStyle,
  } = props;
  return (
    <Input
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
      onChangeText={text => {
        handleInputChange(text, name);
      }}
      style={borderStyle}
      color="black"
    />
  );
};

const CustomInputNumber = props => {
  const {
    placeholder,
    name,
    defaultValue,
    handleInputChange,
    borderStyle,
  } = props;
  return (
    <Input
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
      keyboardType="number-pad"
      maxLength={10}
      onChangeText={text => {
        handleInputChange(text, name);
      }}
      style={borderStyle}
      color="black"
    />
  );
};

const CustomInputPassword = props => {
  const {
    placeholder,
    name,
    defaultValue,
    handleInputChange,
    borderStyle,
  } = props;
  return (
    <Input
      placeholder={placeholder}
      secureTextEntry={true}
      name={name}
      defaultValue={defaultValue}
      onChangeText={text => {
        handleInputChange(text, name);
      }}
      style={borderStyle}
      color="black"
    />
  );
};

export {CustomInputText, CustomInputNumber, CustomInputPassword};
