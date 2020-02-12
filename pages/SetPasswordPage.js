import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Button, Text } from 'galio-framework';
import { CustomInputPassword } from '../components/CustomInput';
import { validateSetPassword, showAlertForInvalidInput } from '../components/Validation';
import { setToken, getToken } from '../components/TokenManager';
import ApiHelper from './ApiHelper';

const SetPasswordPage = (props) => {
	const { navigation } = props;
	const [ user, setUser ] = useState({});
	const [ errors, setErrors ] = useState({});
	let confirmationToken;

	useEffect(() => {
		confirmationToken = navigation.state.params.confirm;
	});

	const handleInput = (value, name) => {
		setUser({ ...user, [name]: value });
	};

	const setPasswordForUser = () => {
		ApiHelper(
			'set_password',
			JSON.stringify({
				user: {
					confirmation_token: confirmationToken,
					password: user.password,
					password_confirmation: user.confirmPassword
				}
			}),
			{},
			'POST'
		)
			.then((responseJson) => {
				if (responseJson.error) {
					Alert.alert('Server Error', responseJson.error);
				} else {
					setToken('setPasswordToken', responseJson);
					Alert.alert('Successful', 'Password has been set successfully..');
					navigation.navigate('Sports', { token: responseJson });
				}
			})
			.catch((err) => {
				Alert.alert('Server error', 'An unexpected error has occured, unable to set password..');
			});
		confirmationToken = '';
	};

	const noErrorsPresent = (validationErrors) => {
		return !validationErrors.password && !validationErrors.confirmPassword;
	};

	const cancelPressed = () => {
		navigation.navigate('Intro');
	};

	/* Function to check whether input fields are valid
      If so, api call for setting the password
      Else alert with invalid input is shown  */
	const checkForSetPassword = () => {
		setErrors(validateSetPassword(user));
		const validationErrors = validateSetPassword(user);

		if (noErrorsPresent(validationErrors)) {
			setPasswordForUser();
		} else {
			showAlertForInvalidInput(user, validationErrors);
		}
	};

	return (
		<View style={styles.bodyContainer}>
			<Text h4 style={styles.registerLabel}>
				Set password here
			</Text>

			<CustomInputPassword
				placeholder="Password"
				name="password"
				defaultValue={user.password}
				handleInputChange={handleInput}
				borderStyle={errors.password ? styles.error : styles.textInputBorder}
			/>

			<CustomInputPassword
				placeholder="Confirm Password"
				name="confirmPassword"
				defaultValue={user.confirmPassword}
				handleInputChange={handleInput}
				borderStyle={errors.confirmPassword ? styles.error : styles.textInputBorder}
			/>

			<Button
				color="info"
				size="small"
				shadowColor="black"
				round
				onPress={checkForSetPassword}
				style={styles.submitButton}
			>
				Confirm
			</Button>

			<Button
				color="error"
				size="small"
				shadowColor="black"
				round
				onPress={cancelPressed}
				style={styles.submitButton}
			>
				Cancel
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	bodyContainer: {
		flex: 1,
		alignItems: 'center',
		padding: '10%',
		justifyContent: 'center',
		backgroundColor: '#041530'
	},

	registerLabel: {
		padding: '10%',
		color: 'white'
	},

	submitButton: {
		margin: 10
	},

	error: {
		borderColor: 'red',
		borderWidth: 2
	},

	textInputBorder: {
		borderColor: 'yellow',
		borderWidth: 1
	}
});

export default SetPasswordPage;
