export const riskCalculator = () => {
  console.log("clli");

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
  const f = this.props.ticket.ticket.user.tickets.length;
  console.log("r");
  if (f < 20) {
    this.state.riskByTickets = 5;
  }
  const q =
    this.state.risk + this.state.riskByTickets + this.state.riskByAverage;
  this.setState({ risk: q });
};
