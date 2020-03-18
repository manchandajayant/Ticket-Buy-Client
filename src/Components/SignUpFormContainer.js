import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
import { signUpUser } from "../Actions/userActions";
import { Redirect } from "react-router";

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
    console.log(this.props.user);
    if (!this.props.user.newUser) {
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
          {/* <h1>You have signed up {this.props.users[0].email}</h1> */}
          <Redirect to="/login">CLICK HERE TO LOGIN</Redirect>
        </div>
      );
    }
  }
}
const mapStateToProps = state => ({
  user: state.users
});

const mapDispatchToProps = {
  signUpUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpFormContainer);
