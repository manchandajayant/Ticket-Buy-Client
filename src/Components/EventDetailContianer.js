import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEvent } from "../Actions/eventActions";
import { showAllTickets } from "../Actions/ticketActions";
import EventDetail from "./Eventdetail";
import NewTicketContainer from "./NewTicketContainer";

export class EventDetailContainer extends Component {
  componentDidMount() {
    this.props.showAllTickets();
    this.props.fetchEvent(Number(this.props.match.params.id));
  }
  render() {
    console.log("det", this.props);

    if (!this.props.user.auth) {
      return (
        <div>
          <EventDetail event={this.props.event} ticket={this.props.ticket} />
        </div>
      );
    } else {
      return (
        <div>
          {" "}
          <EventDetail event={this.props.event} ticket={this.props.ticket} />
          <div>
            <NewTicketContainer
              event={this.props.event}
              ticket={this.props.ticket}
            />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  event: state.event,
  user: state.users,
  ticket: state.tickets
});

const mapDispatchToProps = {
  fetchEvent,
  showAllTickets
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetailContainer);
