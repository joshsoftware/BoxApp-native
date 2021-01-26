import {Add_Sport_Id} from '../constants';

const initialState = {
  sportid: null,
  sportname: '',
};

const SportIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_Sport_Id:
      return {
        ...state,
        sportid: action.sportid,
        sportname: action.sportname,
      };

    default:
      return state;
  }
};

export default SportIdReducer;
