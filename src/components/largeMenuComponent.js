import React, { Component } from 'react';
import { RadioButton } from './radioButton.js';
import { MenuHeader } from './MenuHeader.js';

export class LargeMenuComponent extends Component {

  //saves selected radio btn according to category in state
  updateRadioButtonAttr = (e, type) => {
    this.props.updateRadioButtonAttr(e, type);
  };

    render () {
        return (
            <div className='largeMenuComponent'>
                <MenuHeader menuHeaderTitle="Picture"/>
                  <RadioButton updateRadioButtonAttr={this.updateRadioButtonAttr} opt1="Instruments" opt2="Animals" opt3="Childrens Shows" type="selectedPic" />
                <MenuHeader menuHeaderTitle="Text"/>
                  <RadioButton updateRadioButtonAttr={this.updateRadioButtonAttr} opt1="Instruments" opt2="Animals" opt3="Childrens Shows" type="selectedText"/>
                <MenuHeader menuHeaderTitle="Audio"/>
                  <RadioButton updateRadioButtonAttr={this.updateRadioButtonAttr} opt1="Instruments" opt2="Animals" opt3="Childrens Shows" type="selectedAudio"/>
            </div>
        )
    }
}
