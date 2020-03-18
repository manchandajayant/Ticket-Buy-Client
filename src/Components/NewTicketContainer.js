import React, { Component } from "react";
import NewTicket from "./NewTicket";
import { connect } from "react-redux";
import { newTicket } from "../Actions/ticketActions";

export class CreateNewEventContainer extends Component {
  state = {
    price: "",
    description: "",
    url: "",
    eventId: this.props.event.event.id,
    userId: this.props.user.loggedInUser
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
    console.log("in new", this.props.event.event.id);

    return (
      <div>
        <NewTicket
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.users,
  tickets: state.tickets
});

const mapDispatchToProps = {
  newTicket
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNewEventContainer);
