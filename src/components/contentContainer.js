import React, { Component } from 'react';
import { LargeMenuComponent } from './largeMenuComponent.js';
import { ExContainer } from './exContainer.js';
import { Menu } from './menu.js';

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
    //contentcontainer
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
              <Menu updateRadioButtonAttr={this.updateRadioButtonAttr}/>
              <LargeMenuComponent updateRadioButtonAttr={this.updateRadioButtonAttr}/>
          </div>
      )
  }
}
