import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";

import Router from "./Router";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions";

const composeEnnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnnhancers(applyMiddleware(reduxThunk))
);

if (localStorage.jwt) {
  setAuthToken(localStorage.jwt);
  // console.log(jwt.decode(localStorage.jwt));
  // // store.dispatch(setCurrentUser(jwt.decode(localStorage.jwt)));
}

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
