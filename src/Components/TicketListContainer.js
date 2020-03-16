import React, { Component } from "react";

import { connect } from "react-redux";

export class TicketListContainer extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketListContainer);
