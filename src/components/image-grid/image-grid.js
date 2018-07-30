import React, { Component } from 'react';
import './image-grid.css';

class ImageGrid extends Component {
  render() {
    return (
        <div className = 'images'>
          <div className = 'image-row'>
            <div className = 'image-box'></div>
            <div className = 'image-box'></div>
            <div className = 'image-box'></div>
          </div>
          <div className = 'image-row'>
            <div className = 'image-box'></div>
            <div className = 'image-box'></div>
            <div className = 'image-box'></div>
          </div>
        </div>
    );
  }
}

export default ImageGrid;
