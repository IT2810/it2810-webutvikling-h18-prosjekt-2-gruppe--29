
import React, { Component } from 'react';

import { RadioButton } from '../components/radioButton.js';
import { MenuHeader } from '../components/MenuHeader.js';


export class MenuContent extends Component {
  render () {
    return (
      <div className="menuContent">
          <MenuHeader menuHeaderTitle="Text" id="topMenuHeader"/>
            <RadioButton opt1="Instruments" opt2="Animals" opt3="Childrens Shows"/>
          <MenuHeader menuHeaderTitle="Sound"/>
            <RadioButton opt1="Instruments" opt2="Animals" opt3="Childrens Shows"/>
          <MenuHeader menuHeaderTitle="Audio"/>
            <RadioButton opt1="Instruments" opt2="Animals" opt3="Childrens Shows"/>
        </div>
    );
  }
}
