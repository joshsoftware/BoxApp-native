import AsyncStorage from '@react-native-community/async-storage'; 

const setToken = async(tokenObject) => {
  try {
    await AsyncStorage.setItem('tokenObject', JSON.stringify(tokenObject))
  } 
  catch (e) { 
    console.log(e)  
  }
}

const getToken = async() => {
  try{
    const tokenObject = await AsyncStorage.getItem('tokenObject')
    const tokenParsed = JSON.parse(tokenObject);
    console.log(tokenParsed);
  }
  catch(e){
    console.log(e);
  }
}

export { setToken, getToken };