import * as actionTypes from "./type";
import { api } from "../api";

// auth
export const signup = formValues => async dispatch => {
  const response = await api.post("/api/signup", formValues);
  dispatch({ type: actionTypes.SIGNIN_USER, payload: response.data });
};

export const signin = formValues => async dispatch => {
  const response = await api.post("/api/signin", formValues);
  dispatch({ type: actionTypes.SIGNUP_USER, payload: response.data });
};

export const signout = () => async dispatch => {
  await api.get("/api/signout");
  dispatch({ type: actionTypes.SIGNOUT_USER });
};

// user
export const setCurrentUser = user => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    user
  };
};
