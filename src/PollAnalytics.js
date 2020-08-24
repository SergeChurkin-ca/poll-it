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
      <main className="analytics">
        <div className="pageContainer">
          <div className="copyWrapper info">
            <h2>Your Poll Analytics!</h2>
            <p>
              As poll creater, you can spy on the anonymous votes before anyone
              else. Whenever you are ready to make your research public, reveal
              the results with your friends and family with the click of a
              button!
            </p>
            <Link className="button" to={`/polls/${key}/view`} tabIndex="0">
              See your poll!
            </Link>
          </div>
          <section className="analyticsInfo">
            <div className="copyWrapper">
              <h2>{poll.name}'s Poll Analytics</h2>
              <p className="pollQuestion">{poll.question}</p>
            </div>
            <div className="pollCounters">
              <div className="count">
                <p className="option">A votes</p>
                <p className="countNum">{poll.optionACount}</p>
              </div>
              <div className="count">
                <p className="option">B votes </p>
                <p className="countNum">{poll.optionBCount}</p>
              </div>
              <div className="count">
                <p className="option">Total</p>
                <p className="countNum">
                  {poll.optionACount + poll.optionBCount}
                </p>
              </div>
            </div>
            <div className="optionsWrapper">
              <p> Option A: {poll.optionA}</p>
              <p> Option B: {poll.optionB}</p>
            </div>

            <p>
              Need <span>votes</span>? Share your poll with the link below!
            </p>
            <p
              className="usersPollLink"
              tabIndex="0"
            >{`https://spring2anonymouspoll.github.io/anonymousVotingBooth/polls/${key}/view`}</p>
            <p>
              Ready to share your <span>results</span>? Send this link.
            </p>
            <p
              className="usersPollLink"
              tabIndex="0"
            >{`https://spring2anonymouspoll.github.io/anonymousVotingBooth/polls/${key}/results`}</p>
          </section>
        </div>
      </main>
    );
  }
}

export default PollAnalytics;
