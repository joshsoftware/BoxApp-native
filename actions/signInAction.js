import {
  addSignInTokenToStore,
  checkSignInDetails,
} from '../actionConstants/signInConstants';

export const userSignIn = details => {
  return { type: checkSignInDetails, payload: details };
};

export const addSignInDetails = body => {
  return { type: addSignInTokenToStore, payload: body };
};
