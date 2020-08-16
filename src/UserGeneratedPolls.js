import React, { Component } from "react";
import firebase from "./firebase";
import { Link } from "react-router-dom";

class UserGeneratedPolls extends Component {
  constructor() {
    super();
    this.state = {
      poll: {},
    };
  }

  componentDidMount() {
    const key = this.props.match.params.actualId;
    firebase
      .database()
      .ref(key)
      .on("value", (snapshot) => {
        console.log(snapshot.val());
        this.setState({
          poll: snapshot.val(),
        })
      });
    
  }

  render() {
    console.log(this.props.match.params.actualId);
    return (
      <form>
        <h1> User Generated Polls </h1>
              <h2>{this.state.poll.titleInput}</h2>
              <h3>{this.state.poll.questionInput}:</h3>
                <label htmlFor="one">
                  {this.state.poll.optionOneInput}
                  <input
                    type="radio"
                    name="options"
                    id="one"
                    value={this.state.poll.optionOne}
                  ></input>
                </label>
                {this.state.poll.optionOne}
                <label htmlFor="two">
                  {this.state.poll.optionTwoInput}
                  <input
                    type="radio"
                    name="options"
                    id="two"
                    value={this.state.poll.optionTwo}
                  ></input>
                </label>
                {this.state.poll.optionTwo}
      </form>
    );
  }
}

export default UserGeneratedPolls;
