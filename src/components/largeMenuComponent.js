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
                  <RadioButton updateRadioButtonAttr={this.updateRadioButtonAttr} opt1="Instruments" opt2="Animals" opt3="Childrens Shows" type="selectedPic" />
                <MenuHeader className="menuHeaderTitle" menuHeaderTitle="Text"/>
                  <RadioButton updateRadioButtonAttr={this.updateRadioButtonAttr} opt1="Instruments" opt2="Animals" opt3="Childrens Shows" type="selectedText"/>
                <MenuHeader className="menuHeaderTitle" menuHeaderTitle="Audio"/>
                  <RadioButton updateRadioButtonAttr={this.updateRadioButtonAttr} opt1="Instruments" opt2="Animals" opt3="Childrens Shows" type="selectedAudio"/>
            </div>
        )
    }
}
