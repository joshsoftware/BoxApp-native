import { callapiHelper } from '../actionConstants/apiHelperConstants';

const fetchApiHelper = details => {
  return { type: callapiHelper, payload: details };
};

export default fetchApiHelper;
