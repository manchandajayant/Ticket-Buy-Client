import React, { Component } from "react";
import NewTicket from "./NewTicket";
import { connect } from "react-redux";
import { newTicket } from "../Actions/ticketActions";

export class CreateNewEventContainer extends Component {
  state = {
    price: "",
    description: "",
    url: "",
    eventId: this.props.event.id,
    userId: this.props.users.id
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
      url: "",
      eventId: this.state.eventId,
      userId: this.state.userId
    });
  };
  render() {
    // console.log("in new", this.props.event);
    if (this.props.event) {
      return (
        <div>
          <NewTicket
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
        </div>
      );
    } else {
      return <h1>return hi</h1>;
    }
  }
}
const mapStateToProps = state => ({
  users: state.users,
  tickets: state.tickets
});

const mapDispatchToProps = {
  newTicket
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNewEventContainer);
