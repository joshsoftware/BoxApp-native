import { call, put, takeEvery } from 'redux-saga/effects';
import ApiHelper from '../pages/ApiHelper';
import { fetchCitiesFromAPI, addCities } from '../actions/apiCitiesAction';

function* fetchCities() {
  console.log('In saga..........');
  const data = yield call(ApiHelper, 'cities');
  yield put(addCities(data));
}

export default function* apiCitiesSaga() {
  yield takeEvery(fetchCitiesFromAPI, fetchCities);
}
