import { fromJS } from 'immutable';
import { GET_ERRORS } from '../constants'

const initialState = fromJS({});

const errors = (state = initialState, action) => {
  switch(action.type) {
    case GET_ERRORS:
      return state.set('errors', action.errors);
    default:
      return state;
  }
};

export default errors;
