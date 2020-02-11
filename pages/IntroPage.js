import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Button } from 'galio-framework';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';

const IntroPage = (props) => {
	const { navigation } = props;

	return (
		<ScrollView style={styles.body}>
			<View style={styles.header}>
				<Text style={styles.heading}>BoQSports</Text>
				<Text style={styles.tagline}>Level up your game..</Text>
			</View>

			<View style={styles.features}>
				<Image
					style={styles.coverImage}
					source={{
						uri: 'https://pngimg.com/uploads/tennis/tennis_PNG10406.png'
					}}
				/>
			</View>

			<View style={styles.buttonsContainer}>
				<View style={styles.button}>
					<Button color="info" size="small" round onPress={() => navigation.navigate('SignUp')}>
						Sign up with email
					</Button>
				</View>

				<View style={styles.button}>
					<Button color="#50C7C7" size="small" round onPress={() => navigation.navigate('SignIn')}>
						Already a user? Sign in
					</Button>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: '#041530',
		flex: 1
	},

	header: {
		flex: 1,
		alignItems: 'center',
		padding: 70
	},

	heading: {
		fontSize: 40,
		color: 'white'
	},

	tagline: {
		fontSize: 15,
		color: 'white',
		padding: 5
	},

	headingImage: {
		width: '10%',
		height: 20
	},

	buttonsContainer: {
		alignItems: 'center',
		padding: 10
	},

	button: {
		marginTop: 20
	},

	features: {
		padding: 10,
		height: 200,
		alignItems: 'center'
	},

	coverImage: {
		width: '100%',
		height: 150,
		transform: [ { rotate: '40deg' } ]
	}
});

export default IntroPage;
