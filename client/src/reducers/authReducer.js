import { fromJS } from 'immutable';
import { SET_CURRENT_USER_SUCCESS, REMOVE_CURRENT_USER_SUCCESS, DELETE_ACCOUNT_SUCCESS } from '../constants'
import isEmpty from "../validation/is-Empty";

const initialState = fromJS({
  isAuthenticated: false,
  user: {},
});

const auth = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_USER_SUCCESS:
      return state
      .set('isAuthenticated', !isEmpty(action.userData))
      .set('user', action.userData);
    case REMOVE_CURRENT_USER_SUCCESS:
      return state
      .set('isAuthenticated', false)
      .set('user', action.data);
    case DELETE_ACCOUNT_SUCCESS:
      return state
      .set('isAuthenticated', !isEmpty({}))
      .set('user', {});
    default:
      return state;
  }
};

export default auth;
