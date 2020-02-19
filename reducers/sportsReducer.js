import { addSportsToStore } from '../actionConstants/getSportsConstants';

const initialState = {
  sportsForCity: [],
};

const sportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case addSportsToStore:
      return { ...state, sportsForCity: action.payload };
    default:
      return state;
  }
};

export default sportsReducer;
