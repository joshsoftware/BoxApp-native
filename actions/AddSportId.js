import {Add_Sport_Id} from '../constants';

export function ADD_SPORT_ID(sportid, sportname) {
  return {
    type: Add_Sport_Id,
    sportid: sportid,
    sportname: sportname,
  };
}
