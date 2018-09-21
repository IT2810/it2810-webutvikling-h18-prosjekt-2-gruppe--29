import React, { Component } from 'react';
import { RadioButton } from '../RadioButton.js';
import { MenuHeader } from './MenuHeader.js';

export class LargeMenuComponent extends Component {

  updateRadioButtonAttr = (e, type) => {
    this.props.updateRadioButtonAttr(e, type);
  };

    //menu for larger screens
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
