import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserGeneratedPolls from "./UserGeneratedPolls";

class CreatePoll extends Component {
  render() {
    return (
      <main>
        <section>
          <Link to="/createpoll">
            <button type="">Create poll</button>
          </Link>
          <UserGeneratedPolls />
        </section>
      </main>
    );
  }
}
export default CreatePoll;
