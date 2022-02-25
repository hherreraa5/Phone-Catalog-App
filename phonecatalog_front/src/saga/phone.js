import {
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';
import * as types from '../type/phone';
import * as actions from '../actions/phone';
import * as api from '../api/phone';

function* fetchPhones(){
  try{
      const response = yield call(
          api.getPhone
      );
      yield put(actions.fetchPhonesConfirm({
          phones: response
      }));
  } catch(error){
      yield put(actions.fetchPhonesFailed({
          message: error.message
      }));
  }
}

function* phoneSaga() {
  yield takeLatest(
    types.FETCH_PHONES,
    fetchPhones
  );
}

export default phoneSaga;