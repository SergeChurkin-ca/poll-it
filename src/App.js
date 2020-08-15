import React, { Component } from "react";
import HomePage from "./HomePage";
import CreatePoll from "./CreatePoll";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
<<<<<<< HEAD
  constructor() {
    super();
    this.state = {
      testArray: [],
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const newTestArray = [];
      for (let key in data) {
        newTestArray.push({
          key: key,
          data: data[key],
        });
      }

      this.setState({
        testArray: newTestArray,
      });
    });
  }

=======
>>>>>>> 6f622bb96ca606d34eb5f49d651c2d0c120cfe5b
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/createpoll" component={CreatePoll} />
        </div>
      </Router>
    );
  }
}

export default App;
