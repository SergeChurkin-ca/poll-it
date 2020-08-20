// === HOME PAGE ===

// Imports ----- +
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Component ----- +
class CreatePoll extends Component {
  render() {
    return (
      <main className="homePage">
        <div className="styleBlock block0">
          <div className="copyContainer">
            <div className="copyWrapper">
              <h1>Create Polls & Share with Your Friends</h1>
              <Link to="/createpoll" className="button">
                Create Now!
              </Link>
            </div>
          </div>
        </div>
        <div className="styleBlock block1">
          <div className="copyContainer">
            <div className="copyWrapper">
              <h2>1. Use Anywhere</h2>
              <p>
                Use your customized poll to poll your team in slack, plan your
                family picnic on facebook, or even settle a hot debate in
                whatsapp! Your poll can go anywhere and do anything. It's
                omnipolltent!
              </p>
            </div>
          </div>
        </div>
        <div className="styleBlock block2">
          <div className="copyContainer">
            <div className="copyWrapper">
              <h2>2. Share With Friends</h2>
              <p>
                Share the link to your poll with friends, family members, and
                peers! Post it on your wall, or on an instagram story. There is
                literally no place on the internet for your friends to hide from
                your poll!
              </p>
            </div>
          </div>
        </div>
        <div className="styleBlock block3">
          <div className="copyContainer">
            <div className="copyWrapper">
              <h2>3. Settle debates!</h2>
              <p>
                Whether its money, the last doughnut or your pride at stake, you
                can always settle it with a poll!
              </p>
            </div>
          </div>
        </div>
        <div className="toCreatePoll">
          <div className="copyWrapper">
            <h3>Create a Poll</h3>
            <p>Take me to the Poll Maker!</p>
            <Link to="/createpoll" className="button" tabIndex="0">
              Create
            </Link>
          </div>
        </div>
      </main>
    );
  }
}
export default CreatePoll;
