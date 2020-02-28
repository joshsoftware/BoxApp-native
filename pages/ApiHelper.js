import qs from 'query-string';
import { put, takeEvery } from 'redux-saga/effects';
import { callapiHelper } from '../actionConstants/apiHelperConstants';

function getDefaultHeaders() {
  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  return defaultHeaders;
}

function* api(action) {
  console.log('in apihelper..........', action.payload);

  const {
    endpoint,
    body,
    query,
    method,
    headers,
    sucessAction,
    failureAction,
    failureMessage,
    successMsg,
  } = action.payload;

  let url = `${process.env.API_URL}/api/v1/${endpoint}`;
  if (method === 'GET' && Object.keys(query).length > 0) {
    url = `${url}?${qs.stringify(query)}`;
  }
  console.log('url..........', url);
  const response = yield fetch(url, {
    method,
    headers: {
      ...getDefaultHeaders(),
      ...headers,
    },
    body,
  });

  if (response.ok) {
    const data = yield response.json();
    console.log('data is.........', data);
    yield put({ type: sucessAction, payload: data });
  } else {
    yield put({ type: failureAction, payload: { message: failureMessage } });
  }
}

export default function* fetchApisaga() {
  yield takeEvery(callapiHelper, api);
}
