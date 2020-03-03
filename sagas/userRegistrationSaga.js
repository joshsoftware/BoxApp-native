import { put, takeEvery } from 'redux-saga/effects';

import {
  addUserAPICall,
  addUserSuccess,
  addUserFailure,
} from '../actionConstants/userRegConstants';

import fetchApiHelper from '../actions/apiHelperAction';

function* addUser(action) {
  const user = action.payload;
  const details = {
    endpoint: 'users',
    body: JSON.stringify({
      user: {
        first_name: user.firstName,
        last_name: user.lastName,
        contact_number: user.contactNumber,
        email: user.emailId,
        city_id: user.cityId,
      },
    }),
    query: {},
    method: 'POST',
    headers: {},
    successAction: addUserSuccess,
    failureAction: addUserFailure,
  };

  yield put(fetchApiHelper(details));
}

export default function* apiRegistrationSaga() {
  yield takeEvery(addUserAPICall, addUser);
}
