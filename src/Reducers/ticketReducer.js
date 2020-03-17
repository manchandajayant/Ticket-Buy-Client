import {
  NEW_TICKET,
  FETCH_TICKET,
  TICKETS_FETCHED
} from "../Actions/eventActions";
const initialState = null;

export default function eventReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case NEW_TICKET: {
      return [...state, action.payload];
    }
    case FETCH_TICKET: {
      return { ticket: action.payload };
    }
    case TICKETS_FETCHED: {
      return { tickets: action.payload };
    }
    default: {
      return state;
    }
  }
}
