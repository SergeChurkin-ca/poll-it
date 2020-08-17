import React, { Component } from "react";
import HomePage from "./HomePage";
import CreatePoll from "./CreatePoll";
import PollLinks from "./PollLinks";

import { BrowserRouter as Router, Route } from "react-router-dom";
import UserGeneratedPolls from "./UserGeneratedPolls";

class App extends Component {
  render() {
    return (
      <Router>
        {/* TEMPORARY HEADER UNTIL WE HAVE WEB COPY */}
        <header>
          <div className="pageContainer header">
            <h1>Poll it together</h1>
            <a href="#">Create a Poll</a>
          </div>
        </header>
        <main>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/createpoll" component={CreatePoll} />
          <Route path="/polllinks/:pollId" component={PollLinks} />
          <Route
            path="/theactualpoll/:actualId/view"
            component={UserGeneratedPolls}
          />
        </main>
      </Router>
    );
  }
}

export default App;
