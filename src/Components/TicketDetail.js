import React, { Component } from "react";
import { Link } from "react-router-dom";

import CommentsContianer from "./CommentsContianer";

export default class Ticketdetail extends Component {
  render() {
    console.log("iindetail", this.props);
    if (!this.props.ticket) {
      return <h1>No</h1>;
    } else {
      return (
        <div>
          <Link to={`/events/${this.props.ticket.ticket.eventId}`}>BACK</Link>
          <h1>PRICE:{this.props.ticket.ticket.price}</h1>
          <h2>DETAILS:{this.props.ticket.description}</h2>
          <h3>{this.props.ticket.ticket.user.email}</h3>
          <img src={this.props.ticket.url} />

          <CommentsContianer ticket={this.props.ticket} />
        </div>
      );
    }
  }
}
