import { 
  GET_PROFILE,
  GET_PROFILE_ERRORS,
  GET_PROFILE_SUCCESS,
  CLEAR_CURRENT_PROFILE,
  CREATE_PROFILE,
  CREATE_PROFILE_SUCCESS,
  DELETE_ACCOUNT,
  DELETE_ACCOUNT_SUCCESS,
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
