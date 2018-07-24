import { fromJS } from 'immutable';
import { SET_CURRENT_USER } from '../constants'

const initialState = fromJS({});

const auth = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return state.set('user', action.userData);
    default:
      return state;
  }
};

export default auth;
