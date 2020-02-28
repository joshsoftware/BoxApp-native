import { callapiHelper } from '../actionConstants/apiHelperConstants';

const fetchApiHelper = details => {
  console.log('in api action', details);
  return { type: callapiHelper, payload: details };
};

export default fetchApiHelper;
