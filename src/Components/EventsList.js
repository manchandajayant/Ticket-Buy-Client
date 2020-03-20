import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EventsList extends Component {
  render() {
    console.log("from", this.props);
    if (!this.props.events) {
      return <h1>Loading....</h1>;
    } else {
      return (
        <div>
          {this.props.events.map(event => (
            <div>
              <ul key={event.id}></ul>
              <h1 className="event">
                <Link to={`/events/${event.id}`}>{event.name}</Link>
              </h1>
              <h3>DESCRIPTION: {event.description}</h3>
              <img src={event.url} />
            </div>
          ))}
        </div>
      );
    }
  }
}
