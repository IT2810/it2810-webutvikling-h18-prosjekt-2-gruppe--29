import React, { Component } from 'react';

export class MenuHeader extends Component {
	render() {
		return (
			<div className="menuHeader">
				<h1 className="menuHeaderTitle"> {this.props.menuHeaderTitle} </h1>
			</div>
		);
	}
}

export default MenuHeader;