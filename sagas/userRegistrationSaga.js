import { call, put, takeEvery } from 'redux-saga/effects';
import ApiHelper from '../pages/ApiHelper';
import { addRegDetails } from '../actions/userRegistrationAction';
import { addUserAPI } from '../actionConstants/userRegConstants';
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
  };
  yield put(fetchApiHelper(details));
}

export default function* apiRegistrationSaga() {
  yield takeEvery(addUserAPI, addUser);
}
