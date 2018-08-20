import { takeEvery, all, put } from 'redux-saga/effects';
import { GET_PROFILE, CREATE_PROFILE } from '../constants';
import { profileServiceSubmit } from '../components/profile/Profile.service'
import { profileCreateServiceSubmit } from '../components/profile/ProfileCreate.service';
import { profileErrors, getCurrentProfileSuccess, createProfileSuccess } from '../actions/profileActions';

export function* profileRequest() {
  try {
    const res = yield profileServiceSubmit()
    yield put(getCurrentProfileSuccess(res.data))
  }catch (e){
    yield put(profileErrors(e.response.data))
  }
}

export function* createProfileRequest(action) {
  try {
    const res = yield profileCreateServiceSubmit(action.profileData)
    yield put(createProfileSuccess(res.data))
  } catch (e) {
    yield put(profileErrors(e.response.data))
  }
}

export default function* root() {
  yield all([
    takeEvery(GET_PROFILE, profileRequest),
    takeEvery(CREATE_PROFILE, createProfileRequest)
  ])
}
