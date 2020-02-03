import React, { useState } from 'react';
import { Alert } from 'react-native';

const errorMessages = {
  emptyInput: "Input cannot be empty..\n", 
  firstName: "Please enter a valid first name\n",
  lastName: "Please enter a valid last name\n",
  contactNumber: "Please enter a valid contact number\n",
  emailId: "Please enter a valid email address\n",
  password:"Password show be of atleast 6 characters\n",
  passwordMismatch: "Passwords are not matching\n",
  cityId: "Please select a city",
 }

const validateSignUp = (user) => {

  const { firstName, lastName, contactNumber, emailId } = user;
  return { 
    firstName: validateName(firstName) ? "" : errorMessages.firstName,  
    lastName: validateName(lastName) ? "" : errorMessages.lastName,
    contactNumber: validateNumber(contactNumber) ? "" : errorMessages.contactNumber,
    emailId: validateEmailId(emailId) ? "" : errorMessages.emailId,
    cityId: validateCity() ? "" : errorMessages.cityId,
  }
}

const validateSignIn = (user) => {
  const { emailId, password } = user;
  return {
    emailId: validateEmailId(emailId) ? "" : errorMessages.emailId,
    password: validatePassword(password) ? "" : errorMessages.password,
  }
}

const validateSetPassword = (user) => {
  const { password, confirmPassword } = user;
  console.log(password, typeof(password))
  return {
    password: validatePassword(password) ? "" : errorMessages.password,
    confirmPassword: validateConfirmPassword(password, confirmPassword) ? "" : errorMessages.passwordMismatch,
  }
}

const validateName = (inputName) => {
  const nameRegex = new RegExp(/^[A-Za-z]+$/);
  if(inputName === undefined || inputName === null)
    return false
  return nameRegex.test(inputName);
}

const validateNumber = (inputNumber) => {
  const numberRegex = new RegExp(/^[0-9]{10}$/);
  if(inputNumber === undefined || inputNumber === null)
    return false
  return numberRegex.test(inputNumber);
}

const validateEmailId = (inputEmailId) => {
  const emailRegex = new RegExp(/^[\w]+([._]?[\w]+)*@[\w]+([.][\w]{2,3})+$/);
  if(inputEmailId === undefined || inputEmailId === null)
    return false
  return emailRegex.test(inputEmailId);
}

const validatePassword = (inputPassword) => {
  const passwordRegex = new RegExp(/^[0-9a-zA-Z!@#$%^&*_]{6,}$/);
  if (inputPassword === undefined || inputPassword === null)
    return false
  return passwordRegex.test(inputPassword);
}

const validateCity = () => {
  return true;
}

const validateConfirmPassword = (inputPassword, inputConfirmPassword) => {
  return inputPassword === inputConfirmPassword;
}

const showAlertForInvalidInput = (object, errors) => {
  let errorString="", i;
  let objectKeys = Object.keys(object);

  if(objectKeys.length<=1){
    errorString += errorMessages.emptyInput;
  }

  else if(objectKeys.length>1){
    for (i in objectKeys){
      errorString += errors[objectKeys[i]];
    }
  }
  Alert.alert("Invalid input", errorString);
}

export { validateSignUp, validateSignIn, validateSetPassword, showAlertForInvalidInput };