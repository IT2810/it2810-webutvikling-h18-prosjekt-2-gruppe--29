import React, { Component } from 'react';
import { LargeMenuComponent } from './MenuComponents/LargeMenuComponent.js';
import { ExContainer } from './ExContainer.js';
import { Menu } from './MenuComponents/Menu.js';

export class ContentContainer extends Component {

  constructor(props) {
    super(props);
    this.updateSelectedTab = this.updateSelectedTab.bind(this);
    this.state = {
      selectedPic: "Instrument",
      selectedText: "joke",
      selectedAudio: "Instrument",
      selectedTab: null, //default blir satt i tab.js
    }
  }

  updateSelectedTab = (tabNumber) => {
    this.setState({selectedTab : tabNumber}, function () {
        console.log(this.state.selectedTab);
    });
  };

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
              <ExContainer updateSelectedTab={this.updateSelectedTab} theText={this.state.selectedText+this.state.selectedTab} imgName={this.state.selectedPic+this.state.selectedTab} audioName={this.state.selectedAudio+this.state.selectedTab}/>
              <Menu updateRadioButtonAttr={this.updateRadioButtonAttr}/>
              <LargeMenuComponent updateRadioButtonAttr={this.updateRadioButtonAttr}/>
          </div>
      )
  }
}
