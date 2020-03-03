import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer';
import sportsReducer from './sportsReducer';
import userRegReducer from './userRegReducer';
import signInReducer from './signInReducer';
import opponentsReducer from './opponentsReducer';
import setPasswordReducer from './setPasswordReducer';

export default combineReducers({
  citiesReducer,
  sportsReducer,
  userRegReducer,
  signInReducer,
  opponentsReducer,
  setPasswordReducer,
});
