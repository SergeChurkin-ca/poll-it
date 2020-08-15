import React, { Component } from "react";
import firebase from "./firebase";
import HomePage from "./HomePage";
import CreatePoll from "./CreatePoll";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
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

  render() {
    return (
      <Router>
        <div>
          {this.state.testArray.map((item) => {
            return <p key={item.key}> {item.data} </p>;
          })}
          <input type="text" />
          <Route exact path="/" component={HomePage} />
          <Route path="/createpoll" component={CreatePoll} />
        </div>
      </Router>
    );
  }
}

export default App;
