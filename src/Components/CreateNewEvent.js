import React, { Component } from "react";

export default class CreateNewEvent extends Component {
  render() {
    return (
      <div>
        NAME:
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.props.onChange}
          values={this.props.values}
        />
        DESCRIPTION
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={this.props.onChange}
          values={this.props.values}
        />
        EVENT LOGO:
        <input
          type="text"
          name="url"
          placeholder="Event Logo"
          onChange={this.props.onChange}
          values={this.props.values}
        />
        START DATE:
        <input
          type="text"
          name="startDate"
          placeholder="Start Date"
          onChange={this.props.onChange}
          values={this.props.values}
        />
        END DATE:
        <input
          type="text"
          name="endDate"
          placeholder="End Date"
          onChange={this.props.onChange}
          values={this.props.values}
        />
        <button onClick={this.props.onSubmit}>CREATE</button>
      </div>
    );
  }
}
