import React, { Component } from "react";

export default class Comments extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            name="description"
            placeholder="comment"
            onChange={this.props.onChange}
            values={this.props.values}
          />
          <button onSubmit={this.props.onSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
