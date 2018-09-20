import React, { Component } from 'react';
import { MenuContent } from '../components/MenuContent.js';

import ReactCSSTransitionReplace from 'react-css-transition-replace';

export class Menu extends Component {

	constructor(props, context) {
		super(props, context);
		this.updateRadioButtonAttr = this.updateRadioButtonAttr.bind(this);
		this.state = { showMenu: false };
		this.toggleMenu = this.toggleMenu.bind(this);
  }

	toggleMenu() {
    const currentState = this.state.showMenu;
    this.setState({ showMenu: !currentState });
  };

	updateRadioButtonAttr(e,type) {
		//menu.js
		this.props.updateRadioButtonAttr(e, type);
	}

  render () {
  	return (
	  	<div className="menu">
	      <div className="MenuToggle" onClick={this.toggleMenu}>
					<i className= {this.state.showMenu ? "fa fa-angle-up" : "fa fa-angle-down"} ></i>
				</div>
				<ReactCSSTransitionReplace
					transitionName="slide-in"
					transitionLeaveTimeout={500}>
			{this.state.showMenu && <MenuContent updateRadioButtonAttr={this.updateRadioButtonAttr}/>}
				</ReactCSSTransitionReplace>
			</div>
    )
  }
}

export default Menu;
