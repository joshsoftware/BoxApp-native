import { put, takeEvery } from 'redux-saga/effects';

import * as citiesAction from '../actionConstants/getCitiesConstants';
import fetchApiHelper from '../actions/apiHelperAction';

function* getCities() {
  const details = {
    endpoint: 'cities',
    query: {},
    method: 'GET',
    headers: {},
    successAction: citiesAction.getCitiesSuccess,
    failureAction: citiesAction.getCitiesFailure,
  };
  yield put(fetchApiHelper(details));
}

export default function* apiCitiesSaga() {
  yield takeEvery(citiesAction.fetchCitiesFromAPI, getCities);
}
