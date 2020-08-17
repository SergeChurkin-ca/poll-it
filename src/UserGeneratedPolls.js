import React, { Component } from "react";
import firebase from "./firebase";

class UserGeneratedPolls extends Component {
  constructor() {
    super();
    this.state = {
      poll: {},
      userSelection: "",
      optionOneCount: 0,
      optionTwoCount: 0,
    };
  }

  componentDidMount() {
    const key = this.props.match.params.actualId;
    firebase
      .database()
      .ref(key)
      .on("value", (snapshot) => {
        this.setState({
          poll: snapshot.val(),
        });
      });
  }


  handleChange = (e) => {
    this.setState({
      userSelection: e.target.id,
    });
  };

 
  sendCount = (option) => {
    const key = this.props.match.params.actualId;
    const dbRef = firebase.database().ref(`${key}/${option}`);
    dbRef.once("value", (snap) => {
      let count = snap.val();
      count++;
      dbRef.set(count);
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let option1 = this.state.optionOneCount;
    let option2 = this.state.optionTwoCount;
    if (this.state.userSelection === "optionA") {
      option1++;
      this.setState({
        optionOneCount: option1,
      });
      this.sendCount("optionOneCount");
    } else if (this.state.userSelection === "optionB") {
      option2++;
      this.setState({
        optionTwoCount: option2++,
      });
      this.sendCount("optionTwoCount");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1> User Generated Polls </h1>
              <h2>{this.state.poll.titleInput}</h2>
              <h3>{this.state.poll.questionInput}:</h3>
                <label htmlFor="optionA">
                  {this.state.poll.optionOneInput}
                  <input
                    type="radio"
                    name="options"
                    id="optionA"
                    onChange={this.handleChange}
                    value={this.state.poll.optionOne}
                  ></input>
                </label>
                {this.state.poll.optionOne}
                <label htmlFor="optionB">
                  {this.state.poll.optionTwoInput}
                  <input
                    type="radio"
                    name="options"
                    id="optionB"
                    onChange={this.handleChange}
                    value={this.state.poll.optionTwo}
                  ></input>
                </label>
                <button type="submit">Answer</button>
      </form>
    );
  }
}

export default UserGeneratedPolls;
