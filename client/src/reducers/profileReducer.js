import { fromJS } from 'immutable';
import { GET_PROFILE_SUCCESS, GET_PROFILE_ERRORS, CLEAR_CURRENT_PROFILE, GET_PROFILE, CREATE_PROFILE_SUCCESS,
  DELETE_ACCOUNT_SUCCESS,
  ADD_EXPERIENCE_SUCCESS,
  ADD_EDUCATION_SUCCESS,
  GET_PROFILES_SUCCESS,
  GET_PROFILE_BY_HANDLE_SUCCESS,
} from '../constants'

const initialState = fromJS({
  profile: null,
  profiles: null,
  loading: false,
  createProfile: false,
});

const profiles = (state = initialState, action) => {
  switch(action.type){
    case GET_PROFILE:
      return state
        .set('loading', true)
    case GET_PROFILE_SUCCESS:
     return state
      .set('profile', action.profileData)
      .set('loading', false)
      .set('createProfile', false)
    case GET_PROFILE_ERRORS:
      return state
        .set('profile', null)
        .set('loading', false)
    case CREATE_PROFILE_SUCCESS:
      return state
        .set('profile', action.profileData)
        .set('loading', false)
        .set('createProfile', true)
    case CLEAR_CURRENT_PROFILE:
      return state
        .set('profile', null)
    case DELETE_ACCOUNT_SUCCESS:
      return state
        .set('profile', {})
        .set('loading', false)
    case ADD_EXPERIENCE_SUCCESS:
      return state
        .set('profile', action.expData)
        .set('createProfile', true)
    case ADD_EDUCATION_SUCCESS:
      return state
        .set('profile', action.eduData)
        .set('createProfile', true)
    case GET_PROFILES_SUCCESS:
      return state
        .set('profiles', action.data)
        .set('loading', false)
    case GET_PROFILE_BY_HANDLE_SUCCESS:
    return state
      .set('profile', action.handle)
      .set('loading', false)
    default:
      return state;
  }
}

export default profiles;