import { JWT, NEW_USER, USER_FETCHED } from "../Actions/userActions";
const initialState = "";

export default function userReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case JWT: {
      return action.payload;
    }
    case NEW_USER: {
      return [...state, action.payload];
    }
    case USER_FETCHED: {
      console.log(action.payload);
      return { user: action.payload };
    }
    default: {
      return state;
    }
  }
}
