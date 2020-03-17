import {
  EVENTS_FETCHED,
  NEW_EVENT,
  EVENT_FETCHED
} from "../Actions/eventActions";
const initialState = { events: [] };

export default function eventsReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case EVENTS_FETCHED: {
      return { ...state, events: action.payload };
    }
    case NEW_EVENT: {
      return { ...state, events: [action.payload, ...state.events] };
    }
    case EVENT_FETCHED: {
      return { event: action.payload };
    }
    default: {
      return state;
    }
  }
}
