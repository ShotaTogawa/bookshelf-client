import { combineReducers } from "redux";
import user_reducer from "./user";
import book_reducer from "./book";
import memo_reducer from "./memo";
import search_reducer from "./search";

const rootReducer = combineReducers({
  user: user_reducer,
  book: book_reducer,
  memo: memo_reducer,
  search: search_reducer
});

export default rootReducer;
