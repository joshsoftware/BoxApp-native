import {
  addCitiesToStore,
  fetchCitiesFromAPI,
} from '../actionConstants/getcitiesConstants';

export const fetchCities = () => {
  return { type: fetchCitiesFromAPI };
};

export const addCities = data => {
  return {
    type: addCitiesToStore,
    payload: data,
  };
};
