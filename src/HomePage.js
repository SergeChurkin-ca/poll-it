import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreatePoll extends Component {
  render() {
    return (
      <main>
        <section>
          <Link to="/createpoll">
            <button type="">Create poll</button>
          </Link>
        </section>
      </main>
    );
  }
}
export default CreatePoll;
