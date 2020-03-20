import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Components/CSS/ticketdetail.css";
import CommentsContianer from "./CommentsContianer";

export default class Ticketdetail extends Component {
  render() {
    //console.log("indetail");
    if (!this.props.ticket) {
      return <h1>No TICKETS</h1>;
    } else {
      return (
        <div>
          <Link to={`/events/${this.props.ticket.ticket.eventId}`}>BACK</Link>
          <h1>PRICE:{this.props.ticket.ticket.price}</h1>
          <h2>DETAILS:{this.props.ticket.ticket.description}</h2>
          <h3>
            <Link to={`/user/${this.props.ticket.ticket.user.id}`}>
              {this.props.ticket.ticket.user.email}
            </Link>
          </h3>
          <img src={this.props.ticket.url} alt="Not Loading" />

          <CommentsContianer />
        </div>
      );
    }
  }
}
