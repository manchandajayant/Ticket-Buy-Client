import React, { Component } from "react";
import { connect } from "react-redux";
import EventsList from "./EventsList";
import { showAllEvents } from "../Actions/eventActions";
import { Link } from "react-router-dom";
import CreateNewEventContainer from "./CreateNewEventContainer";

export class EventsListContainer extends Component {
  componentDidMount() {
    this.props.showAllEvents();
  }
  render() {
    console.log("to", this.props.events);
    if (!this.props.user.auth) {
      return (
        <div>
          <EventsList events={this.props.events.eventsList} />
          <Link to="/login">Login to Add a Ticket</Link>
        </div>
      );
    } else {
      return (
        <div>
          <EventsList events={this.props.events.eventsList} />
          <CreateNewEventContainer />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  events: state.events,
  user: state.users
});

const mapDispatchToProps = {
  showAllEvents
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsListContainer);
