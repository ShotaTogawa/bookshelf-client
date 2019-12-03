import * as actionTypes from "../actions/type";

const book_reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CREATE_BOOK:
      return { ...state, [action.payload.id]: action.payload };
    case actionTypes.FETCH_BOOKS:
      return { ...state, books: action.payload };
    case actionTypes.FETCH_BOOK:
      return { ...state, book: action.payload };
    case actionTypes.DELETE_MEMO:
      return { ...state };
    case actionTypes.EDIT_BOOK:
      return { ...state, book: action.payload };
    default:
      return state;
  }
};

export default book_reducer;
