import * as actionTypes from "../actions/type";

const book_reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.CREATE_BOOK:
      return {};
    default:
      return state;
  }
};

export default book_reducer;
