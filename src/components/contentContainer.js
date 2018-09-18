import React, { Component } from 'react';
import { LargeMenuComponent } from './largeMenuComponent.js';
import { ExContainer } from './exContainer.js';

export class ContentContainer extends Component {
    render () {
        return (
            <div className='contentContainer'>
                <ExContainer/>
                <LargeMenuComponent/>
            </div>
        )
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
          </div>
      )
  }
}
