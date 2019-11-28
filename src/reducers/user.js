import * as actionTypes from "../actions/type";
import setAuthToken from "../utils/setAuthToken";

const initialUser = {
  user: {},
  isAuthenticated: false
};

const user_reducer = (state = initialUser, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_USER:
      localStorage.setItem("jwt", action.payload.token);
      setAuthToken(action.payload.token);
      return {
        user: action.payload.user
      };
    case actionTypes.SIGNIN_USER:
      localStorage.setItem("jwt", action.payload.token);
      setAuthToken(action.payload.token);
      return {
        user: action.payload.user
      };
    case actionTypes.LOGOUT_USER:
      return {
        ...state
      };
    case actionTypes.SET_CURRENT_USER:
      return {
        isAuthenticated: action.token,
        user: action.user
      };
    default:
      return state;
  }
};

export default user_reducer;
