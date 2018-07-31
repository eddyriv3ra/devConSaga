import { combineReducers } from 'redux-immutable';
import auth from '../reducers/authReducer';
import errors from '../reducers/errorReducer';
import profile from '../reducers/profileReducer';

export default combineReducers({
  auth,
  errors,
  profile,
});
