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
      isLinkShowing: false,
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
      //  for conditional element rendering
      this.setState({
        isLinkShowing: true
      })
    } else {
      // error handling
      this.setState({
        errorMessage: "Please fill in all inputs before submitting",
      });
    }
  };
  
  render() {
    const userKey = this.state.key;
    console.log(userKey);
    return (
      <main>
        {(() => {
          if (this.state.isLinkShowing == false) {
            return (
              <section className="createPoll pageContainer">
              <h2> Make a Poll! </h2>
              <p>
                Use the form below to make your poll! It's not rocket science. Or is
                it? Only one way to find out: Make a poll!
              </p>
              <form
                action="/"
                onSubmit={this.handleSubmit}
                className="createPollForm"
              >
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
                <button type="submit">I'm done!</button>
              </form>
              <p> {this.state.errorMessage} </p>
            </section>
            )
          } else if (this.state.isLinkShowing == true) {
            return (
              <div>
                <h2>Wow! You just made a poll!</h2>
                <p>
                  We expected this, so we made a little chart of your poll's stat's
                  just for you! We did this because we care.
                </p>
                <Link to={`/polllinks/${userKey}`}>Poll up the stats!</Link>
              </div>
            )
          } 
        })()}
      </main>
    );
  }
}
export default CreatePoll;
