import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreatePoll extends Component {
  render() {
    return (
      <section>
        <Link to="/createpoll">
          <p className="button"> Create poll </p>
        </Link>
      </section>
    );
  }
}
export default CreatePoll;
