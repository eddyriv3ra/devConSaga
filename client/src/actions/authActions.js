import { 
  REGISTER_USER, 
  GET_ERRORS,
  SET_CURRENT_USER,
  SET_CURRENT_USER_SUCCESS,
  REMOVE_CURRENT_USER,
  REMOVE_CURRENT_USER_SUCCESS
} from "../constants";

export const submitUser = userData => ({
  type: REGISTER_USER,
  userData,
});

export const loginUser = userData => ({
  type: SET_CURRENT_USER,
  userData,
});

export const loginUserSuccess = userData => ({
  type: SET_CURRENT_USER_SUCCESS,
  userData,
});

export const authErrors = errors => ({
  type: GET_ERRORS,
  errors,
});

export const logoutUser = () => ({
  type: REMOVE_CURRENT_USER,
  // Remove token from local storage
  // localStorage.removeItem('jwtToken')
  // Remove auth Header for future requests
  // setAuthToken(false);
  // Set current user to {} which will set current user to false
  // loginUser({});
});

export const logoutUserSuccess = () => ({
  type: REMOVE_CURRENT_USER_SUCCESS,
  data: {},
});
