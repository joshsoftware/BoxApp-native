import { addCitiesToStore } from '../actionConstants/getcitiesConstants';

const initialState = {
  Cities: [],
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case addCitiesToStore:
      return { ...state, Cities: action.payload };
    default:
      return state;
  }
};

export default citiesReducer;
