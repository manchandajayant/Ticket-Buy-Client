import React, { Component } from "react";
import { connect } from "react-redux";

class UpdateTicketForm extends Component {
  state = {
    price: "",
    description: "",
    url: ""
  };

  onSubmit = event => {
    event.preventDefault();

    const update = {
      name: this.state.price,
      location: this.state.description,
      url: this.state.url
    };

    this.props.updateTicket(this.props.match.params.id, update);

    // console.log("submit test");
  };

  onChange = event => {
    const { value, name } = event.target;

    const update = { [name]: value };

    this.setState(update);
  };

  reset = () => {
    this.setState({ name: "", location: "" });
  };

  render() {
    // console.log("this.props.test:", this.props);

    return (
      <form onSubmit={this.onSubmit}>
        <div>
          PRICE{" "}
          <input
            type="text"
            name="price"
            onChange={this.onChange}
            value={this.state.price}
          />
        </div>

        <div>
          Location{" "}
          <input
            type="text"
            name="location"
            value={this.state.description}
            onChange={this.onChange}
          />
        </div>
        <div>
          URL{" "}
          <input
            type="text"
            name="url"
            value={this.state.url}
            onChange={this.onChange}
          />
        </div>

        <div>
          <button>Edit</button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(UpdateTicketForm);
