import { 
  GET_PROFILE,
  GET_PROFILE_ERRORS,
  GET_PROFILE_SUCCESS,
  CLEAR_CURRENT_PROFILE,
} from '../constants'

export const getCurrentProfile = () => ({
  type: GET_PROFILE,
});

export const getCurrentProfileSuccess = (profile) => ({
  type: GET_PROFILE_SUCCESS,
  profile,
});

export const profileErrors = () => ({
  type: GET_PROFILE_ERRORS,
  profile: {}
});

export const clearCurrentProfile = () => ({
  type: CLEAR_CURRENT_PROFILE,
})
