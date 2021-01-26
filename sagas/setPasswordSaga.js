import { put, takeEvery } from 'redux-saga/effects';

import {
  setPasswordAPICall,
  setPasswordSuccess,
  setPasswordFailure,
} from '../actionConstants/setPasswordConstants';

import fetchApiHelper from '../actions/apiHelperAction';

function* password(action) {
  const user = action.userPasswordDetails;
  const token = action.confirmationToken;
  const details = {
    endpoint: 'set_password',
    body: JSON.stringify({
      user: {
        confirmation_token: token,
        password: user.password,
        password_confirmation: user.confirmPassword,
      },
    }),
    query: {},
    method: 'POST',
    headers: {},
    successAction: setPasswordSuccess,
    failureAction: setPasswordFailure,
  };

  yield put(fetchApiHelper(details));
}

export default function* setPasswordSaga() {
  yield takeEvery(setPasswordAPICall, password);
}
