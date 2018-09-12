import React, { Component } from 'react';

export class MenuHeader extends Component {

	render() {
		return (
			<div className="menuHeader">
				<div className="menuHeaderTitle"> {this.props.menuHeaderTitle} </div>
			</div>
		);
	}
}

export default MenuHeader;
