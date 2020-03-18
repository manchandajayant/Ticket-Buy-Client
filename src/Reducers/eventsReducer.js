import {
  EVENTS_FETCHED,
  NEW_EVENT,
  EVENT_FETCHED
} from "../Actions/eventActions";
const initialState = { eventsList: [] };

export default function eventsReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case EVENTS_FETCHED: {
      return { ...state, eventsList: action.payload };
    }
    case NEW_EVENT: {
      return { ...state, eventsList: [action.payload, ...state.events] };
    }
    case EVENT_FETCHED: {
      return { events: action.payload };
    }
    default: {
      return state;
    }
  }
}
