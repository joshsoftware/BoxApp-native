import {
  addRegDetailsToStore,
  addUserAPI,
} from '../actionConstants/userRegConstants';

export const addUserDetails = details => {
  return { type: addUserAPI, payload: details };
};

export const addRegDetails = data => {
  return {
    type: addRegDetailsToStore,
    payload: data,
  };
};
