import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router";
import EventsListContainer from "./Components/EventsListContainer";
import SignUpFormContainer from "./Components/SignUpFormContainer";
import EventDetailContainer from "./Components/EventDetailContianer";
import TicketDetailContainer from "./Components/TicketDetailContainer";
import UserProfileContainer from "./Components/UserProfileContainer";
import LoginFormContainer from "./Components/LoginFormContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          WELCOME TO THIS TICKET WEBSITE FOR ALL THE ODD EVENTS
          <Route exact path="/" component={EventsListContainer} />
          <Route exact path="/signup" component={SignUpFormContainer} />
          <Route exact path="/events/:id" component={EventDetailContainer} />
          <Route
            exact
            path="/events/:eventId/tickets/:id"
            component={TicketDetailContainer}
          />
          <Route exact path="/login" component={LoginFormContainer} />
          <Route path="/user/:id" component={UserProfileContainer} />
        </main>
      </div>
    );
  }
}

export default App;
