import { addRegDetailsToStore } from '../actionConstants/userRegConstants';

const initialState = {
  userRegDetails: [],
};

const userRegReducer = (state = initialState, action) => {
  switch (action.type) {
    case addRegDetailsToStore:
      return { ...state, userRegDetails: action.payload };
    default:
      return state;
  }
};

export default userRegReducer;
