import { combineReducers } from "redux";
import events from "./eventsReducer";
import event from "./eventReducer";
import users from "./userReducer";

export default combineReducers({
  events,
  users,
  event
});
