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
      title: "",
      question: "",
      optionA: "",
      optionB: "",
      errorMessage: "",
      isLinkShowing: false,
    };
  }

  // Component Methods -----+
  handleChange = (e) => {
    switch (e.target.id) {
      case "title":
        this.setState({
          title: e.target.value,
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

  //
  handleSubmit = (event) => {
    event.preventDefault();
    const dbRef = firebase.database().ref();
    const state = this.state;

    // If form is not empty, update state with from data and push it to firebase
    if (
      state.question !== "" &&
      state.title !== "" &&
      state.OptionA !== "" &&
      state.optionB !== ""
    ) {
      const pollObject = {
        title: state.title,
        question: state.question,
        optionA: state.optionB,
        optionB: state.optionB,
        optionACount: 0,
        optionBCount: 0,
      };
      const { key } = dbRef.push(pollObject);
      this.setState({
        key,
        errorMessage: "",
        title: "",
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
      this.setState({
        errorMessage: "Please fill in all inputs before submitting",
      });
    }
  };

  render() {
    const state = this.state;
    const key = state.key;
    return (
      <main>
        {(() => {
          if (state.isLinkShowing === false) {
            return (
              <section className="createPoll pageContainer">
                <h2> Make a Poll! </h2>
                <p>
                  Use the form below to make your poll! It's not rocket science.
                  Or is it? Only one way to find out: Make a poll!
                </p>
                <form
                  action="/"
                  onSubmit={this.handleSubmit}
                  className="createPollForm"
                >
                  <label htmlFor="title"> title </label>
                  <input
                    type="text"
                    id="title"
                    value={state.title}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="question"> question </label>
                  <input
                    type="text"
                    id="question"
                    value={state.question}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="optionA"> option one </label>
                  <input
                    type="text"
                    id="optionA"
                    value={state.optionA}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="optionB"> option two </label>
                  <input
                    type="text"
                    id="optionB"
                    value={state.optionB}
                    onChange={this.handleChange}
                  />
                  <button type="submit">I'm done!</button>
                </form>
                <p> {state.errorMessage} </p>
              </section>
            );
          } else if (state.isLinkShowing === true) {
            return (
              <div>
                <h2>Wow! You just made a poll!</h2>
                <p>
                  We expected this, so we made a little chart of your poll's
                  stat's just for you! We did this because we care.
                </p>
                <Link to={`/polls/${key}/analytics`}>Poll up the stats!</Link>
              </div>
            );
          }
        })()}
      </main>
    );
  }
}
export default CreatePoll;
