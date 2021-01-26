import { addSignInTokenToStore } from '../actionConstants/signInConstants';

const intialstate = {
  userSignInDetails: [],
};

const signInReducer = (state = intialstate, action) => {
  switch (action.type) {
    case addSignInTokenToStore:
      return { ...state, userSignInDetails: action.payload };
    default:
      return state;
  }
};

export default signInReducer;
