export const addDataToStore = 'addDataToStore';
export const fetchDataFromAPI = 'fetchDataFromAPI';

export const fetchData = () => {
  return { type: fetchDataFromAPI };
};

export const addData = data => {
  return {
    type: addDataToStore,
    payload: data,
  };
};
