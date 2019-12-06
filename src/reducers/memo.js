import * as actionTypes from "../actions/type";

const memo_reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CREATE_MEMO:
      return { ...state, [action.payload.id]: action.payload };
    case actionTypes.FETCH_MEMOS:
      return { ...state, memos: action.payload };
    case actionTypes.DELETE_MEMO:
      return { ...state };
    default:
      return {
        ...state
      };
  }
};

export default memo_reducer;
