import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTicket } from "../Actions/ticketActions";
import { fetchUser } from "../Actions/userActions";

import TicketDetail from "./TicketDetail";

export class TicketDetailContainer extends Component {
  state = {
    risk: null,
    riskByAverage: 0,
    riskByTickets: 0,
    riskByComments: 0
  };
  componentDidMount() {
    console.log("this", this.props);
    this.props.fetchTicket(Number(this.props.match.params.id));
  }

  riskCalculator = () => {
    const x = this.props.event.event.tickets.map(p => {
      return parseInt(p.price);
    });
    const y = x.reduce((acc, curr) => {
      console.log("avg", x);
      return acc + curr / x.length;
    }, 0);
    const ticketPrice = parseInt(this.props.ticket.ticket.price);

    console.log("cl", ticketPrice);
    if (ticketPrice < y) {
      this.state.riskByAverage = y - ticketPrice;
    } else if (ticketPrice > y) {
      const z = ticketPrice - y;
      const t = z > 10 ? 10 : z;
      this.state.riskByAverage = t;
    }
    const userTicketsLength = this.props.ticket.ticket.user.tickets.length;
    console.log("r");
    if (userTicketsLength < 1) {
      this.state.riskByTickets = 5;
    }
    if (this.props.ticket.ticket.comments.length < 3) {
      this.state.riskByComments = 5;
    }
    const totalRisk =
      this.state.risk +
      this.state.riskByTickets +
      this.state.riskByAverage +
      this.state.riskByComments;
    if (totalRisk > 95) {
      return this.setState({ risk: 95 });
    } else if (totalRisk < 5) {
      return this.setState({ risk: 5 });
    } else {
      return this.setState({ risk: totalRisk });
    }
  };

  render() {
    //console.log("ticket b", this.props.ticket);
    return (
      <div>
        <p>Risk = {this.state.risk} %</p>
        <button onClick={this.riskCalculator}>
          Click To Check the Risk Level
        </button>
        <TicketDetail
          ticket={this.props.ticket}
          user={this.props.user}
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
