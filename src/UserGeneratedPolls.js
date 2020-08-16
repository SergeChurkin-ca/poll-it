import React, { Component } from "react";
import firebase from "./firebase";
import { Link } from "react-router-dom";

class UserGeneratedPolls extends Component {
  constructor() {
    super();
    this.database = firebase.database().ref();
    this.state = {
      polls: [],
    };
  }

  // **************************
  componentDidMount() {
    const dbRef = firebase
      .database()
      .ref()
      .on("value", (snapshot) => {
        console.log(snapshot.val());
      });
  }

  // dbRef.on("value", (snapshot) => {
  //   // checking changes in db

  //   const data = snapshot.val();
  //   const newToursAarray = [];

  //   for (let inventoryName in data) {
  //     const toursObject = {
  //       id: inventoryName,
  //       optionOne: data[inventoryName].optionOneInput,
  //       optionTwo: data[inventoryName].optionTwoInput,
  //       questionInput: data[inventoryName].questionInput,
  //       titleInput: data[inventoryName].titleInput,
  //     };
  //     newToursAarray.push(toursObject);
  //   }

  //   this.setState({
  //     polls: newToursAarray,
  //   });
  // });
  // }

  render() {
    // console.log(this.props.match.params.actualId);
    return (
      <div className="tourlist">
        <h1> User Generated Polls </h1>
        {this.state.polls.map((pollsObject) => {
          return (
            <ul className="inventoryItem" key={pollsObject.id}>
              <h2> {pollsObject.titleInput} </h2>
              <h3> Please chose on option {pollsObject.questionInput}: </h3>
              <li>
                <input
                  type="radio"
                  name="one"
                  value={pollsObject.optionOne}
                ></input>
                {pollsObject.optionOne}
              </li>
              <li>
                <input
                  type="radio"
                  name="two"
                  value={pollsObject.optionTwo}
                ></input>
                {pollsObject.optionTwo}
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default UserGeneratedPolls;
