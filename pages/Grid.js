import React from 'react';
import { FlatGrid } from 'react-native-super-grid';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Grid = props => {
  const { items, setLevelChange } = props;

  const checkUnavailability = freeSlotCount => {
    if (freeSlotCount === 0) {
      return true;
    }
    return false;
  };

  return (
    <FlatGrid
      itemDimension={145}
      items={items}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => setLevelChange(item.id, item.name, item.free_slots)}>
          <View
            style={
              checkUnavailability(item.free_slots)
                ? styles.unavailable
                : styles.item
            }>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 100,
    margin: 1,
    borderColor: 'white',
    borderWidth: 3,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },

  unavailable: {
    flex: 1,
    height: 100,
    margin: 1,
    borderColor: 'white',
    borderWidth: 3,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },

  full: {
    alignSelf: 'center',
    color: 'white',
  },
});

export default Grid;
