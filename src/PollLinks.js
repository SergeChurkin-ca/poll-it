import React, { Component } from "react";
import firebase from "./firebase";

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
      .ref("-MErTQrvxBAorWYrPPTY")
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
      </div>
    );
  }
}

export default PollLinks;
