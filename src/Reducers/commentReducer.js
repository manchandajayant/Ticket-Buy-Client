import { NEW_COMMENT, FETCH_COMMENTS } from "../Actions/ commentActions";
const initialState = null;

export default function commentReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case NEW_COMMENT: {
      return [...state, action.payload];
    }
    case FETCH_COMMENTS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
