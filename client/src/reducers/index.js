import { combineReducers } from 'redux-immutable'
import auth from './authReducer';
import errors from './errorReducer'

const combinedReducers = combineReducers([
  auth,
  errors
])

export default combinedReducers;