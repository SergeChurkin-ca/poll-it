import React, { Component } from 'react';
import firebase from './firebase';

class CounterTest extends Component {
    constructor() {
        super();
        this.state = {
            userSelection: "",
            votes: [
                { optionOneCount: 0 },
                { optionTwoCount: 0 },
                { totalCount: 0 },
              ],
          };
        }

    componentDidMount() {
        firebase
             .database()
             .ref(-MEsKjFCz4ZO6AFzXA7O)
             .on("value", (snapshot) => {
               console.log(snapshot.val);
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
        copyVotes[2] += 1;
        if (this.state.userSelection === "optionA") {
          copyVotes[0] += 1;
        } else if (this.state.userSelection === "optionB") {
          copyVotes[1] += 1;
        }

        this.setState({
            votes: copyVotes,
        });
    };

    render() {
        console.log(this.state.optionOne);
        console.log(this.state.optionTwo);
        console.log(this.state.value);
        return (
          <div className="App">
            {}
            <form action="" onSubmit={this.handleSubmit} value={this.state.value}>
              <label htmlFor="yes">YES</label>
              <input type="radio" onChange={this.handleChange} name="pollOptions" id="optionA" value={this.state.optionOne}/>
              <label htmlFor="no">NO</label>
              <input type="radio" onChange={this.handleChange} name="pollOptions" id="optionB" value={this.state.optionTwo}/>
              <button type="submit">Submit</button>
            </form>
            <section>
              {
                this.state.votes.map( (answers) => {
                  return (
                    <div key={answers.key}>
                      <h2>Yes {answers.data.optionOneCount}</h2>
                      <h2>No {answers.data.optionTwoCount}</h2>
                      <h2>Total {answers.data.votes}</h2>
                    </div>
                  )
                })
              }
            </section>
          </div>
        );
    }
}


export default CounterTest;