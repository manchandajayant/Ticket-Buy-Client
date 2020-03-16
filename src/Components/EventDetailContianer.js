import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEvent } from "../Actions/eventActions";
import EventDetail from "./Eventdetail";

export class EventDetailContainer extends Component {
  componentDidMount() {
    console.log("this", this.props.match.params.id);
    this.props.fetchEvent(Number(this.props.match.params.id));
  }
  render() {
    return <EventDetail event={this.props.event} />;
  }
}

const mapStateToProps = state => ({
  event: state.event
});

const mapDispatchToProps = {
  fetchEvent
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetailContainer);
