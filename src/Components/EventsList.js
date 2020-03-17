import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EventsList extends Component {
  render() {
    console.log("from", this.props.events);
    if (this.props.events) {
      return (
        <div>
          {this.props.events.map(event => (
            <div>
              <ul key={event.id}></ul>
              <h1>
                <Link to={`/events/${event.id}`}>{event.name}</Link>
              </h1>
              <h3>DESCRIPTION: {event.description}</h3>
              <img src={event.url} />
              <h4>START DATE: {event.startDate}</h4>
              <h4>END DATE: {event.endDate}</h4>
            </div>
          ))}
        </div>
      );
    } else {
      return <h1>Loading....</h1>;
    }
  }
}
