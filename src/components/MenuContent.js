
import React, { Component } from 'react';

import { RadioButton } from '../components/radioButton.js';
import { MenuHeader } from '../components/MenuHeader.js';


export class MenuContent extends Component {
  render () {
    return (
      <div className="menuContent">
          <MenuHeader menuHeaderTitle="Text" id="topMenuHeader"/>
            <RadioButton text="Option 1"/>
            <RadioButton text="Option 2"/>
            <RadioButton text="Option 3"/>
          <MenuHeader menuHeaderTitle="Sound"/>
            <RadioButton text="Option 1"/>
            <RadioButton text="Option 2"/>
            <RadioButton text="Option 3"/>
          <MenuHeader menuHeaderTitle="Audio"/>
            <RadioButton text="Option 1"/>
            <RadioButton text="Option 2"/>
            <RadioButton text="Option 3"/>
        </div>
    );
  }
}
