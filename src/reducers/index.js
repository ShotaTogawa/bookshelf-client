import { combineReducers } from "redux";
import user_reducer from "./user";
import book_reducer from "./book";

const rootReducer = combineReducers({
  user: user_reducer,
  book: book_reducer
});

export default rootReducer;
