import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'galio-framework';

const SelectLevel = props => {
  const {navigation} = props;
  const selectedSport = JSON.stringify(navigation.getParam('sport'));
  console.log(selectedSport);

  // const selectedSportname = JSON.stringify(navigation.getParam('sportname'));
  // console.log(selectedSportname);

  return (
    <View style={styles.bodyContainer}>
      <Button
        color="info"
        size="small"
        shadowColor="black"
        round
        onPress={() => navigation.navigate('Level')}
        style={styles.submitButton}>
        Select Level
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    padding: '10%',
    backgroundColor: '#cff089',
  },
  bodyContainerr: {
    flex: 1,
    alignItems: 'center',
    padding: '10%',
    backgroundColor: '#cff089',
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
    marginLeft: '2%',
    width: '96%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  registerLabel: {
    padding: '10%',
    textAlign: 'center',
  },
});

export default SelectLevel;
