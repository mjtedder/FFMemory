import React, { Component } from 'react';
import './App.css';
import ImageGrid from './components/image-grid/image-grid'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className = 'nav-bar'>
          <div>FF Memory</div>
          <div>You Guessed Correctly!</div>
          <div>Score: 1</div>
        </div>
        <header className='App-header'>
          <h1 className='App-title'>
            FF Memory Game
          </h1>
            Click on an image to earn points, but dont click on any more than once!
        </header>
        <ImageGrid />
      </div>
    );
  }
}

export default App;
