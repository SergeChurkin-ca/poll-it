import React, { Component } from "react";
import firebase from "./firebase";
import UserGeneratedPolls from "./UserGeneratedPolls";

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
    console.log(this.state.poll.titleInput);
    return (
      <div>
        <p>The User ID is: {this.props.match.params.pollId}</p>
        <h1>The title is: {this.state.poll.titleInput}</h1>
        <p>The question is: {this.state.poll.questionInput}</p>
        <p>The first option is: {this.state.poll.optionOneInput}</p>
        <p>The second option is: {this.state.poll.optionTwoInput}</p>
        <UserGeneratedPolls />
      </div>
    );
  }
}

export default PollLinks;
