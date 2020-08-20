import React, { Component } from "react";
import firebase from "./firebase";

class PollResults extends Component {
  constructor() {
    super();
    this.state = {
      poll: {},
    };
  }

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
    const poll = this.state.poll;
    return (
      <main className="pageContainer analytics">
        <h2>{poll.name}'s Poll Results are In!!</h2>
        <section className="analyticsInfo">
          <h2>{poll.name}'s poll Results</h2>
          <div className="copyWrapper">
            <p className="pollQuestion">{poll.question}</p>
            <p> Option A: {poll.optionA}</p>
            <p> Option B: {poll.optionB}</p>
          </div>
          <div className="pollCounters">
            <div className="count countA">
              <p className="option">A votes</p>
              <p className="countNum">{poll.optionACount}</p>
            </div>
            <div className="count countB">
              <p className="option">B votes </p>
              <p className="countNum">{poll.optionBCount}</p>
            </div>
            <div className="count countTotal">
              <p className="option">Total</p>
              <p className="countNum">
                {poll.optionACount + poll.optionBCount}
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default PollResults;
