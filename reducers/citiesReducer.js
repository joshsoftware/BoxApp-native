import * as citiesActionConstants from '../actionConstants/getCitiesConstants';

const initialState = {
  cities: [],
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case citiesActionConstants.initiateAddUserAPICall:
      return { ...state, cities: action.payload };
    case citiesActionConstants.getCitiesSuccess:
      return { ...state, cities: action.payload };
    case citiesActionConstants.getCitiesFailure:
      return { ...state, cities: action.payload.message };
    default:
      return state;
  }
};

export default citiesReducer;
