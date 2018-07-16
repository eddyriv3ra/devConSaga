import { GET_ERRORS } from "../constants";
import { fromJS } from 'immutable';

const initialState = fromJS({});

const error = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return state.setIn(['errors'], action.errors);
    default:
      return state;
  }
}

export default error;
