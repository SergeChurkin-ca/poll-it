import React, {Component} from 'react';
import firebase from './firebase';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state ={
      votes: [],
      optionOne: 'yes',
      optionOneCount: 0,
      optionTwo: 'no',
      optionTwoCount: 0,
      totalCount: 0,
      value: ''
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (snapshot) => {
      const data = snapshot.val();
      const newAnswer = [];

      for (let key in data) {
        newAnswer.push({
          key:key,
          data:data[key]
        });
      }
      this.setState({
        votes: newAnswer
      })
    })
  }

  handleYes = (optionOne) => {
    const dbRef = firebase.database().ref(`/${optionOne}`);

    dbRef.once('value', (snapshot) => {
      const newOptionOne = snapshot.val();
      newOptionOne.optionOneCount++;
      newOptionOne.votes++

      dbRef.set(newOptionOne);
    })
  }

  handleNo = (optionTwo) => {
    const dbRef = firebase.database().ref(`/${optionTwo}`);

    dbRef.once('value', (snapshot) => {
      const newOptionTwo = snapshot.val();
      newOptionTwo.optionTwoCount++;
      newOptionTwo.votes++

      dbRef.set(newOptionTwo);
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // console.log(this.state.optionOne);
    // console.log(this.state.optionTwo);
    // console.log(this.state.value);
// =================================================
    if (this.state.value === this.state.optionOne) {
      console.log("YES");
      // this.handleYes();
    } else if (this.state.value === this.state.optionTwo) {
      console.log("NO");
      // this.handleNo();
    }
// =================================================
    // if (this.state.optionOne === true) {
    //   console.log("YES");
    //   this.handleYes();
    // } else if (this.state.optionTwo === true) {
    //   this.handleNo();
    //   console.log("NO");
    // }
  }

  render() {
    console.log(this.state.optionOne);
    console.log(this.state.optionTwo);
    console.log(this.state.value);
    return (
      <div className="App">
        {/* <form action="" onSubmit={this.handleSubmit} value={this.state.value}>
          <label htmlFor="yes">YES</label>
          <input type="radio" name="pollOptions" id="yes" value={this.state.optionOne} />
          <label htmlFor="no">NO</label>
          <input type="radio" name="pollOptions" id="no" value={this.state.optionTwo} />
          <button type="submit">Submit</button>
        </form> */}
        <form action="" onSubmit={this.handleSubmit} value={this.state.value}>
          <label htmlFor="yes">YES</label>
          <input type="radio" name="pollOptions" id="yes" value={this.state.optionOne}/>
          <label htmlFor="no">NO</label>
          <input type="radio" name="pollOptions" id="no" value={this.state.optionTwo}/>
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

export default App;
