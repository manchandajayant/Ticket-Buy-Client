import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router";
import EventsListContainer from "./Components/EventsListContainer";
import SignUpFormContainer from "./Components/SignUpFormContainer";
import EventDetailContainer from "./Components/EventDetailContianer";
import TicketDetailContainer from "./Components/TicketDetailContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          Hello
          <Route exact path="/" component={EventsListContainer} />
          <Route exact path="/signup" component={SignUpFormContainer} />
          <Route exact path="/events/:id" component={EventDetailContainer} />
          <Route exact path="/tickets/:id" component={TicketDetailContainer} />
        </main>
      </div>
    );
  }
}

export default App;
