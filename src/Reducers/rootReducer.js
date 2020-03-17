import { combineReducers } from "redux";
import events from "./eventsReducer";
import event from "./eventReducer";
import users from "./userReducer";
import ticket from "./ticketReducer";

export default combineReducers({
  events,
  users,
  event,
  ticket
});
