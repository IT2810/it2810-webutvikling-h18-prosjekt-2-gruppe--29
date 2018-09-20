import React, { Component } from 'react';
import { RadioButton } from './radioButton.js';
import { MenuHeader } from './MenuHeader.js';

export class LargeMenuComponent extends Component {

  //saves selected radio btn according to category in state
  updateRadioButtonAttr = (e, type) => {
    //largemenucomponent
    this.props.updateRadioButtonAttr(e, type);
  };

    //menu for pc
    render () {
        return (
            <div className='largeMenuComponent'>
                <MenuHeader menuHeaderTitle="Picture"/>
                  <RadioButton updateRadioButtonAttr={this.updateRadioButtonAttr} opt1="Instrument" opt2="Animal" opt3="Cartoon" type="selectedPic" />
                <MenuHeader menuHeaderTitle="Text"/>
                  <RadioButton updateRadioButtonAttr={this.updateRadioButtonAttr} opt1="Joke" opt2="Name" opt3="Quote" type="selectedText"/>
                <MenuHeader menuHeaderTitle="Audio"/>
                  <RadioButton updateRadioButtonAttr={this.updateRadioButtonAttr} opt1="Instrument" opt2="Animal" opt3="Cartoon" type="selectedAudio"/>
            </div>
        )
    }
}
