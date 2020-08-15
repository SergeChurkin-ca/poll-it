import React, { Component } from "react";
import firebase from "./firebase";

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
      <div>
        {this.state.testArray.map((item) => {
          return <p key={item.key}>{item.data}</p>;
        })}
        <input type="text" />
      </div>
    );
  }
}

export default App;
