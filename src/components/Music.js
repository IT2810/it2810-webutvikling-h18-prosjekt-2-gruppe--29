import React, { Component } from 'react';



export class Music extends React.Component {
  render() { 
    return (
        <div>
            <audio ref="audio_tag" src={this.props.audioName} controls autoPlay/>
        </div>
        );
  }
}