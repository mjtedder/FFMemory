import React, { Component } from 'react';
import './App.css';
import ImageGrid from './components/image-grid'
import ClickyHeader from './components/clickyHeader'

class App extends Component {
  render() {
    return (

      <div className='App'>
        <div className = 'nav-bar'>
          <div>FF Memory</div>
          <div>You Guessed Correctly!</div>
          <div>Score: 1</div>
        </div>
        <ClickyHeader />
        <ImageGrid />
      </div>
    );
  }
}

export default App;
