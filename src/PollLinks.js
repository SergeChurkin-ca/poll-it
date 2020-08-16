import React, { Component } from "react";
import firebase from "./firebase";
import UserGeneratedPolls from "./UserGeneratedPolls";
import { Link } from "react-router-dom";

class PollLinks extends Component {
  constructor() {
    super();
    this.state = {
      poll: {},
    };
  }
  componentDidMount() {
    firebase
      .database()
      .ref(this.props.match.params.pollId)
      .on("value", (snapshot) => {
        this.setState({
          poll: snapshot.val(),
        });
      });
  }

  render() {
    return (
      <div>
        <p> The User ID is: {this.props.match.params.pollId} </p>
        <h1> The title is: {this.state.poll.titleInput} </h1>
        <p> The question is: {this.state.poll.questionInput} </p>
        <p> The first option is: {this.state.poll.optionOneInput} </p>
        <p> The second option is: {this.state.poll.optionTwoInput} </p>
        <Link to={`/theactualpoll/${this.props.match.params.pollId}/view`}>
          Here is your poll link
        </Link>
      </div>
    );
  }
}

export default PollLinks;
