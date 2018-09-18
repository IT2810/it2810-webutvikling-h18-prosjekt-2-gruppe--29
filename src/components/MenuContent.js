
import React, { Component } from 'react';

import { RadioButton } from '../components/radioButton.js';
import { MenuHeader } from '../components/MenuHeader.js';





export class MenuContent extends Component {
    constructor(props, context) {
    super(props, context);
    this.state = { entered : false };


  }

  componentDidMount() {
    this.setState((state, props) => ({ entered : true }))
  }

  componentWillUnmount() {
    this.setState((state, props) => ({ entered : false }))
  }


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
