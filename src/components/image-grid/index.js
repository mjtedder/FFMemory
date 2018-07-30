import React, { Component } from 'react';
import './image-grid.css';
import ImageBox from '../image-box'

class ImageGrid extends Component {
  render() {
    return (
        <div className = 'images'>
          <div className = 'image-row'>
            <ImageBox />
            <ImageBox />
            <ImageBox />
          </div>
          <div className = 'image-row'>
            <ImageBox />
            <ImageBox />
            <ImageBox />
          </div>
        </div>
    );
  }
}

export default ImageGrid;
