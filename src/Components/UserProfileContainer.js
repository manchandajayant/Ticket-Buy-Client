import React, { Component } from "react";
import { fetchUser } from "../Actions/userActions";
import { connect } from "react-redux";

export class UserProfileContainer extends Component {
  componentDidMount() {
    this.props.fetchUser(Number(this.props.match.params.id));
  }
  render() {
    //console.log("hi", this.props);
    if (this.props.user) {
      return (
        <div>
          <p>{this.props.user.email}</p>
          {this.props.user.tickets.map(ticket => {
            return (
              <div>
                <p>{ticket.id}</p>
                <p>{ticket.description}</p>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <div>Nothing to return</div>;
    }
  }
}

const mapStateToProps = state => ({
  user: state.user.fetchedUser,
  users: state.users
});

const mapDispatchToProps = {
  fetchUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileContainer);
