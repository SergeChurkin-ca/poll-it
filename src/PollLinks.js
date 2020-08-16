import React, { Component } from "react";

class PollLinks extends Component {
  render() {
    return (
      <div>
        <p>The User ID is: {this.props.match.params.pollId}</p>
        <h1>Poll Links Worked</h1>
        <p>THIS IS FINALLY WORKING!! AHHHHH</p>
      </div>
    );
  }
}

export default PollLinks;
