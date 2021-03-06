// === VIEW POLL ===

// Imports ----- +
import React, { Component } from "react";
import firebase from "./firebase";

// Module Variables ---- +
const localStorageItem = "answeredPolls";

// Component ----- +
class ViewPoll extends Component {
  constructor() {
    super();
    this.state = {
      poll: {},
      userSelection: "",
      optionACount: 0,
      optionBCount: 0,
      isPollAnswered: false,
      isPollStored: false,
    };
  }

  componentDidMount() {
    const key = this.props.match.params.pollKey;
    firebase
      .database()
      .ref(key)
      .on("value", (snapshot) => {
        this.setState({
          poll: snapshot.val(),
        });
      });
  }

  // === Component Methods ===

  // When radio button is clicked the value of the id attribute is stored in state ---
  handleChange = (e) => {
    this.setState({
      userSelection: e.target.id,
    });
  };

  handleSelected = () => {};

  // Takes radio selection from state (correspondomg with the option property in our firebase object) as an argument. The current poll object and user selection is targeted in the firebase database and it's count is incresed by one ---
  sendCount = (selection) => {
    const key = this.props.match.params.pollKey;
    const dbRef = firebase.database().ref(`${key}/${selection}`);
    dbRef.once("value", (snap) => {
      let count = snap.val();
      count++;
      dbRef.set(count);
    });
  };

  // Takes a key as an argument and stores it in a comma separated string in local sotrage
  updateStorage = (key) => {
    const answeredPollsStorage = window.localStorage.getItem(localStorageItem);
    const answeredPollsArray = [];
    if (answeredPollsStorage) {
      answeredPollsArray.push(...answeredPollsStorage.split(","));
    }
    answeredPollsArray.push(key);
    window.localStorage.setItem(localStorageItem, answeredPollsArray.join(","));
  };

  // Takes a key and checks the local storage string to see if that key is in storage and returns a boolean
  checkIsAnswered = (key) => {
    const answeredPollStorage = window.localStorage.getItem(localStorageItem);
    if (answeredPollStorage) {
      return answeredPollStorage.split(",").some((storedKey) => {
        return storedKey === key;
      });
    } else {
      return false;
    }
  };

  // We look at the user selection currently stored in state at time the submit button is clicked, and depending on which option is store in state, we pass that value as an argument to our send count method ---
  handleSubmit = (e) => {
    const key = this.props.match.params.pollKey;
    const state = this.state;
    e.preventDefault();
    let optionA = state.optionOneCount;
    let optionB = state.optionTwoCount;

    // Checks if poll has been answered. If no, stops sumbit function
    if (this.checkIsAnswered(key)) {
      this.setState({
        isPollStored: true,
      });
      return;
    }

    // Adds the poll key to list of stored items
    this.updateStorage(key);

    // Displays messge to user that poll has been completed
    this.setState({
      isPollAnswered: true,
    });

    // Updates state count depending on which option the user has selected
    if (state.userSelection === "optionA") {
      optionA++;
      this.setState({
        optionOneCount: optionA,
      });
      this.sendCount("optionACount");
    } else if (state.userSelection === "optionB") {
      optionB++;
      this.setState({
        optionTwoCount: optionB++,
      });
      this.sendCount("optionBCount");
    }
  };

  // Render JSX Method ----- +
  render() {
    const poll = this.state.poll;
    return (
      <main className="viewPoll">
        <section
          className={this.state.isPollAnswered === false ? "show" : "hide"}
        >
          <form onSubmit={this.handleSubmit} className="viewPollForm">
            <h2>{poll.name}'s poll</h2>
            <h3>{poll.question}</h3>
            <div className="optionWrapper" ariarole="radio-group">
              <label
                htmlFor="optionA"
                onClick={this.handleSelect}
                className={
                  this.state.userSelection === "optionA"
                    ? "selected"
                    : undefined
                }
              >
                {poll.optionA}
                <input
                  type="radio"
                  name="options"
                  id="optionA"
                  onChange={this.handleChange}
                  value={poll.optionA}
                  required
                ></input>
              </label>
              <label
                htmlFor="optionB"
                className={
                  this.state.userSelection === "optionB"
                    ? "selected"
                    : undefined
                }
              >
                {poll.optionB}
                <input
                  type="radio"
                  name="options"
                  id="optionB"
                  onChange={this.handleChange}
                  value={poll.optionB}
                  required
                ></input>
              </label>
            </div>
            <button type="submit">Answer</button>
          </form>
        </section>
        <div className={this.state.isPollAnswered === true ? "show" : "hide"}>
          <p className="userMessage">
            Thank you for your submission!
            <span role="img" aria-labelledby="sunglasses emoji">
              😎
            </span>
          </p>
        </div>
        <div className={this.state.isPollStored === true ? "show" : "hide"}>
          <p className="userMessage">
            Nice try. You can only vote once per poll
            <span role="img" aria-labelledby="wink emoji">
              😉
            </span>
          </p>
        </div>
      </main>
    );
  }
}

export default ViewPoll;
