import { put, takeEvery, select } from 'redux-saga/effects';
import { useSelector } from 'react-redux';
import {
  getSportsAPICall,
  getSportsSuccess,
  getSportsFailure,
} from '../actionConstants/getSportsConstants';
import fetchApiHelper from '../actions/apiHelperAction';

// function* fetchSports() {
//   const data = yield call(ApiHelper, 'city_sports/display', null, {}, 'GET', {
//     'user-auth-token':
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiODUifQ.l__H5sIxSBrj0zuCNinV36IGZjPpB60gjSnnS9aHWKo',
//   });
//   yield put(addSports(data));
// }

// const getToken = () => {
//   console.log('in get token');
//   const PasswordToken = useSelector(state => state.setPasswordReducer);
//   const { token } = PasswordToken.userPasswordToken;
//   return token;
// };

const getItems = state => state.setPasswordReducer;
function* fetchSports() {
  console.log('in sport saga');
  // const data = yield select(getItems);
  // const { token } = data;
  // console.log('&&&&&&&&&&&&', token);

  const details = {
    endpoint: 'city_sports/display',
    body: null,
    query: {},
    method: 'GET',
    headers: {},
    successAction: getSportsSuccess,
    failureAction: getSportsFailure,
    isTokenRequired: true,
  };

  yield put(fetchApiHelper(details));
}

export default function* apiSportsSaga() {
  yield takeEvery(getSportsAPICall, fetchSports);
}
