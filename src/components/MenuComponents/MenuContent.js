import React, { Component } from 'react';
import { RadioButton } from '../RadioButton.js';
import { MenuHeader } from './MenuHeader.js';

//menu for  mobile/smaller screens
export class MenuContent extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      entered : false
    };
  }

  componentDidMount() {
    this.setState((state, props) => ({ entered : true }))
  }

  componentWillUnmount() {
    this.setState((state, props) => ({ entered : false }))
  }

  updateRadioButtonAttr = (e, type) => {
    this.props.updateRadioButtonAttr(e, type);
  }

  render () {
    return (
      <div className="menuContent">
        <MenuHeader menuHeaderTitle="Picture" id="topMenuHeader"/>
          <RadioButton opt1="Instruments" opt2="Animal" opt3="Cartoon" type="selectedPic" updateRadioButtonAttr={this.updateRadioButtonAttr}/>
        <MenuHeader menuHeaderTitle="Text"/>
          <RadioButton opt1="Joke" opt2="Name" opt3="Quote" type="selectedText" updateRadioButtonAttr={this.updateRadioButtonAttr}/>
        <MenuHeader menuHeaderTitle="Audio"/>
          <RadioButton opt1="Instruments" opt2="Animal" opt3="Cartoon" type="selectedAudio" updateRadioButtonAttr={this.updateRadioButtonAttr}/>
      </div>
    );
  }

}
