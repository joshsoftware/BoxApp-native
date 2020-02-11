import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, CheckBox } from 'react-native';
import Grid from './Grid';
import { NavigationEvents } from 'react-navigation';
import { Button } from 'galio-framework';
import ApiHelper from './ApiHelper';

const LevelPage = (props) => {
	const { navigation } = props;
	const [ datasource, setDataSource ] = useState([]);
	let level = 0;
	const sport_id = JSON.stringify(navigation.getParam('sport'));
	const sport_name = JSON.stringify(navigation.getParam('sportname'));
	const token = navigation.getParam('token');

	useEffect(() => {
		ApiHelper('city_sport_levels', JSON.stringify({ sport_id: sport_id }), {}, 'POST', {
			'user-auth-token': token
		})
			.then((responseJson) => {
				setDataSource(responseJson);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	const addLevel = (token, sportID, level) => {
		ApiHelper(
			'level_sports',
			JSON.stringify({
				sport_id: sportID,
				level_id: level
			}),
			{},
			'POST',
			{ 'user-auth-token': token }
		)
			.then((responseJson) => {
				Alert.alert('Sports and level status', responseJson.message);
				navigation.navigate('Opponents', { token: token });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const Check = () => {
		if (level == 0) {
			alert('Please Select Level');
		} else {
			addLevel();
		}
	};

	const setLevel = (id, name, free_slots) => {
		if (free_slots == 0) {
			Alert.alert('SORRY!', 'This box is full. Please select another box.');
			return;
		}
		Alert.alert('Level ' + name + ' selected', 'Are you sure you want to select this level?', [
			{
				text: 'Cancel',
				onPress: () => console.log('Cancel Pressed')
			},
			{
				text: 'OK',
				onPress: () => addLevel(token, sport_id, level)
			}
		]);
		level = id;
	};

	if (datasource.length > 0) {
		return (
			<View style={styles.bodyContainer}>
				<Grid items={datasource} setLevelChange={setLevel} />
			</View>
		);
	} else {
		return <Text>Loading.....</Text>;
	}
};

const styles = StyleSheet.create({
	bodyContainer: {
		flex: 1,
		alignItems: 'center',
		padding: '5%',
		justifyContent: 'center',
		backgroundColor: '#041530'
	},
	item: {
		flex: 1,
		height: 100,
		margin: 1,
		borderColor: 'black',
		borderWidth: 5,
		backgroundColor: 'pink'
	},
	list: {
		flex: 1
	},
	text: {
		textAlign: 'center',
		fontWeight: 'bold'
	},
	submitButton: {
		margin: 10
	}
});

export default LevelPage;
