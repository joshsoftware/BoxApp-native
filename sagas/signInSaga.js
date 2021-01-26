import { call, put, takeEvery } from 'redux-saga/effects';
import ApiHelper from '../pages/ApiHelper';
import { addSignInDetails } from '../actions/signInAction';
import { checkSignInDetails } from '../actionConstants/signInConstants';
import fetchApiHelper from '../actions/apiHelperAction';

function* signIn(action) {
  const user = action.payload;
  const data = yield call(
    fetchApiHelper,
    'sessions',
    JSON.stringify({
      email: user.emailId,
      password: user.password,
    }),
    {},
    'POST',
  );
}

export default function* signInSaga() {
  yield takeEvery(checkSignInDetails, signIn);
}
