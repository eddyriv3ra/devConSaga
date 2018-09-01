import { 
  GET_PROFILE,
  GET_PROFILE_ERRORS,
  GET_PROFILE_SUCCESS,
  CLEAR_CURRENT_PROFILE,
  CREATE_PROFILE,
  CREATE_PROFILE_SUCCESS,
  DELETE_ACCOUNT,
  DELETE_ACCOUNT_SUCCESS,
  ADD_EXPERIENCE,
  ADD_EXPERIENCE_SUCCESS,
  ADD_EDUCATION,
  ADD_EDUCATION_SUCCESS,
  DELETE_EXPERIENCE,
  DELETE_EDUCATION,
  GET_PROFILES,
  GET_PROFILES_SUCCESS,
  GET_PROFILE_BY_HANDLE,
  GET_PROFILE_BY_HANDLE_SUCCESS,
} from '../constants'

export const getCurrentProfile = () => ({
  type: GET_PROFILE,
});

export const getCurrentProfileSuccess = (profileData) => ({
  type: GET_PROFILE_SUCCESS,
  profileData,
});

export const profileErrors = () => ({
  type: GET_PROFILE_ERRORS,
  profile: {}
});

export const clearCurrentProfile = () => ({
  type: CLEAR_CURRENT_PROFILE,
});

export const createProfile = profileData => ({
  type: CREATE_PROFILE,
  profileData,
});

export const createProfileSuccess = profileData => ({
  type: CREATE_PROFILE_SUCCESS,
  profileData,
});

export const deleteAccount = () => ({
  type: DELETE_ACCOUNT,
});

export const deleteAccountSuccess = () => ({
  type: DELETE_ACCOUNT_SUCCESS
})

export const addExperience = (expData) => ({
  type: ADD_EXPERIENCE,
  expData,
});

export const addExperienceSuccess = (expData) => ({
  type: ADD_EXPERIENCE_SUCCESS,
  expData,
});

export const addEducation = eduData => ({
  type: ADD_EDUCATION,
  eduData,
});

export const addEducationSuccess = eduData => ({
  type: ADD_EDUCATION_SUCCESS,
  eduData,
});

export const deleteExperience = id => ({
  type: DELETE_EXPERIENCE,
  id,
});

export const deleteEducation = id => ({
  type: DELETE_EDUCATION,
  id,
});

export const getProfiles = () => ({
  type: GET_PROFILES,
});

export const getProfilesSuccess = data => ({
  type: GET_PROFILES_SUCCESS,
  data,
});

export const getProfileByHandle = handle => ({
  type: GET_PROFILE_BY_HANDLE,
  handle,
});

export const getProfileByHandleSuccess = handle => ({
  type: GET_PROFILE_BY_HANDLE_SUCCESS,
  handle,
});
