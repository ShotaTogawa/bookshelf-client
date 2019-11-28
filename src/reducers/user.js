import * as actionTypes from "../actions/type";

const initialUser = {
  user: {}
};

const user_reducer = (state = initialUser, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_USER:
      localStorage.setItem("jwt", action.payload.token);
      return {
        user: action.payload.user
      };
    case actionTypes.SIGNIN_USER:
      localStorage.setItem("jwt", action.payload.token);
      return {
        user: action.payload.user
      };
    case actionTypes.LOGOUT_USER:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default user_reducer;
