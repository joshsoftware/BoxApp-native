import { addRegDetailsToStore } from '../actionConstants/userRegConstants';
import {
  sucessAction,
  failureAction,
} from '../actionConstants/apiHelperConstants';

const initialState = {
  userRegDetails: [],
};

const userRegReducer = (state = initialState, action) => {
  switch (action.type) {
    case sucessAction:
      return { ...state, userRegDetails: action.payload };
    case failureAction:
      return { ...state, userRegDetails: action.payload.message };
    default:
      return state;
  }
};

export default userRegReducer;
