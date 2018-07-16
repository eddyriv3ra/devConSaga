
import { call, all, takeEvery } from 'redux-saga/effects'
import { registerServiceSubmit } from '../components/auth/Register.service';
import { REGISTER_USER_SUBMIT } from '../constants';
//import { submitUserError} from '../actions/authActions';

export function* registerRequest(action) {
  try {
    yield call(registerServiceSubmit(action.data))
   } catch(err) {
    console.log(err)
   }
}

export default function* root() {
  yield all([
    takeEvery(REGISTER_USER_SUBMIT, registerRequest)
  ])
}