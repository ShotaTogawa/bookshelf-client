import * as actionTypes from "./type";
import axios from "../api";

export const signup = formValues => async dispatch => {
  const response = await axios.post("/api/signup", formValues);
  dispatch({ type: actionTypes.SIGNIN_USER, payload: response.data });
};

export const signin = formValues => async dispatch => {
  const response = await axios.post("/api/signin", formValues);
  dispatch({ type: actionTypes.SIGNUP_USER, payload: response.data });
};
