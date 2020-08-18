// Imports ----- +
import React, { Component, Fragment } from "react";
import Header from "./Header";
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
        <Fragment>
          <Header />
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
