import { call, put, takeEvery } from 'redux-saga/effects';
import ApiHelper from '../pages/ApiHelper';
import { addSports } from '../actions/getSportsAction';
import { fetchSportsFromAPI } from '../actionConstants/getSportsConstants';

function* fetchSports() {
  const data = yield call(ApiHelper, 'city_sports/display', null, {}, 'GET', {
    'user-auth-token':
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiODUifQ.l__H5sIxSBrj0zuCNinV36IGZjPpB60gjSnnS9aHWKo',
  });
  yield put(addSports(data));
}

export default function* apiSportsSaga() {
  yield takeEvery(fetchSportsFromAPI, fetchSports);
}
