// Imports ----- +
import React, { Component } from "react";
import firebase from "./firebase";
import "./viewpoll.css";

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
      isAnswered: false,
      isStored: false,
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

  //
  updateStorage = (key) => {
    const answeredPollsStorage = window.localStorage.getItem(localStorageItem);
    const answeredPollsArray = [];

    if (answeredPollsStorage) {
      answeredPollsArray.push(...answeredPollsStorage.split(","));
    }

    answeredPollsArray.push(key);
    window.localStorage.setItem(localStorageItem, answeredPollsArray.join(","));
  };

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
        isStored: true,
      });
      return;
    }

    // Adds the poll key to list of stored items
    this.updateStorage(key);

    // Displays messge to user that poll has been completed
    this.setState({
      isAnswered: true,
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
        <section className={this.state.isAnswered === false ? "show" : "hide"}>
          <form onSubmit={this.handleSubmit} className="viewPollForm">
            <h1> User Generated Polls </h1>
            <h2>{poll.title}</h2>
            <h3>{poll.question}</h3>
            <p>{poll.optionA}?</p>
            <p>{poll.optionB}?</p>
            <label htmlFor="optionA">
              Option A
              <input
                type="radio"
                name="options"
                id="optionA"
                onChange={this.handleChange}
                value={poll.optionA}
                required
              ></input>
            </label>
            <label htmlFor="optionB">
              Option B
              <input
                type="radio"
                name="options"
                id="optionB"
                onChange={this.handleChange}
                value={poll.optionB}
                required
              ></input>
            </label>
            <button type="submit">Answer</button>
          </form>
        </section>
        <div className={this.state.isAnswered === true ? "show" : "hide"}>
          <h2>Thank you for your submission!</h2>
        </div>
        <div className={this.state.isStored === true ? "show" : "hide"}>
          <h2>
            DONT FUCKING SUBMIT AGAIN, YOU ANIMAL! (LOL GUYS, CHILL WE WILL
            CHANGE THIS COPY LATER)
          </h2>
        </div>
      </main>
    );
  }
}

export default ViewPoll;
