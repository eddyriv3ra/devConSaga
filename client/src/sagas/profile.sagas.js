import { takeEvery, all, put, call } from 'redux-saga/effects';
import { GET_PROFILE,
  CREATE_PROFILE,
  DELETE_ACCOUNT,
  ADD_EXPERIENCE,
  ADD_EDUCATION,
  DELETE_EXPERIENCE,
  DELETE_EDUCATION,
  GET_PROFILES,
  GET_PROFILE_BY_HANDLE,
} from '../constants';
import { profileServiceSubmit } from '../components/profile/Profile.service'
import { profileCreateServiceSubmit } from '../components/profile/ProfileCreate.service';
import { deleteAccountService } from '../components/profile/ProfileDelete.service';
import { profileAddExperienceSubmit } from '../components/profile/ProfileAddExperience.service';
import { profileAddEducationSubmit } from '../components/profile/ProfileAddEducation.service';
import { deleteExperienceService } from '../components/profile/ProfileDeleteExperience.service';
import { deleteEducationService } from '../components/profile/ProfileDeleteEducation.service';
import { allProfilesServiceSubmit } from '../components/profile/Profiles.service';
import { profileHandleServiceSubmit } from '../components/profile/ProfileHandle.service'
import {
  profileErrors,
  getCurrentProfileSuccess,
  createProfileSuccess,
  deleteAccountSuccess,
  addExperienceSuccess,
  addEducationSuccess,
  getProfilesSuccess,
  getProfileByHandleSuccess,
} from '../actions/profileActions';
import { authErrors } from '../actions/authActions';

export function* profileRequest() {
  try {
    const res = yield profileServiceSubmit()
    yield put(getCurrentProfileSuccess(res.data))
  }catch (e){
    yield put(profileErrors(e.response.data))
  }
}

export function* profilesRequest() {
  try {
    const res = yield allProfilesServiceSubmit()
    yield put(getProfilesSuccess(res.data))
  }catch (e){
    yield put(profileErrors(e.response.data))
  }
}

export function* profileHandleRequest(action) {
  try {
    const res = yield profileHandleServiceSubmit(action.handle)
    yield put(getProfileByHandleSuccess(res.data))
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

export function* addExperienceRequest(action) {
  try {
    const res = yield profileAddExperienceSubmit(action.expData)
    yield put(addExperienceSuccess(res.data))
  } catch (e) {
    yield put(authErrors(e.response.data))
  }
}

export function* addEducationRequest(action) {
  try {
    const res = yield profileAddEducationSubmit(action.eduData)
    yield put(addEducationSuccess(res.data))
  } catch (e) {
    yield put(authErrors(e.response.data))
  }
}

export function* removeExperienceRequest(action) {
  try {
    yield deleteExperienceService(action.id)
    yield call(profileRequest)
  } catch (e) {
    yield put(authErrors(e.response.data))
  }
}

export function* removeEducationRequest(action) {
  try {
    yield deleteEducationService(action.id)
    yield call(profileRequest)
  } catch (e) {
    yield put(authErrors(e.response.data))
  }
}

export function* deleteAccountRequest() {
  try {
    if(window.confirm('Are you sure? This can not be undone')) {
      yield deleteAccountService();
      yield put(deleteAccountSuccess())
    }
  }catch (e){
    yield put(profileErrors(e.response.data))    
  }
}

export default function* root() {
  yield all([
    takeEvery(GET_PROFILE, profileRequest),
    takeEvery(CREATE_PROFILE, createProfileRequest),
    takeEvery(DELETE_ACCOUNT, deleteAccountRequest),
    takeEvery(ADD_EXPERIENCE, addExperienceRequest),
    takeEvery(ADD_EDUCATION, addEducationRequest),
    takeEvery(DELETE_EXPERIENCE, removeExperienceRequest),
    takeEvery(DELETE_EDUCATION, removeEducationRequest),
    takeEvery(GET_PROFILES, profilesRequest),
    takeEvery(GET_PROFILE_BY_HANDLE, profileHandleRequest),
  ])
}
