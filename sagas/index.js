import { all } from 'redux-saga/effects';
import apiCitiesSaga from './getCitiesSaga';
import apiSportsSaga from './getSportsSaga';
import apiRegistrationSaga from './userRegistrationSaga';
import signInSaga from './signInSaga';
import getOpponentsSaga from './getOpponentsSaga';
import setPasswordSaga from './setPasswordSaga';
import fetchApisaga from '../pages/ApiHelper';

export default function* rootSaga() {
  yield all([
    apiCitiesSaga(),
    apiSportsSaga(),
    apiRegistrationSaga(),
    signInSaga(),
    getOpponentsSaga(),
    fetchApisaga(),
    setPasswordSaga(),
  ]);
}
