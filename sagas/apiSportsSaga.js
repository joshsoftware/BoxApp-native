import { call, put, takeEvery } from 'redux-saga/effects';
import ApiHelper from '../pages/ApiHelper';
import { fetchSportsFromAPI, addSports } from '../actions/apiSportsAction';

function* fetchSports() {
  console.log('In saga of sports..........');
  const data = yield call(ApiHelper, 'city_sports/display', null, {}, 'GET', {
    'user-auth-token':
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNTMifQ.7AMp_cYWn2oTSJmBUuuDu-FxCGYe_O0pUvpUIFgoJrw',
  });
  yield put(addSports(data));
}

export default function* apiSportsSaga() {
  yield takeEvery(fetchSportsFromAPI, fetchSports);
}
