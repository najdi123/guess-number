import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            gen: '',
            guess: '',
            compareMessage: ''
        }
        this.genNumber = this.genNumber.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    genNumber(e){

        this.setState({
            gen: Math.floor(Math.random()*10+1)
        })
        console.log(this.state);
    }
    handleChange(e){
        this.setState({guess: e.target.value});
        console.log(this.state);
    }
    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.shahr);
        event.preventDefault();
        console.log(this.state);
        this.compare();
    }
    compare(){
        // e.preventDefault();
        const guessN = this.state.guess;
        const genN = this.state.gen;
        // console.log(guessN, genN);
        if (guessN<genN) {
            console.log("guess higher");
            this.setState({
                compareMessage: "guess higher"
            })
        } else if (genN<guessN) {
            console.log("guess lower");
            this.setState({
                compareMessage: "guess lower"
            })
        } else {
            console.log("you got it right! what are the odds!")
            this.setState({
                compareMessage: "you got it right! what are the odds!"
            })
        }

    }
  render() {
    return (
      <div className="App">

              <p>generate a random number between 1 and 10 and then guess it</p>
              <button
                type="button"
                value={this.state.gen}
                onClick={this.genNumber}
              >
                  generate a random number
              </button>
              <br/>
          <form onSubmit={this.handleSubmit}>
              <input
                  type="number"
                  value={this.state.guess}
                  onChange={this.handleChange}
              />
              <input
                  type="submit"
                  value="Enter"

              />
          </form>
          <p>{this.state.compareMessage}</p>
          {/*<button*/}
              {/*type="button"*/}
              {/*onClick={this.compare}*/}
          {/*>*/}
              {/*compare*/}
          {/*</button>*/}

      </div>
    );
  }
}

export default App;
