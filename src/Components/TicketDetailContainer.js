import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTicket } from "../Actions/ticketActions";
import TicketDetail from "./TicketDetail";

export class TicketDetailContainer extends Component {
  componentDidMount() {
    console.log("this", this.props.match.params.id);
    this.props.fetchTicket(Number(this.props.match.params.id));
  }
  render() {
    console.log("ticket b", this.props.ticket);
    return (
      <div>
        <TicketDetail ticket={this.props.ticket} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ticket: state.ticket
});

const mapDispatchToProps = {
  fetchTicket
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketDetailContainer);
