// Imports ----- +
import React, { Component } from "react";
import firebase from "./firebase";
import { Link } from "react-router-dom";
import "./createpoll.css";

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
      // errorMessage: "",
      isLinkShowing: false,
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

  //
  handleSubmit = (event) => {
    event.preventDefault();
    const dbRef = firebase.database().ref();
    const state = this.state;
    const question = this.isQuestion(state.question);

    // If form is not empty, update state with from data and push it to firebase
    if (
      state.question !== "" &&
      state.name !== "" &&
      state.OptionA !== "" &&
      state.optionB !== ""
    ) {
      const pollObject = {

        name: state.name,
        question,
        optionA: state.optionA,
        optionB: state.optionB,
        optionACount: 0,
        optionBCount: 0,
      };
      const { key } = dbRef.push(pollObject);
      this.setState({
        key,
        errorMessage: "",
        name: "",
        question: "",
        optionA: "",
        optionB: "",
      });
      //  for conditional element rendering
      this.setState({
        isLinkShowing: true,
      });
    } else {
      // If form is empty, show custom error message
      //this.setState({
        //errorMessage: "Please fill in all inputs before submitting",
      //});
    }
  };

  handleReset = (e) => {
    e.preventDefault();
    this.setState({
      key: "",
      name: "",
      question: "",
      optionA: "",
      optionB: "",
      errorMessage: "",
      isLinkShowing: false,
    });
}


  render() {
    const state = this.state;
    const key = state.key;
    return (
      <main>
        {(() => {
          if (state.isLinkShowing === false) {
            return (
              <section className="createPoll pageContainer">
                <h2>Make a Poll!</h2>
                <p>
                  Use the form below to make your poll! It 's not rocket science.
                  Or is it ? Only one way to find out - make a poll!
                </p>
                <form
                  action="/"
                  onSubmit={this.handleSubmit}
                  onReset={this.handleReset}
                  className="createPollForm"
                >
                  <label htmlFor="name"> <span>Name</span>Tell us who you are!</label>
                  <input
                    type="text"
                    id="name"
                    value={state.name}
                    onChange={this.handleChange}
                    required
                  />
                  <label htmlFor="question"><span>Question</span>What do you wanna know?</label>
                  <input
                    type="text"
                    id="question"
                    value={state.question}
                    onChange={this.handleChange}
                    required
                  />
                  <label htmlFor="optionA">
                    <span>Option A</span>What's the first choice?</label>
                  <input
                    type="text"
                    id="optionA"
                    value={state.optionA}
                    onChange={this.handleChange}
                    required
                  />
                  <label htmlFor="optionB"><span>Option B</span>Put the second choice here!</label>
                  <input
                    type="text"
                    id="optionB"
                    value={state.optionB}
                    onChange={this.handleChange}
                    required
                  />
                  <button type="submit">I'm done!</button>
                  <button type="reset">Reset</button>
                </form>
                <p> {state.errorMessage} </p>
              </section>
            );
          } else if (state.isLinkShowing === true) {
            return (
              <div className="pageContainer">
                <h2>Wow! You just made a poll!</h2>
                <p>
                  We expected this, so we made a little chart of your poll's
                  stat's just for you! We did this because we care.
                </p>
                <Link to={`/polls/${key}/analytics`}>Poll up your stats!</Link>
              </div>
            );
          }
        })()}
      </main>
    );
  }
}
export default CreatePoll;
