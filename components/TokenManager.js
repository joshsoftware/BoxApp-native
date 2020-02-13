import AsyncStorage from '@react-native-community/async-storage';

//Function used to save the token with given token name in async storage
const setToken = async (tokenName, tokenObject) => {
  try {
    await AsyncStorage.setItem(tokenName, JSON.stringify(tokenObject));
  } catch (error) {
    console.log(error);
  }
};

//Function to extract the token with given name from async storage
const getToken = async tokenName => {
  try {
    const tokenObject = await AsyncStorage.getItem(tokenName);
    const tokenParsed = JSON.parse(tokenObject);
    return tokenParsed;
  } catch (error) {
    console.log(error);
  }
};

export {setToken, getToken};
