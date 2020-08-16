import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserGeneratedPolls from "./UserGeneratedPolls";

class CreatePoll extends Component {
  render() {
    return (
      <main>
        <section>
          <Link to="/createpoll">
            <p> Create poll </p>
          </Link>
          <UserGeneratedPolls />
        </section>
      </main>
    );
  }
}
export default CreatePoll;
