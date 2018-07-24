
import { call, all, takeEvery, put } from 'redux-saga/effects'
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from 'jwt-decode'
import { addUser } from '../components/auth/Register.service';
import { loginServiceSubmit } from '../components/auth/Login.service';
import { REGISTER_USER, SET_CURRENT_USER } from '../constants';
import { 
  authErrors,
  loginUser,
 } from '../actions/authActions'
//import { submitUserError} from '../actions/authActions';

export function* registerRequest(action) {
  try {
    yield addUser(action.userData);
   } catch(e) {
      yield put(authErrors(e.response.data))
   }
}

export function* loginUserRequest(action) {
  try {
    const res = yield loginServiceSubmit(action.userData)
    const { token } = res.data;
    //Set token to local storage
    localStorage.setItem("jwtToken", token);
    //Set token to auth header
    setAuthToken(token);
    //Decode token to get user data
    const decoded = jwt_decode(token);
    //Set current user
    yield put(loginUser(decoded))
  } catch(e){
    yield put(authErrors(e.response.data))
  }
}

export default function* root() {
  yield all([
    takeEvery(REGISTER_USER, registerRequest),
    takeEvery(SET_CURRENT_USER, loginUserRequest),
  ])
}