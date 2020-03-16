import React, { Component } from "react";

export default class EventsList extends Component {
  render() {
    if (this.props.events) {
      return (
        <div>
          {this.props.events.map(event => (
            <div>
              <h1>{event.name}</h1>
              <h3>{event.description}</h3>
              <image src={event.url} />
              <h4>{event.startDate}</h4>
              <h4>{event.endDate}</h4>
            </div>
          ))}
        </div>
      );
    } else {
      return <h1>Loading....</h1>;
    }
  }
}
