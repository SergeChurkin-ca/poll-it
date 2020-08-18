// Imports ----- +
import React, { Component, Fragment } from "react";
import HomePage from "./HomePage";
import CreatePoll from "./CreatePoll";
import PollAnalytics from "./PollAnalytics";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ViewPoll from "./ViewPoll";

// Component ----- +
class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <div className="header">
            <h1>Poll it together</h1>
            <a href="#">Create a Poll</a>
          </div>
        </header>
        <Fragment>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/createpoll" component={CreatePoll} />
          <Route path="/polls/:pollKey/analytics" component={PollAnalytics} />
          <Route path="/polls/:pollKey/view" component={ViewPoll} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
