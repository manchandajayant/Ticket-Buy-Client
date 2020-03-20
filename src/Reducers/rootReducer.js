import { combineReducers } from "redux";
import events from "./eventsReducer";
import event from "./eventReducer";
import users from "./userReducer";
import tickets from "./ticketsReducer";
import comment from "./commentReducer";
import ticket from "./ticketReducer";
export default combineReducers({
  events,
  users,
  event,
  tickets,
  comment,
  ticket
});
