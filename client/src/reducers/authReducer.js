import { fromJS } from 'immutable';
import { REGISTER_USER_SUBMIT } from '../constants'

const initialState = fromJS({
  user: 'Pablo'
});

const auth = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER_USER_SUBMIT:
      return state.setIn(['user'], action.userData);
    default:
      return state;
  }
};

export default auth;
