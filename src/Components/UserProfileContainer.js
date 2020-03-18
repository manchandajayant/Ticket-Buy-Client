import React, { Component } from "react";
import { fetchUser } from "../Actions/userActions";
import { connect } from "react-redux";

export class UserProfileContainer extends Component {
  componentDidMount() {
    console.log("this", this.props.match.params.id);
    this.props.fetchUser(Number(this.props.match.params.id));
  }
  render() {
    console.log("hi", this.props.user);
    return <div>HI</div>;
  }
}

const mapStateToProps = state => ({
  user: state.users.user
});

const mapDispatchToProps = {
  fetchUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileContainer);
