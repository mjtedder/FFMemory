import React, { Component } from 'react';
import './image-grid.css';
import ImageBox from '../image-box'
import characters from '../../characters.json'

class ImageGrid extends Component {
  constructor(props){
    super(props)
    this.state = {
      characters
    }
  }

  keepPlaying = () => {
    let pictures = this.state.characters.slice()
    let picturesTotalLength = pictures.length
    let newPictures = []
    let randomIndex

    for(let i = 0; i < picturesTotalLength; i++) {
      randomIndex = Math.floor(Math.random() * (pictures.length))
      newPictures.push(pictures[randomIndex])
      pictures.splice(randomIndex, 1)
    }

    this.setState({pictures: newPictures})
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.keepPlaying) {
      this.keepPlaying()
    }
  }

  render() {
    let imageBoxArr = []
    for(let i=0; i<4; i++){
      imageBoxArr.push(<ImageBox characters={this.state.pictures} addScore={this.props.addScore}/>)
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
