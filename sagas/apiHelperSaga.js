import { call, takeEvery, put } from 'redux-saga/effects';
import ApiHelper from '../pages/ApiHelper';
import callapiHelper from '../actionConstants/apiHelperConstants';
import { addSignInDetails } from '../actions/signInAction';

function* apiHelper(action) {
  const data = yield call(ApiHelper(action.payload));

  yield put(addSignInDetails([data]));
}

export default function* apiHelperSaga() {
  yield takeEvery(callapiHelper, apiHelper);
}
