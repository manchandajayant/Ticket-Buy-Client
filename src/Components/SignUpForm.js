import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignUpForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <h1>EMAIL:</h1>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={this.props.onChange}
            values={this.props.values}
          />
          <h1>PASSWORD:</h1>
          <input
            type="text"
            name="password"
            placeholder="password"
            onChange={this.props.onChange}
            values={this.props.values}
          />
          <button onSubmit={this.props.onSubmit}>SignUp</button>
        </form>
      </div>
    );
  }
}
