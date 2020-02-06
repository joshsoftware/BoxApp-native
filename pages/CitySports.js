import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text} from 'galio-framework';
//import ApiHelper from './ApiHelper';
import {FlatGrid} from 'react-native-super-grid';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_SPORT_ID} from '../actions/AddSportId';

const CitySports = props => {
  const {navigation} = props;
  const [datasource, setDataSource] = useState([]);
  //For Redux
  const dispatch = useDispatch();
  const SportReducer = useSelector(state => state);
  console.log(SportReducer);

  useEffect(() => {
    // //with helper

    //   const user = {
    //     "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMSJ9.O5Y5s_hvEW8BM7E8jq6HihxQ0DDFxO_2_xtnrvVj4PY"
    //   }
    //   const body = JSON.stringify(user);

    // ApiHelper.api("city_sports/display",body,'POST','')

    //without helper

    console.log('In useEffect');
    fetch('http://192.168.1.171:3000/api/v1/city_sports/display', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMSJ9.O5Y5s_hvEW8BM7E8jq6HihxQ0DDFxO_2_xtnrvVj4PY',
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log('geting response');
        setDataSource(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  const onSelect = (number, name) => {
    let sportId = number;
    let sportName = name;
    console.log(sportId);
    console.log(sportName);
    dispatch(ADD_SPORT_ID(number, name));
    navigation.navigate('Select', {sport: sportId, sportname: sportName});
    console.log(SportReducer);
  };

  if (datasource.length > 0) {
    return (
      <View>
        <FlatGrid
          itemDimension={129}
          items={datasource}
          style={styles.gridView}
          renderItem={({item, index}) => (
            <TouchableOpacity onPress={() => onSelect(item.id, item.name)}>
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
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
    width: '100%',
    height: '30%',
    padding: '50%',
    backgroundColor: '#cff089',
  },
  item: {
    flex: 1,
    height: 100,
    margin: 1,
    borderColor: 'black',
    borderWidth: 5,
    backgroundColor: 'pink',
  },
  list: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '23%',
  },
  registerLabel: {
    padding: '70%',
    textAlign: 'center',
  },
});

export default CitySports;
