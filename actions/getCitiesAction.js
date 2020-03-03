import * as citiesAction from '../actionConstants/getCitiesConstants';

export const fetchCities = () => {
  return { type: citiesAction.fetchCitiesFromAPI };
};

export const addCities = data => {
  return {
    type: citiesAction.addCitiesToStore,
    payload: data,
  };
};
