import React, { Component } from "react";
import NewTicket from "./NewTicket";
import { connect } from "react-redux";
import { newTicket } from "../Actions/ticketActions";
import { fetchUser } from "../Actions/userActions";

export class CreateNewEventContainer extends Component {
  state = {
    price: "",
    description: "",
    url: "",
    eventId: "",
    userId: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log("click");
    this.props.newTicket(this.state);
    this.setState({
      price: "",
      description: "",
      url: ""
      // eventId: this.props.event.eventId,
      // userId: this.props.user.userId
    });
  };
  render() {
    console.log(this.props.event);
    if (this.props.event) {
      return (
        <div>
          <NewTicket
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
            event={this.props.event}
          />
        </div>
      );
    } else {
      return <h1>return hi</h1>;
    }
  }
}

const mapDispatchToProps = {
  newTicket
};

export default connect(null, mapDispatchToProps)(CreateNewEventContainer);
