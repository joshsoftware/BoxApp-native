const initialState = {
  data: [],
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Add_data_to_store':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default apiReducer;
