import qs from 'query-string';
import { put, takeEvery, select } from 'redux-saga/effects';
import { callapiHelper } from '../actionConstants/apiHelperConstants';

function getDefaultHeaders() {
  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  return defaultHeaders;
}

function* api(action) {
  console.log('payload in api.................', action.payload);

  const {
    endpoint,
    body,
    query,
    method,
    headers,
    successAction,
    failureAction,
    failureMessage,
    isTokenRequired,
  } = action.payload;

  let url = `${process.env.API_URL}/api/v1/${endpoint}`;
  if (method === 'GET' && Object.keys(query).length > 0) {
    url = `${url}?${qs.stringify(query)}`;
  }
  const getToken = yield select(state => state.setPasswordReducer);

  const usertoken = () => {
    if (isTokenRequired === true) {
      console.log('in if');
      const PasswordToken = getToken;
      console.log('token', PasswordToken.userPasswordToken);
      const { token } = PasswordToken.userPasswordToken;
      console.log('token ==== ', token);
      return { 'user-auth-token': token };
    }
    return {};
  };
  const response = yield fetch(url, {
    method,
    headers: {
      ...getDefaultHeaders(),
      ...usertoken(),
    },
    body,
  });

  if (response.ok) {
    const data = yield response.json();
    yield put({ type: successAction, payload: data });
  } else {
    yield put({ type: failureAction, payload: { message: failureMessage } });
  }
}

export default function* fetchApisaga() {
  yield takeEvery(callapiHelper, api);
}
