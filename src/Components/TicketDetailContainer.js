import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTicket } from "../Actions/ticketActions";
import { fetchUser } from "../Actions/userActions";
import TicketDetail from "./TicketDetail";

export class TicketDetailContainer extends Component {
  state = {
    risk: 5
  };
  componentDidMount() {
    console.log("this", this.props.ticket);
    this.props.fetchTicket(Number(this.props.match.params.id));
  }

  riskCalculator = () => {
    console.log("clli");
    const x = this.props.event.event.tickets.map(p => {
      return parseInt(p.price);
    });
    const y = x.reduce((acc, curr) => {
      console.log("avg", x);
      return acc + curr / x.length;
    }, 0);
    const foo = parseInt(this.props.ticket.ticket.price);
    console.log("cl", foo);
    if (foo < y) {
      const a = y - foo + this.state.risk;
      const b = a > 95 ? 95 : a;
      console.log("in", a);
      return this.setState({
        risk: b
      });
    } else if (foo > y) {
      const z = foo - y;
      const t = z > 10 ? 10 : z;
      const u = t < 5 ? 5 : t;
      return this.setState({
        risk: u - this.state.risk
      });
    }
  };

  render() {
    console.log("ticket b", this.state.risk);
    return (
      <div>
        <p>{this.state.risk}</p>
        <button onClick={this.riskCalculator}>Click</button>
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
