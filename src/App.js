import React, { Component } from "react";
import HomePage from "./HomePage";
import CreatePoll from "./CreatePoll";
import PollLinks from "./PollLinks";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/createpoll" component={CreatePoll} />
          <Route path="/polllinks/:pollId" component={PollLinks} />
        </div>
      </Router>
    );
  }
}

export default App;
