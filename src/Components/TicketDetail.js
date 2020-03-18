import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Eventdetail extends Component {
  render() {
    console.log("iindetail", this.props.ticket);
    if (!this.props.ticket) {
      return <h1>No</h1>;
    } else {
      return (
        <div>
          <h1>PRICE:{this.props.ticket.ticket.price}</h1>
          <h2>DETAILS:{this.props.ticket.ticket.description}</h2>
          <img src={this.props.ticket.ticket.url} />
          <h3>
            <Link to={`/users/${this.props.ticket.ticket.user.id}`}>
              CREATED BY:{this.props.ticket.ticket.user.email}
            </Link>
          </h3>
        </div>
      );
    }
  }
}
