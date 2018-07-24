import { 
  REGISTER_USER, 
  GET_ERRORS,
  SET_CURRENT_USER,
} from "../constants";


export const submitUser = userData => ({
  type: REGISTER_USER,
  userData,
});

export const authErrors = errors => ({
  type: GET_ERRORS,
  errors,
});


export const loginUser = userData => ({
  type: SET_CURRENT_USER,
  userData,
});
