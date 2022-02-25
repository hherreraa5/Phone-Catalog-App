import { fork, all } from 'redux-saga/effects';
import PhoneSaga from './phone';

function* mainSaga() {
  yield all([
    fork(PhoneSaga)
  ]);
}

export default mainSaga;
