import React, { Component } from "react";
import firebase from "./firebase";

class LizzTestCount extends Component {
  constructor() {
    super();
    this.state = {
      userSelection: "",
      votes: [0, 0, 0],
    };
  }

  // Did Mount? ----- +
  componentDidMount() {
    const keyWillGoHere = "-MEsKjFCz4ZO6AFzXA7O";

    firebase
      .database()
      .ref(keyWillGoHere)
      .on("value", (snapshot) => {
        console.log(snapshot.val);
      });
  }

  // Component Methods ----- +
  handleChange = (e) => {
    this.setState({
      userSelection: e.target.id,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const copyVotes = [...this.state.votes];
    if (this.state.userSelection === "optionA") {
      copyVotes[0]++;
    } else if (this.state.)

    this.setState({
      votes: copyVotes,
    });
  };

  render() {
    console.log(this.state.votes);
    return (
      <form>
        <label htmlFor="optionA">
          Option A
          <input
            type="radio"
            name="options"
            id="optionA"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="">
          Option B
          <input
            type="radio"
            name="options"
            id="optionB"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Submit meeeee!</button>
      </form>
    );
  }
}

export default LizzTestCount;
