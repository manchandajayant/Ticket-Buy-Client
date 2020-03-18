import { JWT, NEW_USER } from "../Actions/userActions";
const initialState = { auth: "", newUser: "" };

export default function userReducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case JWT: {
      return {
        ...state,
        auth: action.payload.jwt,
        loggedInUser: action.payload.user
      };
    }
    case NEW_USER: {
      return { ...state, newUser: action.payload };
    }

    default: {
      return state;
    }
  }
}
