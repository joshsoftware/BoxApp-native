import React from 'react';
import { Input } from 'galio-framework';

const CustomInput = props => {
  const {
    placeholder,
    name,
    defaultValue,
    handleInputChange,
    borderStyle,
    keyboardType,
    maxLength,
    secureTextEntry,
  } = props;

  return (
    <Input
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
      keyboardType={keyboardType}
      maxLength={maxLength}
      secureTextEntry={secureTextEntry}
      onChangeText={text => {
        handleInputChange(text, name);
      }}
      style={borderStyle}
      color="black"
      rounded
    />
  );
};

export default CustomInput;
