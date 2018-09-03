import { all, fork } from "redux-saga/effects";

import registerSaga from "../sagas/auth.sagas";
import profileSaga from '../sagas/profile.sagas';
import postSaga from '../sagas/post.saga'

export default function* root() {
  yield all([
    fork(registerSaga),
    fork(profileSaga),
    fork(postSaga),
  ])
};
