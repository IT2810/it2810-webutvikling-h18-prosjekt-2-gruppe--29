import React, { Component } from 'react';
import { LargeMenuComponent } from './largeMenuComponent.js';
import { ExContainer } from './exContainer.js';

export class ContentContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPic: "",
      selectedText: "",
      selectedAudio: ""
    }
  }

  updateRadioButtonAttr = (e, type) => {
    if(type === "selectedPic"){
      this.setState({
        selectedPic: e.target.value
      })
    }
    if(type === "selectedText"){
      this.setState({
        selectedText: e.target.value
      })
    }
    if(type === "selectedAudio"){
      this.setState({
        selectedAudio: e.target.value
      })
    }
  }

  render () {
      return (
          <div className='contentContainer'>
              <ExContainer/>
              <LargeMenuComponent updateRadioButtonAttr={this.updateRadioButtonAttr}/>
              <div>{this.state.selectedPic}</div>
              <div>{this.state.selectedText}</div>
              <div>{this.state.selectedAudio}</div>
          </div>
      )
  }
}
