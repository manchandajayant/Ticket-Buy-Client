const x = this.this.props.event.event.tickets.map(p => {
  return p.price;
});
const y = x.reduce((acc, curr) => {
  return acc + curr / x.length;
});

if (this.props.ticket.ticket.price < y) {
  const a = y - this.props.ticket.ticket.price + this.state.risk;
  a > 95 ? 95 : a;
  return this.setState({
    risk: a
  });
} else if (this.props.ticket.ticket.price > y) {
  const z = this.props.ticket.price - y;
  z > 10 ? 10 : z;
  return this.setState({
    risk: this.state.risk - z
  });
}
