import React, { Component } from "react";

export default class NewTicket extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>CREATE A TICKET FOR THIS EVENT:</h1>
          <h3>PRICE</h3>
          <input
            type="text"
            name="price"
            placeholder="price"
            onChange={this.props.onChange}
            values={this.props.values}
          />
          <h3>DESCRIPTION</h3>
          <input
            type="text"
            name="description"
            placeholder="description"
            onChange={this.props.onChange}
            values={this.props.values}
          />
          <h3>IMAGE LINK</h3>
          <input
            type="text"
            name="url"
            placeholder="image"
            onChange={this.props.onChange}
            values={this.props.values}
          />
          <button onClick={this.props.onSubmit}>CREATE</button>
        </div>
      </div>
    );
  }
}
