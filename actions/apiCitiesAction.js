export const addCitiesToStore = 'addCitiesToStore';
export const fetchCitiesFromAPI = 'fetchCitiesFromAPI';

export const fetchCities = () => {
  return { type: fetchCitiesFromAPI };
};

export const addCities = data => {
  return {
    type: addCitiesToStore,
    payload: data,
  };
};
