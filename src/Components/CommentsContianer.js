import React, { Component } from "react";
import Comments from "./Comments";

import { connect } from "react-redux";

export class CommentsContianer extends Component {
  state = { comment: "" };
  onSubmit = event => {
    event.preventDefault();
    console.log("click");
    // this.props.login(this.state);
    this.setState({
      comment: ""
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div>
        <Comments
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContianer);
