import { all } from 'redux-saga/effects';
import apiCitiesSaga from './getCitiesSaga';
import apiSportsSaga from './getSportsSaga';
import apiRegistrationSaga from './userRegistrationSaga';

export default function* rootSaga() {
  yield all([apiCitiesSaga(), apiSportsSaga(), apiRegistrationSaga()]);
}
