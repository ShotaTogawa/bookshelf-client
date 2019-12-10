import * as actionTypes from "../actions/type";
import _ from "lodash";

const book_reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CREATE_BOOK:
      return { ...state, ...action.payload };
    case actionTypes.FETCH_BOOKS:
      console.log(action.payload);
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    // return {
    //   ...state,
    //   [action.payload._id]: action.payload
    // };
    case actionTypes.FETCH_BOOK:
      console.log({ ...state, [action.payload._id]: action.payload });
      return { ...state, [action.payload._id]: action.payload };
    case actionTypes.DELETE_MEMO:
      return { ...state };
    case actionTypes.EDIT_BOOK:
      return { ...state, [action.payload._id]: action.payload };
    case actionTypes.GET_TIMELINE:
      return { ...state, books: action.payload };
    case actionTypes.UPDATE_EVALUATION:
      return { ...state, [action.payload._id]: action.payload };
    case actionTypes.UPDATE_START_DATE:
      return { ...state, [action.payload._id]: action.payload };
    case actionTypes.UPDATE_END_DATE:
      return { ...state, [action.payload._id]: action.payload };
    case actionTypes.UPDATE_READ_PAGES:
      return { ...state, [action.payload._id]: action.payload };
    default:
      return state;
  }
};

export default book_reducer;
