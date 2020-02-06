import React from 'react';
import { FlatGrid } from 'react-native-super-grid';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const Grid = (props) => {

    const {items, setLevelChange} = props;

    return(
        <FlatGrid
          itemDimension={140}
          items={items}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={()=> setLevelChange(item.id, item.name)}>
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
    );
}

const styles = StyleSheet.create({
    item: {
      flex: 1,
      height: 100,
      margin: 1,
      borderColor: 'black',
      borderWidth: 5,
      backgroundColor: 'pink'
    },
    text: {
      textAlign: 'center',
      fontWeight: 'bold'
    }
  });

  export default Grid;