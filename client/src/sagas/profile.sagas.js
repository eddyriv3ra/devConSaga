import { takeEvery, all, put, call } from 'redux-saga/effects';
import { GET_PROFILE } from '../constants';
import { profileServiceSubmit } from '../components/profile/Profile.service'
import { profileErrors, getCurrentProfileSuccess } from '../actions/profileActions';

export function* profileRequest(action) {
  try {
    const res = yield call(profileServiceSubmit())
    yield put(getCurrentProfileSuccess(res.data))
  }catch (e){
    yield put(profileErrors(action.errors))
  }
}

export default function* root() {
  yield all([
    takeEvery(GET_PROFILE, profileRequest),
  ])
}
