import React, { Component } from "react";
import firebase from "./firebase";
import { BrowserRouter as Router, Link } from "react-router-dom";

class CreatePoll extends Component {
  constructor() {
    super();
    this.state = {
      // !!!! removed array and added a key to state - will explain
      key: "",
      polls: [],
      titleInput: "",
      questionInput: "",
      optionOneInput: "",
      optionTwoInput: "",
      errorMessage: "",
    };
  }

  handleChange = (e) => {
    switch (e.target.id) {
      case "titleInput":
        this.setState({
          titleInput: e.target.value,
        });
        break;
      case "questionInput":
        this.setState({
          questionInput: e.target.value,
        });
        break;
      case "optionOneInput":
        this.setState({
          optionOneInput: e.target.value,
        });
        break;
      case "optionTwoInput":
        this.setState({
          optionTwoInput: e.target.value,
        });
        break;
      default:
        break;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const dbRef = firebase.database().ref();
    if (
      this.state.questionInput !== "" &&
      this.state.titleInput !== "" &&
      this.state.OptionOneInput !== "" &&
      this.state.optionTwoInput !== ""
    ) {
      const pollObject = {
        titleInput: this.state.titleInput,
        questionInput: this.state.questionInput,
        optionOneInput: this.state.optionOneInput,
        optionTwoInput: this.state.optionTwoInput,
      };

      // !!!!
      const pollObj = dbRef.push(pollObject);
      // !! Destructure this and re-name key state

      // reset error handle and clear input text
      this.setState({
        key: pollObj.key,
      });

      // reset error handle and clear input text
      this.setState({
        errorMessage: "",
        titleInput: "",
        questionInput: "",
        optionOneInput: "",
        optionTwoInput: "",
      });
    } else {
      // error handling
      this.setState({
        errorMessage: "Please fill in all inputs before submitting",
      });
    }
  };

  render() {
    const userKey = this.state.key;
    return (
      <main>
        <section>
          <h2>Create your Poll</h2>
          <form action="/" onSubmit={this.handleSubmit}>
            <label htmlFor="titleInput">title</label>
            <input
              type="text"
              id="titleInput"
              value={this.state.titleInput}
              onChange={this.handleChange}
            />
            <label htmlFor="questionInput">question</label>
            <input
              type="text"
              id="questionInput"
              value={this.state.questionInput}
              onChange={this.handleChange}
            />
            <label htmlFor="optionOne">option one</label>
            <input
              type="text"
              id="optionOneInput"
              value={this.state.optionOneInput}
              onChange={this.handleChange}
            />
            <label htmlFor="optionTwo">option two</label>
            <input
              type="text"
              id="optionTwoInput"
              value={this.state.optionTwoInput}
              onChange={this.handleChange}
            />
            <button type="submit">Create Poll</button>
          </form>
          <p>{this.state.errorMessage}</p>
          <Link to={`/polllinks/${userKey}`}>
            Click me to see the poll analytics
          </Link>
        </section>
      </main>
    );
  }
}
export default CreatePoll;
