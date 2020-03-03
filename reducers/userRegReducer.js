import * as userRegistrationConstants from '../actionConstants/userRegConstants';

const initialState = {
  userRegDetails: [],
};

const userRegReducer = (state = initialState, action) => {
  switch (action.type) {
    case userRegistrationConstants.initiateAddUserAPICall:
      return { ...state, userRegDetails: action.payload };
    case userRegistrationConstants.addUserSuccess:
      return { ...state, userRegDetails: action.payload };
    case userRegistrationConstants.addUserFailure:
      return { ...state, userRegDetails: action.payload.message };
    default:
      return state;
  }
};

export default userRegReducer;
