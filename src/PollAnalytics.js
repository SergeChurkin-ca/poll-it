// Imports ----- +
import React, { Component } from "react";
import firebase from "./firebase";
import { Link } from "react-router-dom";
import "./analytics.css";

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
      <main className="pageContainer analytics">
        <h2>Your Poll Analytics!</h2>
        <p>
          As poll creater, you can spy on the anonymous votes before anyone
          else. Whenever you are ready to make your research public, reveal the
          results with your friends and family with the click of a button!
        </p>
        <section className="analyticsInfo">
          <h2>{poll.name}'s poll</h2>
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
          <p>Need votes? Share your poll with the link below!</p>
          <p className="usersPollLink">{`https://spring2anonymouspoll.github.io/polls/${key}/view`}</p>
          <Link className="button" to={`/polls/${key}/view`}>
            Share your poll!
          </Link>
        </section>
      </main>
    );
  }
}

export default PollAnalytics;
