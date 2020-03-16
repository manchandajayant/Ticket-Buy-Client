import {
  EVENTS_FETCHED,
  NEW_EVENT,
  EVENT_FETCHED
} from "../Actions/eventActions";
const initialState = [];

export default function eventReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case EVENTS_FETCHED: {
      return action.payload;
    }
    case NEW_EVENT: {
      return [...state, action.payload];
    }
    case EVENT_FETCHED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
