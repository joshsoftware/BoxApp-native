import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Picker,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Button, Text } from 'galio-framework';
import { useDispatch, useSelector } from 'react-redux';
import CustomInput from '../components/CustomInput';
import {
  validateSignUp,
  showAlertForInvalidInput,
} from '../components/Validation';
import ApiHelper from './ApiHelper';

import { fetchCities } from '../actions/getCitiesAction';
import { addUserDetails } from '../actions/userRegistrationAction';

const SignUpPage = props => {
  const { navigation } = props;
  const [datasource, setDataSource] = useState([]);
  const [pickerValue, setPickerValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Initializing user fields
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const cityList = useSelector(state => state.citiesReducer);
  const userDetails = useSelector(state => state.userRegReducer);

  const handleInput = (value, name) => {
    setUser({ ...user, [name]: value });
  };

  const addUser = () => {
    dispatch(addUserDetails(user));
    // setIsLoading(true);

    // ApiHelper(
    //   'users',
    //   JSON.stringify({
    //     user: {
    //       first_name: user.firstName,
    //       last_name: user.lastName,
    //       contact_number: user.contactNumber,
    //       email: user.emailId,
    //       city_id: user.cityId,
    //     },
    //   }),
    //   {},
    //   'POST',
    // )
    //   .then(responseJson => {
    //     setIsLoading(false);
    //     if (responseJson.error) {
    //       Alert.alert('Registration status', responseJson.error);
    //     } else {
    //       Alert.alert('Registration status', responseJson.message);
    //     }
    //   })
    //   .catch(() => {
    //     Alert.alert(
    //       'Server error',
    //       'An unexpected error has occured, cannot process further registration..',
    //     );
    //   });
  };

  const noErrorsPresent = validationErrors => {
    return (
      !validationErrors.firstName &&
      !validationErrors.lastName &&
      !validationErrors.contactNumber &&
      !validationErrors.emailId
    );
  };

  const checkForSignUp = () => {
    setErrors(validateSignUp(user));
    const validationErrors = validateSignUp(user);

    if (noErrorsPresent(validationErrors)) {
      addUser();
    } else {
      showAlertForInvalidInput(validationErrors);
    }
  };

  useEffect(() => {
    dispatch(fetchCities());
    // ApiHelper('cities')
    //   .then(responseJson => {
    //     setDataSource(responseJson);
    //   })
    //   .catch(error => {
    //     Alert.alert(
    //       'Server error',
    //       'An unexpected error has occured, unable to fetch cities..',
    //       [
    //         {
    //           text: 'OK',
    //           onPress: () => navigation.navigate('Intro'),
    //         },
    //       ],
    //     );
    //   });
  }, []);

  const pickerHandler = (item, key) => {
    setPickerValue(item);
    handleInput(item, 'cityId');
  };

  return (
    <ScrollView style={styles.bodyContainer} centerContent>
      {isLoading ? (
        <View styles={styles.loaderContainer}>
          <ActivityIndicator size="large" color="white" />
        </View>
      ) : (
        <>
          <Text h4 style={styles.registerLabel}>
            Register here!
          </Text>

          <CustomInput
            placeholder="First Name"
            name="firstName"
            defaultValue={user.firstName}
            handleInputChange={handleInput}
            borderStyle={
              errors.firstName ? styles.error : styles.textInputBorder
            }
          />

          <CustomInput
            placeholder="Last Name"
            name="lastName"
            defaultValue={user.lastName}
            handleInputChange={handleInput}
            borderStyle={
              errors.lastName ? styles.error : styles.textInputBorder
            }
          />

          <CustomInput
            placeholder="Contact Number"
            name="contactNumber"
            defaultValue={user.contactNumber}
            handleInputChange={handleInput}
            keyboardType="number-pad"
            maxLength={10}
            borderStyle={
              errors.contactNumber ? styles.error : styles.textInputBorder
            }
          />

          <CustomInput
            placeholder="Email ID"
            name="emailId"
            defaultValue={user.emailId}
            handleInputChange={handleInput}
            borderStyle={errors.emailId ? styles.error : styles.textInputBorder}
          />

          <Picker
            mode="dropdown"
            selectedValue={pickerValue}
            style={styles.cityDropDown}
            onValueChange={pickerHandler}>
            {cityList.Cities.map((item, key) => (
              <Picker.Item label={item.name} value={item.id} key={key} />
            ))}
          </Picker>

          <Button
            color="info"
            size="small"
            shadowColor="black"
            round
            onPress={checkForSignUp}
            style={styles.submitButton}>
            Register
          </Button>

          <Button
            color="error"
            size="small"
            shadowColor="black"
            round
            onPress={() => navigation.navigate('Intro')}
            style={styles.submitButton}>
            Cancel
          </Button>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    padding: '10%',
    backgroundColor: '#041530',
  },

  loaderContainer: {
    flex: 1,
    alignItems: 'center',
  },

  registerLabel: {
    padding: '10%',
    color: 'white',
    alignSelf: 'center',
  },

  pickCity: {
    backgroundColor: 'white',
    borderColor: 'blue',
    height: 50,
    width: '90%',
  },

  submitButton: {
    margin: 10,
    alignSelf: 'center',
  },

  cityDropDown: {
    margin: 10,
    width: '90%',
    height: 40,
    backgroundColor: 'white',
    color: 'black',
  },

  error: {
    borderColor: 'red',
    borderWidth: 2,
  },

  textInputBorder: {
    borderColor: 'yellow',
    borderWidth: 1,
  },

  loadingContainer: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: '#ffffff',
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default SignUpPage;
