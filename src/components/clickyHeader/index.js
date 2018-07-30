import React, { Component } from 'react';
import './clickyHeader.css';

class ClickyHeader extends Component {
  render() {
    return (
      <header className='App-header'>
        <h1 className='App-title'>
          FF Memory Game
        </h1>
          Click on an image to earn points, but dont click on any more than once!
      </header>
    );
  }
}

export default ClickyHeader;
