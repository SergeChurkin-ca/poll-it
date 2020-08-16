import React, { Component } from "react";
import firebase from "./firebase";
import { Link } from "react-router-dom";

class UserGeneratedPolls extends Component {
  constructor() {
    super();
    this.state = {
      poll: {},
      userSelection: "",
      votes: [
          { optionOneCount: 0 },
          { optionTwoCount: 0 },
          { totalCount: 0 },
        ],
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
        })
      });
    
  }

  handleChange = (e) => {
      this.setState({
        userSelection: e.target.id,
      });
  };

  handleSubmit = (e) => {
      e.preventDefault();
      const copyVotes = [...this.state.votes];
      copyVotes[2].totalCount++;
      if (this.state.userSelection === "optionA") {
        copyVotes[0].optionOneCount++;
      } else if (this.state.userSelection === "optionB") {
        copyVotes[1].optionTwoCount++;
      }
      this.setState({
        votes: copyVotes,
      });
    console.log(copyVotes);
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
                <button type="submit">Submit</button>
      </form>
    );
  }
}

export default UserGeneratedPolls;
