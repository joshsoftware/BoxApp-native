import AsyncStorage from '@react-native-community/async-storage'; 

const setToken = async(tokenName,tokenObject) => {
  try {
    await AsyncStorage.setItem(tokenName, JSON.stringify(tokenObject))
  } 
  catch (e) { 
    console.log(e)  
  }
}

const getToken = async(tokenName) => {
  try{
    const tokenObject = await AsyncStorage.getItem(tokenName)
    const tokenParsed = JSON.parse(tokenObject);
    console.log(tokenParsed);
  }
  catch(e){
    console.log(e);
  }
}

export { setToken, getToken };