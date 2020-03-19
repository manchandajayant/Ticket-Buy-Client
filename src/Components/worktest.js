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
