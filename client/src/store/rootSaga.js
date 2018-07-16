import { all, fork } from "redux-saga/effects";

import registerSaga from "../sagas/register.sagas";

export default function* root() {
  yield all([
    fork(registerSaga)
  ])
};
