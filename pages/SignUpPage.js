import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Picker,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {Button, Input, Text, Toast, theme} from 'galio-framework';
import {CustomInputText, CustomInputNumber} from '../components/CustomInput';
import RNPickerSelect from 'react-native-picker-select';
import {
  validateSignUp,
  showAlertForInvalidInput,
} from '../components/Validation';
import ApiHelper from './ApiHelper';
import {DarkTheme} from 'react-native-paper';

const SignUpPage = props => {
  let cities = [];
  const {navigation} = props;
  const [datasource, setDataSource] = useState([]);
  const [pickerValue, setPickerValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  //Initializing user fields
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});

  const handleInput = (value, name) => {
    setUser({...user, [name]: value});
  };

  const addUser = () => {
    setIsLoading(true);
    ApiHelper(
      'users',
      JSON.stringify({
        user: {
          first_name: user.firstName,
          last_name: user.lastName,
          contact_number: user.contactNumber,
          email: user.emailId,
          city_id: user.cityId,
        },
      }),
      {},
      'POST',
    )
      .then(responseJson => {
        setIsLoading(false);
        if (responseJson.error) {
          Alert.alert('Registration status', responseJson.error);
        } else {
          Alert.alert('Registration status', responseJson.message);
          navigation.navigate('Intro');
        }
      })
      .catch(error => {
        Alert.alert(
          'Server error',
          'An unexpected error has occured, cannot process further registration..',
        );
      });
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
      showAlertForInvalidInput(user, validationErrors);
    }
  };

  useEffect(() => {
    ApiHelper('cities')
      .then(responseJson => {
        setDataSource(responseJson);
      })
      .catch(error => {
        Alert.alert(
          'Server error',
          'An unexpected error has occured, unable to fetch cities..',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('Intro'),
            },
          ],
        );
      });
  }, []);

  const pickerHandler = (item, key) => {
    setPickerValue(item);
    handleInput(item, 'cityId');
  };

  datasource.map(function(obj, j) {
    cities[j] = {label: obj.name, value: obj.id};
  });

  return (
    <ScrollView style={styles.bodyContainer} centerContent={true}>
      {isLoading ? (
        <View styles={styles.loaderContainer}>
          <ActivityIndicator size={'large'} color={'white'} />
        </View>
      ) : (
        <>
          <Text h4 style={styles.registerLabel}>
            Register here!
          </Text>
          <CustomInputText
            placeholder="First Name"
            name="firstName"
            defaultValue={user.firstName}
            handleInputChange={handleInput}
            borderStyle={
              errors.firstName ? styles.error : styles.textInputBorder
            }
          />
          <CustomInputText
            placeholder="Last Name"
            name="lastName"
            defaultValue={user.lastName}
            handleInputChange={handleInput}
            borderStyle={
              errors.lastName ? styles.error : styles.textInputBorder
            }
          />
          <CustomInputNumber
            placeholder="Contact Number"
            name="contactNumber"
            defaultValue={user.contactNumber}
            handleInputChange={handleInput}
            borderStyle={
              errors.contactNumber ? styles.error : styles.textInputBorder
            }
          />
          <CustomInputText
            placeholder="Email ID"
            name="emailId"
            defaultValue={user.emailId}
            handleInputChange={handleInput}
            borderStyle={errors.emailId ? styles.error : styles.textInputBorder}
          />
          {/* <Picker
            mode={'dropdown'}
            selectedValue={pickerValue}
            style={styles.cityDropDown}
            onValueChange={pickerHandler}>
            {datasource.map((item, key) => (
              <Picker.Item label={item.name} value={item.id} key={key} />
            ))}
          </Picker> */}

          <RNPickerSelect
            placeholder={{label: 'select city', value: null}}
            onValueChange={pickerHandler}
            items={cities}
            style={styles.dropDown}
          />

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
    // backgroundColor: 'white',
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
  dropdown: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
    paddingRight: 30,
  },
});

export default SignUpPage;
