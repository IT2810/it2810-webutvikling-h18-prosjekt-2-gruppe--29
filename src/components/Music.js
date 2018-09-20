import React, { Component } from 'react';

export class Music extends Component {

  constructor(props) {
    super(props);
    this.state = {
      audioUrl: ""
    }
  }

  componentDidMount() {
      this.getAudio(this.props.audioName);
  }

  componentDidUpdate(prevProps, prevState){
      if (prevProps.audioName !== this.props.audioName) {
          this.getAudio(this.props.audioName);
      }
  }

  getAudio = (audioName) => {
    let url = '/audio/' + audioName + '.mp3';
    this.setState({
      audioUrl: url
    })
  }

  render() {
    return (
        <div>
          <audio ref="audio_tag" src={this.state.audioUrl} controls autoPlay/>
        </div>
    );
  }

}
