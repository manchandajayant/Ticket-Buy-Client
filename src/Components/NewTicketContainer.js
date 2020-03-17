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
    //console.log("tick", this.props.user);
    console.log("tick2", this.props.event);
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
  event: state.event,
  user: state.user
});

const mapDispatchToProps = {
  newTicket,
  fetchUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNewEventContainer);
