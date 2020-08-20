// === CREATE POLL ===

// Imports ----- +
import React, { Component } from "react";
import firebase from "./firebase";
import { Link } from "react-router-dom";

// Component ----- +
class CreatePoll extends Component {
  constructor() {
    super();
    this.state = {
      key: "",
      name: "",
      question: "",
      optionA: "",
      optionB: "",
      display: "form",
    };
  }

  // Component Methods -----+
  handleChange = (e) => {
    switch (e.target.id) {
      case "name":
        this.setState({
          name: e.target.value,
        });
        break;
      case "question":
        this.setState({
          question: e.target.value,
        });
        break;
      case "optionA":
        this.setState({
          optionA: e.target.value,
        });
        break;
      case "optionB":
        this.setState({
          optionB: e.target.value,
        });
        break;
      default:
        break;
    }
  };

  // Takes a string as an argument, if string does not have a "?" append it to the end
  isQuestion = (string) => {
    const lastIndex = string.length - 1;
    if (string.charAt(lastIndex) !== "?") {
      return string.concat("?");
    } else {
      return string;
    }
  };

  //Creates a an object and pushes that object to firebase
  handleSubmit = (event) => {
    event.preventDefault();
    const dbRef = firebase.database().ref();
    const state = this.state;
    const question = this.isQuestion(state.question);
    const pollObject = {
      name: state.name,
      question,
      optionA: state.optionA,
      optionB: state.optionB,
      optionACount: 0,
      optionBCount: 0,
    };

    // Pushes the new poll object to firebase and returns a key, stored in a destructured variable
    const { key } = dbRef.push(pollObject);

    // We are getting fancy and storing the value of key to key, and chanding display to modal
    this.setState({
      key,
      display: "modal",
    });

    this.handleReset();
  };

  // Resets the form inputs in state
  handleReset = () => {
    this.setState({
      name: "",
      question: "",
      optionA: "",
      optionB: "",
    });
  };

  render() {
    const state = this.state;
    const key = state.key;
    return (
      <main className="createPollMain">
        {/* Using a short curcuit we display the page when display is set to "form" or "modal" in state*/}
        {(state.display === "form" || state.display === "modal") && (
          <section className="createPoll">
            <div className="copyWrapper">
              <h2>Make a Poll!</h2>
              <p>
                Use the form below to make your poll! It 's not rocket science.
                Or is it ? Only one way to find out - make a poll!
              </p>
            </div>
            <form
              action="/"
              onSubmit={this.handleSubmit}
              onReset={this.handleReset}
              className="createPollForm"
            >
              <div className="copyWrapper">
                <h2>Create Your Poll</h2>
                <label htmlFor="name">
                  <span>Name</span>Tell us who you are!
                </label>
                <input
                  type="text"
                  id="name"
                  value={state.name}
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="question">
                  <span>Question</span>What do you wanna know?
                </label>
                <input
                  type="text"
                  id="question"
                  value={state.question}
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="optionA">
                  <span>Option A</span>What's the first choice?
                </label>
                <input
                  type="text"
                  id="optionA"
                  value={state.optionA}
                  onChange={this.handleChange}
                  required
                  maxLength="25 characters"
                />
                <label htmlFor="optionB">
                  <span>Option B</span>Put the second choice here!
                </label>
                <input
                  type="text"
                  id="optionB"
                  value={state.optionB}
                  onChange={this.handleChange}
                  required
                  maxLength="25 characters"
                />
                <div className="buttonContainer">
                  <button type="submit">I'm done!</button>
                  <button
                    type="button"
                    className="resetButton"
                    onClick={this.handleReset}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </section>
        )}

        {/* Conditionally displays a pop up modal to continue through user path */}
        {state.display === "modal" && (
          <div className="pollModalWrapper">
            <div className="pollModal">
              <h2>Wow! You just made a poll!</h2>
              <p>
                We expected this, so we made a little chart of your poll's
                stat's just for you! We did this because we care.
              </p>
              <Link to={`/polls/${key}/analytics`} className="button">
                Poll up your stats!
              </Link>
            </div>
          </div>
        )}
      </main>
    );
  }
}
export default CreatePoll;
