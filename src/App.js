import React, { Component } from "react";
import HomePage from "./HomePage";
import CreatePoll from "./CreatePoll";
import PollLinks from "./PollLinks";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserGeneratedPolls from "./UserGeneratedPolls";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/createpoll" component={CreatePoll} />
          <Route path="/polllinks/:pollId" component={PollLinks} />
          <Route
            path="/theactualpoll/:actualId/view"
            component={UserGeneratedPolls}
          />
        </div>
      </Router>
    );
  }
}

export default App;
