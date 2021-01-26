import { put, takeEvery } from 'redux-saga/effects';
import fetchApiHelper from '../actions/apiHelperAction';

import {
  fetchCitiesFromAPI,
  getCitiesSuccess,
  getCitiesFailure,
} from '../actionConstants/getCitiesConstants';

function* getCities() {
  const details = {
    endpoint: 'cities',
    query: {},
    method: 'GET',
    headers: {},
    successAction: getCitiesSuccess,
    failureAction: getCitiesFailure,
  };
  yield put(fetchApiHelper(details));
}

export default function* apiCitiesSaga() {
  yield takeEvery(fetchCitiesFromAPI, getCities);
}
