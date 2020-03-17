import React, { Component } from "react";
import { connect } from "react-redux";
import EventsList from "./EventsList";
import { showAllEvents } from "../Actions/eventActions";
import LoginFormContainer from "./LoginFormContainer";
import CreateNewEventContainer from "./CreateNewEventContainer";

export class EventsListContainer extends Component {
  componentDidMount() {
    this.props.showAllEvents();
  }
  render() {
    console.log(this.props.users);
    if (!this.props.users) {
      return (
        <div>
          <EventsList events={this.props.events} />
          <LoginFormContainer />
        </div>
      );
    } else {
      return (
        <div>
          <EventsList events={this.props.events} />
          <CreateNewEventContainer />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  events: state.events.events,
  users: state.users
});

const mapDispatchToProps = {
  showAllEvents
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsListContainer);
