import { call, put, takeEvery, select } from 'redux-saga/effects';
import ApiHelper from '../pages/ApiHelper';
import { addOpponents } from '../actions/getOpponentsAction';
import { fetchOpponentsForUser } from '../actionConstants/getOpponentsConstants';

function* fetchOpponents(action) {
  const getToken = state => state.signInReducer.userSignInDetails.token;
  const token = yield select(getToken);

  const data = yield call(ApiHelper, 'list_opponents', null, {}, 'GET', {
    'user-auth-token': token,
  });
  yield put(addOpponents(data));
}

export default function* getOpponentsSaga() {
  yield takeEvery(fetchOpponentsForUser, fetchOpponents);
}
