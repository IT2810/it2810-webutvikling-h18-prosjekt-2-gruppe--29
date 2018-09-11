import React, { Component } from 'react';
import axios from 'axios'

export class UploadImageComponent extends Component {

  constructor() {
    super();
    this.state = {
      imgUrl: ""
    };

    //{this.state.imgUrl}

    //binds the function getImg to the rendered component
    this.getImg = this.getImg.bind(this);
  }

  //uses async to get img, and not promise
  getImg = async () => {
    let fileType = '.svg';
    let path = '/pictures/';
    try {
      const picture = await axios.get(path + "Baloo" + fileType);
      this.setState({
        imgUrl: picture.data
      })
    }
    catch (error) {
      console.error(error);
    }
  }

  render() {

    return (
      <div>
        <button onClick={this.getImg}>
          GetImg
        </button>
        <div dangerouslySetInnerHTML={{__html: this.state.imgUrl}}></div>
      </div>
    );

  }

}
