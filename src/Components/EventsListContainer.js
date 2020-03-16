import React, { Component } from "react";
import { connect } from "react-redux";
import EventsList from "./EventsList";
import { showAllEvents } from "../Actions/eventActions";

export class EventsListContainer extends Component {
  componentDidMount() {
    this.props.showAllEvents();
  }
  render() {
    return (
      <div>
        <EventsList events={this.props.events} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
});

const mapDispatchToProps = {
  showAllEvents
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsListContainer);
