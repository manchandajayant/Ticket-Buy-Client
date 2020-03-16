import React, { Component } from "react";

export default class Eventdetail extends Component {
  render() {
    console.log("DETAIL", this.props.event.name);
    return (
      <div>
        <h1>
          <div>
            <h1>{this.props.event.name}</h1>
            <h3>DESCRIPTION: {this.props.event.description}</h3>
            <img src={this.props.event.url} />
            <h4>START DATE: {this.props.event.startDate}</h4>
            <h4>END DATE: {this.props.event.endDate}</h4>
            <h4></h4>
          </div>
        </h1>
      </div>
    );
  }
}
