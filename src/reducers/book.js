import * as actionTypes from "../actions/type";

const book_reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CREATE_BOOK:
      console.log(action.payload);
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default book_reducer;
