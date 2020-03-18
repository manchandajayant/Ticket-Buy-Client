import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTicket } from "../Actions/ticketActions";
import { fetchUser } from "../Actions/userActions";
import TicketDetail from "./TicketDetail";

export class TicketDetailContainer extends Component {
  state = {
    risk: 5
  };

  riskCalculator = () => {
    if (this.props.ticket.ticket.user.tickets.length < 30) {
      return this.setState({ risk: this.state.risk + 1 });
    } else {
      return this.setState({ risk: 5 });
    }
  };

  componentDidMount() {
    console.log("this", this.props.ticket);
    this.props.fetchTicket(Number(this.props.match.params.eventId));
  }

  render() {
    console.log("ticket b", this.props.event);
    return (
      <div>
        <TicketDetail
          ticket={this.props.ticket}
          user={this.props.user}
          risk={this.props.riskCalculator}
          riskState={this.state.risk}
          event={this.props.event}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ticket: state.ticket,
  user: state.users.fetchedUser,
  event: state.event
});

const mapDispatchToProps = {
  fetchTicket,
  fetchUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketDetailContainer);
