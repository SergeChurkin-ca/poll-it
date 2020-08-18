// Imports ----- +
import React, { Component } from "react";
import firebase from "./firebase";
import { Link } from "react-router-dom";

// Component ----- +
class PollAnalytics extends Component {
  constructor() {
    super();
    this.state = {
      poll: {},
    };
  }

  // Takes the router link variable and passes it as an argument in the ref firebase method to retrieve
  componentDidMount() {
    const key = this.props.match.params.pollKey;
    firebase
      .database()
      .ref(key)
      .on("value", (snapshot) => {
        this.setState({
          poll: snapshot.val(),
        });
      });
  }

  // Render JSX  ----- +
  render() {
    const key = this.props.match.params.pollKey;
    const poll = this.state.poll;
    return (
      <div>
        <h1> The title is: {poll.title} </h1>
        <p> The question is: {poll.question} </p>
        <p> The first option is: {poll.optionA} </p>
        <p>{poll.optionACount}</p>
        <p>{poll.optionBCount}</p>
        <p>{poll.optionBCount + poll.optionBCount}</p>
        <p> The second option is: {poll.optionB} </p>
        <p>Need more votes? Share your poll with the link below!</p>
        <Link to={`/polls/${key}/view`}>Share your poll!</Link>
      </div>
    );
  }
}

export default PollAnalytics;
