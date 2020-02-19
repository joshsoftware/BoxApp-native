import { call, put, takeEvery } from 'redux-saga/effects';
import ApiHelper from '../pages/ApiHelper';
import { addCities } from '../actions/getCitiesAction';
import { fetchCitiesFromAPI } from '../actionConstants/getcitiesConstants';

function* fetchCities() {
  const data = yield call(ApiHelper, 'cities');
  yield put(addCities(data));
}

export default function* apiCitiesSaga() {
  yield takeEvery(fetchCitiesFromAPI, fetchCities);
}
