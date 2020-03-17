import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Eventdetail extends Component {
  render() {
    console.log(this.props.event);
    if (!this.props.event) {
      return <h1>No tickets yet</h1>;
    } else {
      return (
        <div>
          <div>
            <h1>{this.props.event.event.name}</h1>
            <h3>DESCRIPTION: {this.props.event.event.description}</h3>
            <img src={this.props.event.event.url} />
            <h4>START DATE: {this.props.event.event.startDate}</h4>
            <h4>END DATE: {this.props.event.event.endDate}</h4>

            {this.props.event.event.tickets.map(d => {
              return (
                <li>
                  <ul>Ticket:{d.price}</ul>
                  <p>
                    <Link to={`/tickets/${d.id}`}>Click to open</Link>
                  </p>
                </li>
              );
            })}
          </div>
        </div>
      );
    }
  }
}
