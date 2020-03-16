import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
import { signUpUser } from "../Actions/userActions";
import { Link } from "react-router-dom";

export class SignUpFormContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.signUpUser(this.state);
    this.setState({
      email: "",
      password: ""
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    console.log(this.props.users);
    if (!this.props.users) {
      return (
        <div>
          <SignUpForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
        </div>
      );
    } else {
      return (
        <div>
          <h1>You have signed up {this.props.users[0].email}</h1>
          <Link to="/">CLICK HERE TO GO TO HOMEPAGE</Link>
        </div>
      );
    }
  }
}
const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = {
  signUpUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpFormContainer);
