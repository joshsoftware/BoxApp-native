import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'galio-framework';

const SelectSport = props => {
  const {navigation} = props;

  return (
    <View style={styles.bodyContainer}>
      <Button
        color="info"
        size="small"
        shadowColor="black"
        round
        onPress={() => navigation.navigate('Sports')}
        style={styles.submitButton}>
        Select Sport
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

export default SelectSport;
