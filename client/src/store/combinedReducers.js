import { combineReducers } from 'redux-immutable';
import auth from '../reducers/authReducer';
import errors from '../reducers/errorReducer';
import profile from '../reducers/profileReducer';
import post from '../reducers/postReducer';

export default combineReducers({
  auth,
  errors,
  profile,
  post,
});
