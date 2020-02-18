import compact from 'lodash/compact';
import { Alert } from 'react-native';
import GLOBAL from './GlobalConstants';

const errorMessages = {
  emptyInput: 'Input cannot be empty..\n',
  firstName: 'Please enter a valid first name\n',
  lastName: 'Please enter a valid last name\n',
  contactNumber: 'Please enter a valid contact number\n',
  emailId: 'Please enter a valid email address\n',
  password: 'Password should be of at least 6 characters\n',
  passwordMismatch: 'Passwords are not matching\n',
  cityId: 'Please select a city',
};

// Function to validate the inputs of sign up page and return errors if any
const validateSignUp = user => {
  const { firstName, lastName, contactNumber, emailId } = user;
  return {
    firstName: validateName(firstName) ? '' : errorMessages.firstName,
    lastName: validateName(lastName) ? '' : errorMessages.lastName,
    contactNumber: validateNumber(contactNumber)
      ? ''
      : errorMessages.contactNumber,
    emailId: validateEmailId(emailId) ? '' : errorMessages.emailId,
    cityId: validateCity() ? '' : errorMessages.cityId,
  };
};

// Function to validate the inputs of sign in page and return errors if any
const validateSignIn = user => {
  const { emailId, password } = user;
  return {
    emailId: validateEmailId(emailId) ? '' : errorMessages.emailId,
    password: password ? '' : errorMessages.emptyInput,
  };
};

// Function to validate the inputs of set password page and return errors if any
const validateSetPassword = user => {
  const { password, confirmPassword } = user;
  return {
    password: validatePassword(password) ? '' : errorMessages.password,
    confirmPassword: validateConfirmPassword(password, confirmPassword)
      ? ''
      : errorMessages.passwordMismatch,
  };
};

// Used for the validation of first name and last name, ie. strings consisting of only alphabets
const validateName = inputName => {
  const nameRegex = GLOBAL.regexForName;
  if (inputName) {
    return nameRegex.test(inputName);
  }
  return false;
};

// Used for the validation of contact number, it must consist of 10 digits
const validateNumber = inputNumber => {
  const numberRegex = GLOBAL.regexForContactNumber;
  if (inputNumber) {
    return numberRegex.test(inputNumber);
  }
  return false;
};

// Used to validate the email address provided by user
const validateEmailId = inputEmailId => {
  const emailRegex = GLOBAL.regexForEmail;
  if (inputEmailId) {
    return emailRegex.test(inputEmailId);
  }
  return false;
};

// Used to validate the password which should consist of atleast 6 characters
const validatePassword = inputPassword => {
  if (inputPassword) {
    return inputPassword.length >= 6;
  }
  return false;
};

// Input for city is taken from dropdown so always returns true
const validateCity = () => {
  return true;
};

// To check if the input password and the confirm password is matching
const validateConfirmPassword = (inputPassword, inputConfirmPassword) => {
  return inputPassword === inputConfirmPassword;
};

/*
  Shows an alert in case of invalid input like
  "Please enter valid contact number"
  "Please enter a valid email address"
*/
const showAlertForInvalidInput = errors => {
  let errorString;
  const objectKeys = Object.keys(errors);
  const errorMessages = Object.values(errors);

  if (objectKeys.length < 1) {
    errorString = errorMessages.emptyInput;
  } else if (objectKeys.length >= 1) {
    [errorString] = compact(errorMessages);
  }
  Alert.alert('Invalid input', errorString);
};

export {
  validateSignUp,
  validateSignIn,
  validateSetPassword,
  showAlertForInvalidInput,
};
