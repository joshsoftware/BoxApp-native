import {
  fetchOpponentsForUser,
  addOpponentToStore,
} from '../actionConstants/getOpponentsConstants';

export const listOpponents = details => {
  return { type: fetchOpponentsForUser, payload: details };
};

export const addOpponents = data => {
  return {
    type: addOpponentToStore,
    payload: data,
  };
};
