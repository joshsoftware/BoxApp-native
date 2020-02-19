export const addSportsToStore = 'addsportsToStore';
export const fetchSportsFromAPI = 'fetchSportsFromAPI';

export const fetchSports = () => {
  return { type: fetchSportsFromAPI };
};

export const addSports = data => {
  return {
    type: addSportsToStore,
    payload: data,
  };
};
