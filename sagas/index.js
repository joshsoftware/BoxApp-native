import { all } from 'redux-saga/effects';
import apiCitiesSaga from './apiCitiesSaga';
import apiSportsSaga from './apiSportsSaga';

export default function* rootSaga() {
  yield all([apiCitiesSaga(), apiSportsSaga()]);
}
