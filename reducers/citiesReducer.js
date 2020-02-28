import * as citiesActionConstants from '../actionConstants/getCitiesConstants';

const initialState = {
  Cities: [],
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case citiesActionConstants.initiateCitiesAPICall:
      return { ...state, Cities: action.payload };
    case citiesActionConstants.getCitiesSuccess:
      return { ...state, Cities: action.payload };
    case citiesActionConstants.getCitiesFailure:
      return { ...state, Cities: action.payload.message };
    default:
      return state;
  }
};

export default citiesReducer;
