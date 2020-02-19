import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer';
import sportsReducer from './sportsReducer';
import userRegReducer from './userRegReducer';

export default combineReducers({
  citiesReducer,
  sportsReducer,
  userRegReducer,
});
