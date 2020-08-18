// Imports ----- +
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Component ----- +
class CreatePoll extends Component {
  render() {
    return (
      <main className="homePage">
        <div className="styleBlock block1">
          <div className="copyContainer">
            <div className="imgWrapper left">
              {/* !!!!! - TEST NEEDS ALT TEXT */}
              <img
                src="https://files.gumroad.com/attachments/1211634803146/efcd33204e4444adb964615e0a9ffe72/original/handshake-colour-400px.png?response-content-disposition=attachment&verify=1597734461-vyHufNgVCJGzBzz2JgNV2%2BVkUl2bt7kOtk%2BQ90WN734%3D"
                alt=""
              />
            </div>
            <div className="copyWrapper">
              <h2>Finally Settle It!</h2>
              <p>
                Whether its money, the last doughnut or your pride at stake, you
                can always settle it with a poll!
              </p>
            </div>
          </div>
        </div>
        <div className="styleBlock block2">
          <div className="copyContainer">
            <div className="copyWrapper">
              <h2>Use Anywhere</h2>
              <p>
                Use your customized poll to poll your team in slack, plan your family picnic on facebook, or even settle a hot debate in whatsapp! Your poll can go anywhere and do anything. It's omnipolltent!
              </p>
            </div>
          </div>
        </div>
        <div className="styleBlock block3">
          <div className="copyContainer">
            <div className="imgWrapper right">
              {/* !!!!! TEST - NEEDS ALT TEXT */}
              <img
                src="https://files.gumroad.com/attachments/1211634803146/94a5f34678a24fd1a741836d6a62522d/original/app-user-colour-400px.png?response-content-disposition=attachment&verify=1597735299-yBS9JiCDECTQV7eYcZmhOsXtbg6nHHMsjPu%2FRMUXec0%3D"
                alt=""
              />
            </div>
            <div className="copyWrapper">
              <h2>Share With Friends</h2>
              <p>
                Share the link to your poll with friends, family members, and peers! Post it on your wall, or on an instagram story. There is literally no place on the internet for your friends to hide from your poll!
              </p>
            </div>
          </div>
        </div>
        <div className="toCreatePoll">
          <h3>Create a Poll</h3>
          <p>Take me to the Poll Maker!</p>
          <Link to="/createpoll" className="button">
            Create
          </Link>
        </div>
      </main>
    );
  }
}
export default CreatePoll;
