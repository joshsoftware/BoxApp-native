import React from 'react';

const validator = (name, value) => {

  switch(name) {

    case "firstName":
      return validateName(value)
      break;
      
    case "lastName":
      return validateName(value)
      break;

    case "contactNumber":
      return validateNumber(value)
      break;  

    case "emailId":
      return validateEmailId(value)  
      break; 
      
    case "password":
      return(validatePassword(value))  
      break;    
    
    case "cityId":
      return true
  }

}

const validateName = (inputName) => {
  console.log(inputName);
  const nameRegex = new RegExp(/^[A-Za-z]+$/);
  return nameRegex.test(inputName);
}

const validateNumber = (inputNumber) => {
  console.log(inputNumber);
  const numberRegex = new RegExp(/^[0-9]{10}$/);
  return numberRegex.test(inputNumber);
}

const validateEmailId = (inputEmailId) => {
  console.log(inputEmailId);
  const emailRegex = new RegExp(/^[\w]+([._]?[\w]+)*@[\w]+([.][\w]{2,3})+$/);
  return emailRegex.test(inputEmailId);
}

const validatePassword = (inputPassword) => {
  console.log(inputPassword);
  const passwordRegex = new RegExp(/^[0-9a-zA-Z!@#$%^&*_]{6,}$/);
  return passwordRegex.test(inputPassword);
}

export { validator, validateName, validateNumber, validateEmailId, validatePassword};
