import { all } from 'redux-saga/effects';
import apiCitiesSaga from './getCitiesSaga';
import apiSportsSaga from './getSportsSaga';
import apiRegistrationSaga from './userRegistrationSaga';
import signInSaga from './signInSaga';
import getOpponentsSaga from './getOpponentsSaga';
import apiHelperSaga from './apiHelperSaga';
import fetchApisaga from '../pages/ApiHelper';

export default function* rootSaga() {
  yield all([
    apiCitiesSaga(),
    apiSportsSaga(),
    apiRegistrationSaga(),
    signInSaga(),
    getOpponentsSaga(),
    fetchApisaga(),
  ]);
}
