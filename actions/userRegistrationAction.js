import * as userRegistrationAction from '../actionConstants/userRegConstants';

export const addUserDetails = details => {
  return { type: userRegistrationAction.addUserAPICall, payload: details };
};

export const addRegDetails = data => {
  return {
    type: userRegistrationAction.addRegDetailsToStore,
    payload: data,
  };
};
