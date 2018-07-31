import React, { Component } from 'react';
import './App.css';
import ImageGrid from './components/image-grid'
import ClickyHeader from './components/clickyHeader'

class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      topScore: 0,
      guessedCorrectly: null,
      alreadyGuessed: null,
      images: [],
    }
    for (let i = 0; i < this.state.images.length; i++) {
      this.state.images.push(i)
    }
    console.log(this.state)
  }

  addScore = () => {
    console.log(this.state)
    this.setState({
      score: this.state.score +1,
    })
    console.log("Hello World")
  }
  render() {

    return (

      <div className='App'>
        <div className = 'nav-bar' onClick={this.addScore}>
          <div>FF Memory</div>
          <div>You Guessed Correctly!</div>
          <div>Score:{this.state.score}</div>
        </div>
        <ClickyHeader/>
        <ImageGrid order={this.state.images} addScore={this.addScore}/>
      </div>
    );
  }
}

export default App;
