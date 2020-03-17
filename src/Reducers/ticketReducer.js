import { FETCH_TICKET, TICKETS_FETCHED } from "../Actions/ticketActions";
const initialState = null;

export default function ticketReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_TICKET: {
      console.log(action.payload);
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
