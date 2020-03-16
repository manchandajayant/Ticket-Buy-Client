import { EVENTS_FETCHED } from "../Actions/eventActions";
const initialState = [];

export default function eventReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case EVENTS_FETCHED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
