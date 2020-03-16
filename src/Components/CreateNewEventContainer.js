import React, { Component } from "react";
import CreateNewEvent from "./CreateNewEvent";
import { connect } from "react-redux";
import { newEvent } from "../Actions/eventActions";

export class CreateNewEventContainer extends Component {
  state = {
    name: "",
    description: "",
    url: "",
    startDate: "",
    endDate: ""
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.newEvent(this.state);
    this.setState({
      name: "",
      description: "",
      url: "",
      startDate: "",
      endDate: ""
    });
  };
  render() {
    return (
      <div>
        <CreateNewEvent
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  newEvent
};

export default connect(null, mapDispatchToProps)(CreateNewEventContainer);
