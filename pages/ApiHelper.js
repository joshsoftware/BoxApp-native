import {useDispatch, useSelector} from 'react-redux';
import {STORE_RESPONSE} from '../actions/StoreResponse';

function getDefault() {
  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  return defaultHeaders;
}
const dispatch = useDispatch();
const ResponseReducer = useSelector(state => state.StoreResponseReducer);
console.log(ResponseReducer);

const ApiHelper = (endpoint, body, method, query_parameter) => {
  const url = `${process.env.API_KEY}/api/v1/${endpoint}${query_parameter}`;
  console.log(url);
  let method1 = method;
  let body1 = body;

  fetch(url, {
    method1,
    headers: {
      ...getDefault(),
      //...customHeaders()
    },
    body1,
  })
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
      dispatch(STORE_RESPONSE(responseJson));
    })
    .catch(error => {
      console.error(error);
    });
};

export {ApiHelper};
