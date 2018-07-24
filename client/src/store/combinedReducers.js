import { combineReducers } from 'redux-immutable';
import auth from '../reducers/authReducer';
import errors from '../reducers/errorReducer';

export default combineReducers({
  auth,
  errors,
});
