import * as sportsActionConstants from '../actionConstants/getSportsConstants';

const initialState = {
  sportsForCity: [],
};

const sportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case sportsActionConstants.initiateGetSportsAPICall:
      return { ...state, sportsForCity: action.payload };
    case sportsActionConstants.getSportsSuccess:
      console.log('in sport reducer');
      return { ...state, sportsForCity: action.payload };
    case sportsActionConstants.getSportsFailure:
      return { ...state, sportsForCity: action.payload };
    default:
      return state;
  }
};

export default sportsReducer;
