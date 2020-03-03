import { getSportsAPICall } from '../actionConstants/getSportsConstants';

const getSports = () => {
  console.log('in sport action');
  return { type: getSportsAPICall };
};

export default getSports;
