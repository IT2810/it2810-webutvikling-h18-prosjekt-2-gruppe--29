import React, { Component } from 'react';
import { Menu } from '../components/menu.js';

export class MenuToggle extends Component {

	toggleMenu() {
		console.log("abc")
	}

	render() {
		return (
			<div className="MenuToggle" onClick={this.toggleMenu}>
			V
			</div>
		);
	}
}

export default MenuToggle;