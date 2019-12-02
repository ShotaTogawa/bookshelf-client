import * as actionTypes from "../actions/type";

const book_reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CREATE_BOOK:
      return { ...state, [action.payload.id]: action.payload };
    case actionTypes.FETCH_BOOKS:
      console.log(action.payload);
      return { ...state, books: action.payload };
    default:
      return state;
  }
};

export default book_reducer;
