import { JWT, NEW_USER, USER_FETCHED } from "../Actions/userActions";
const initialState = { auth: "", newUser: "", fetchedUser: null };

export default function userReducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case JWT: {
      console.log("user", action.payload);
      return {
        ...state,
        auth: action.payload.jwt,
        loggedInUser: action.payload.id
      };
    }
    case NEW_USER: {
      return { ...state, newUser: action.payload };
    }
    case USER_FETCHED: {
      return { fetchedUser: action.payload };
    }

    default: {
      return state;
    }
  }
}
