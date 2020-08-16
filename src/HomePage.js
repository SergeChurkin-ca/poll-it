import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreatePoll extends Component {
  render() {
    return (
      <main>
        <section>
          <Link to="/createpoll">
            <p> Create poll </p>
          </Link>
        </section>
      </main>
    );
  }
}
export default CreatePoll;
