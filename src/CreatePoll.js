import React, { Component } from "react";
import firebase from "./firebase";
import { Link } from "react-router-dom";

class CreatePoll extends Component {
  constructor() {
    super();
    this.state = {
      key: "",
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
        optionOneCount: 0,
        optionTwoCount: 0,
      };
      const { key } = dbRef.push(pollObject);

      this.setState({
        key,
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
          <div className="createPoll">
            <form
              action="/"
              onSubmit={this.handleSubmit}
              className="createPollForm"
            >
              <h2> Create your Poll </h2>
              <label htmlFor="titleInput"> title </label>
              <input
                type="text"
                id="titleInput"
                value={this.state.titleInput}
                onChange={this.handleChange}
              />
              <label htmlFor="questionInput"> question </label>
              <input
                type="text"
                id="questionInput"
                value={this.state.questionInput}
                onChange={this.handleChange}
              />
              <label htmlFor="optionOne"> option one </label>
              <input
                type="text"
                id="optionOneInput"
                value={this.state.optionOneInput}
                onChange={this.handleChange}
              />
              <label htmlFor="optionTwo"> option two </label>
              <input
                type="text"
                id="optionTwoInput"
                value={this.state.optionTwoInput}
                onChange={this.handleChange}
              />
              <button type="submit"> Create Poll </button>
              <p className="errorMsg"> {this.state.errorMessage} </p>
            </form>
          </div>
          <div className="pageContainer">
            <Link to={`/polllinks/${userKey}`}>
              Click me to see the poll analytics
            </Link>
          </div>
        </section>
      </main>
    );
  }
}
export default CreatePoll;
