import { call, put, takeEvery } from 'redux-saga/effects';
import ApiHelper from '../pages/ApiHelper';

function* fetchData() {
  console.log('In saga..........');
  const data = yield call(ApiHelper, 'cities');
  yield put({ type: 'Add_data_to_store', payload: data });
}

export default function* apiSaga() {
  yield takeEvery('Fetch_Data', fetchData);
}
