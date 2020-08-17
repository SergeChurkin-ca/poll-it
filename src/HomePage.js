import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserGeneratedPolls from "./UserGeneratedPolls";

class CreatePoll extends Component {
  render() {
    return (
      <main>
        <section>
          <h1>poll it together</h1>
          <p>Whether its money, the last doughnut or your pride at stake, you can always settle it with a poll!</p>
          <Link to="/createpoll">
            <p>Take me to the Poll Maker!</p>
          </Link>
        </section>
      </main>
    );
  }
}
export default CreatePoll;
