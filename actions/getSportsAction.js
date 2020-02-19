import {
  addSportsToStore,
  fetchSportsFromAPI,
} from '../actionConstants/getSportsConstants';

export const fetchSports = () => {
  return { type: fetchSportsFromAPI };
};

export const addSports = data => {
  return {
    type: addSportsToStore,
    payload: data,
  };
};
