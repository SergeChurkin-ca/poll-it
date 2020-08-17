import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreatePoll extends Component {
  render() {
    return (
      <main className="homePage">
        <section className="pageContainer">
          <div className="styleBlock block1">
            <div className="copyWrapper">
              <h2>Finally Settle It!</h2>
              <p>
                Whether its money, the last doughnut or your pride at stake, you
                can always settle it with a poll!
              </p>
            </div>
          </div>
          <div className="styleBlock block2">
            <div className="copyWrapper">
              <h2>Simple to Use</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio ex eveniet repellendus, provident animi consectetur!
              </p>
            </div>
          </div>
          <div className="styleBlock block3">
            <div className="copyWrapper">
              <h2>Easy to Share</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio ex eveniet repellendus, provident animi consectetur!
              </p>
            </div>
          </div>
          <div className="toCreatePoll">
            <h3>Create a Poll</h3>
            <p>Take me to the Poll Maker!</p>
            <Link to="/createpoll" className="button">
              Create
            </Link>
          </div>
        </section>
      </main>
    );
  }
}
export default CreatePoll;
