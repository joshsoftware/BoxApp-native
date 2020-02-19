import { call, put, takeEvery } from 'redux-saga/effects';
import ApiHelper from '../pages/ApiHelper';
import { addRegDetails } from '../actions/userRegistrationAction';
import { addUserAPI } from '../actionConstants/userRegConstants';

function* addUser(action) {
  const user = action.payload;
  const data = yield call(
    ApiHelper,
    'users',
    JSON.stringify({
      user: {
        first_name: user.firstName,
        last_name: user.lastName,
        contact_number: user.contactNumber,
        email: user.emailId,
        city_id: user.cityId,
      },
    }),
    {},
    'POST',
  );

  yield put(addRegDetails([data]));
}

export default function* apiRegistrationSaga() {
  yield takeEvery(addUserAPI, addUser);
}
