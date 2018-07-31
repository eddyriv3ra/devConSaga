import { all, fork } from "redux-saga/effects";

import registerSaga from "../sagas/auth.sagas";
import profileSaga from '../sagas/profile.sagas';

export default function* root() {
  yield all([
    fork(registerSaga),
    fork(profileSaga)
  ])
};
