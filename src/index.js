import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";

import App from "./App";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider, connect } from "react-redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers";

const composeEnnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
