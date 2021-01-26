import * as setPasswordConstants from '../actionConstants/setPasswordConstants';

const initialState = {
  userPasswordToken: [],
};

const setPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case setPasswordConstants.setPasswordAPICall:
      return { ...state, userPasswordToken: action.payload };
    case setPasswordConstants.setPasswordSuccess:
      console.log('in pswd reducer');
      return { ...state, userPasswordToken: action.payload };
    case setPasswordConstants.setPasswordFailure:
      return { ...state, userPasswordToken: action.payload.message };
    default:
      return state;
  }
};

export default setPasswordReducer;
