import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEvent } from "../Actions/eventActions";
import EventDetail from "./Eventdetail";
import NewTicketContainer from "./NewTicketContainer";

export class EventDetailContainer extends Component {
  componentDidMount() {
    this.props.fetchEvent(Number(this.props.match.params.id));
    console.log("this", this.props.event);
  }
  render() {
    console.log("det", this.props.users);
    if (!this.props.users) {
      return (
        <div>
          <EventDetail event={this.props.event} />
        </div>
      );
    } else {
      return (
        <div>
          {" "}
          <EventDetail event={this.props.event} />
          <NewTicketContainer event={this.props.event} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  event: state.event,
  users: state.users
});

const mapDispatchToProps = {
  fetchEvent
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetailContainer);
