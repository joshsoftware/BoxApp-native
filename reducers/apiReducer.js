import { addCitiesToStore } from '../actions/apiCitiesAction';
import { addSportsToStore } from '../actions/apiSportsAction';

const initialState = {
  allCities: [],
  sportsForCity: [],
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case addCitiesToStore:
      return { ...state, allCities: action.payload };
    case addSportsToStore:
      return { ...state, sportsForCity: action.payload };
    default:
      return state;
  }
};

export default apiReducer;
