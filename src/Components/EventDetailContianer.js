import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEvent } from "../Actions/eventActions";
import EventDetail from "./Eventdetail";
import NewTicketContainer from "./NewTicketContainer";

export class EventDetailContainer extends Component {
  componentDidMount() {
    console.log("this", this.props.match.params.id);
    this.props.fetchEvent(Number(this.props.match.params.id));
  }
  render() {
    console.log("det", this.props.event);
    return (
      <div>
        <EventDetail event={this.props.event} />
        <NewTicketContainer />
      </div>
    );
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
