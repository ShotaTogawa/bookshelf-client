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
export const setCurrentUser = userId => async dispatch => {
  const response = await api.get(`/api/user/${userId}`);
  dispatch({ type: actionTypes.SET_CURRENT_USER, payload: response.data });
};

// book

export const createBook = (userId, formValues) => async dispatch => {
  const response = await api.post(`/api/books/${userId}`, formValues);
  dispatch({ type: actionTypes.CREATE_BOOK, payload: response.data });
};

export const fetchBooks = userId => async dispatch => {
  const response = await api.get(`/api/books/${userId}`);
  console.log(response);
  dispatch({ type: actionTypes.FETCH_BOOKS, payload: response.data });
};

export const fetchBook = (userId, bookId) => async dispatch => {
  const response = await api.get(`/api/books/${userId}/${bookId}`);
  dispatch({ type: actionTypes.FETCH_BOOK, payload: response.data });
};
