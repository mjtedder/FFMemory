import React, { Component } from 'react';
import './image-grid.css';
import ImageBox from '../image-box'

class ImageGrid extends Component {
  render() {
    let imageBoxArr = []
    for(let i=0; i<4; i++){
      imageBoxArr.push(<ImageBox src='blah' addScore={this.props.addScore}/>)
    }
    let imageRowArr = []
    for(let i=0; i<3; i++){
      imageRowArr.push(
          <div className = 'image-row'>
            {imageBoxArr}
          </div>
      )
    }
    console.log('image-grid:', this.props)
    return (
          <div className = 'images'>
            {imageRowArr}
          </div>
    );
  }
}

export default ImageGrid;
