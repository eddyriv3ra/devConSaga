import { REGISTER_USER_SUBMIT, GET_ERRORS } from "../constants";


export const submitUser = data => ({
  type: REGISTER_USER_SUBMIT,
  data,
});

export const submitUserError = errors => ({
  type: GET_ERRORS,
  errors,
});
