import React, { Component } from "react";
import { fetchUser } from "../Actions/userActions";
import { connect } from "react-redux";

export class UserProfileContainer extends Component {
  componentDidMount() {
    console.log("this", this.props.match.params.id);
    this.props.fetchUser(Number(this.props.match.params.id));
  }
  render() {
    return <div>HI</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  fetchUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileContainer);
