import React, { Component } from 'react';
import './image-box.css';

class ImageBox extends Component {
  render() {
    return (
        <div className = 'image-box' onClick={this.props.addScore}></div>
      );
    }
  }

  export default ImageBox;
