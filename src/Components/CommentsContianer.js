import React, { Component } from "react";
import Comments from "./Comments";
import { newComment, fetchComments } from "../Actions/ commentActions";
import { connect } from "react-redux";

export class CommentsContianer extends Component {
  state = {
    description: "",
    ticketId: this.props.ticket.ticket.id
  };
  componentDidMount() {
    this.props.fetchComments();
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.newComment(this.state);
    this.setState({
      description: "",
      ticketId: this.state.ticketId
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    console.log("blue", this.props.ticket);
    if (this.props.user.auth) {
      return (
        <div>
          Comments:
          {this.props.ticket.ticket.comments.map(comment => (
            <p>{comment.description}</p>
          ))}
          <Comments
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
            user={this.props.user}
          />
        </div>
      );
    } else {
      return (
        <div>
          Comments:
          {this.props.ticket.ticket.comments.map(comment => (
            <p>{comment.description}</p>
          ))}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  ticket: state.ticket,
  user: state.users
});

const mapDispatchToProps = {
  newComment,
  fetchComments
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContianer);
