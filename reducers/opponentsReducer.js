import { addOpponentToStore } from '../actionConstants/getOpponentsConstants';

const initialState = {
  OpponentsList: {},
};

const opponentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case addOpponentToStore:
      return { ...state, OpponentsList: action.payload };

    default:
      return state;
  }
};

export default opponentsReducer;
