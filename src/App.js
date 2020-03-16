import React from "react";
import "./App.css";
import { Route } from "react-router";
import EventsListContainer from "./Components/EventsListContainer";
import SignUpFormContainer from "./Components/SignUpFormContainer";
import EventDetailContainer from "./Components/EventDetailContianer";

function App() {
  return (
    <div className="App">
      <main>
        Hello
        <Route exact path="/" component={EventsListContainer} />
        <Route exact path="/signup" component={SignUpFormContainer} />
        <Route exact path="/events/:id" component={EventDetailContainer} />
      </main>
    </div>
  );
}

export default App;
