import React, { Component } from "react";
import firebase from "./firebase";
import { Link } from "react-router-dom";

class CreatePoll extends Component {
  constructor() {
    super();
    this.state = {
      // !!!!
      key: "",
      titleInput: "",
      questionInput: "",
      optionOneInput: "",
      optionTwoInput: "",
      errorMessage: "",
    };
  }

  // !!!
  // componentDidMount() {
  //   const dbRef = firebase.database().ref();
  //   dbRef.on("value", (snapshot) => {
  //     const data = snapshot.val();
  //     const pollsArray = [];
  //     for (let key in data) {
  //       pollsArray.push({
  //         key: key,
  //         data: data[key],
  //       });
  //     }
  //     this.setState({
  //       polls: pollsArray,
  //     });
  //   });

  //   dbRef.on("child_added", function (snapshot, prevChildKey) {
  //     const newPost = snapshot.val();
  //     console.log(prevChildKey);
  //   });
  // }

  // Component methods
  handleTitle = (event) => {
    this.setState({
      titleInput: event.target.value,
    });
  };
  handleQuestion = (event) => {
    this.setState({
      questionInput: event.target.value,
    });
  };
  handleOptionOne = (event) => {
    this.setState({
      optionOneInput: event.target.value,
    });
  };
  handleOptionTwo = (event) => {
    this.setState({
      optionTwoInput: event.target.value,
    });
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
      const pushedPollObj = dbRef.push(pollObject);

      // reset error handle and clear input text
      this.setState({
        // !!!!
        key: pushedPollObj.key,
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
    console.log(this.state.key);
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
              onChange={this.handleTitle}
            />
            <label htmlFor="questionInput">question</label>
            <input
              type="text"
              id="questionInput"
              value={this.state.questionInput}
              onChange={this.handleQuestion}
            />
            <label htmlFor="optionOne">option one</label>
            <input
              type="text"
              id="optionOne"
              value={this.state.optionOneInput}
              onChange={this.handleOptionOne}
            />
            <label htmlFor="optionTwo">option two</label>
            <input
              type="text"
              id="optionTwo"
              value={this.state.optionTwoInput}
              onChange={this.handleOptionTwo}
            />
            <button type="submit">Create Poll</button>
          </form>
          <p>{this.state.errorMessage}</p>
          {/* <Link to={`/polllinks/${this.state.key}`}> */}
          <Link to="/polllinks/">
            <button>Click me to see the poll analytics</button>
          </Link>
        </section>
      </main>
    );
  }
}
export default CreatePoll;
