import { fromJS } from 'immutable';
import { GET_PROFILE_SUCCESS, GET_PROFILE_ERRORS, CLEAR_CURRENT_PROFILE, GET_PROFILE } from '../constants'

const initialState = fromJS({
  profile: null,
  profiles: null,
  loading: false,
});

const profiles = (state = initialState, action) => {
  switch(action.type){
    case GET_PROFILE:
      return state
        .set('loading', true)
    case GET_PROFILE_SUCCESS:
     return state
      .set('profile', action.profile)
      .set('loading', false)
    case GET_PROFILE_ERRORS:
      return state
        .set('profile', action.profile)
        .set('loading', false)
    case CLEAR_CURRENT_PROFILE:
      return state
        .set('profile', null)
    default:
      return state;
  }
}

export default profiles;