import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreatePoll extends Component {
  render() {
    return (
      <main className="pageContainer">
        <section className="homePage">
          <h2>poll it together</h2>
          <p>
            Whether its money, the last doughnut or your pride at stake, to settle any argument simply invoke the public's opinion! Make a poll!
          </p>
          <div className="toCreatePoll">
            <p>Take me to the Poll Maker!</p>
            <Link to="/createpoll">Create Poll</Link>
          </div>
        </section>
      </main>
    );
  }
}
export default CreatePoll;
