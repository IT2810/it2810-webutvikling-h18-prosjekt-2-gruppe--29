
import React, { Component } from 'react';

/*import { RadioButton } from '../components/radioButton.js';
import { MenuHeader } from '../components/MenuHeader.js';*/
import { MenuContent } from '../components/MenuContent.js';



export class Menu extends Component {

	constructor(props, context) {
        super(props, context);

				this.state = { showMenu: false };

				this.toggleMenu = this.toggleMenu.bind(this);

    }

		toggleMenu() {
        const currentState = this.state.showMenu;
        this.setState({ showMenu: !currentState });
				console.log(this.state.showMenu)
    };


    render () {
        return (
        	<div className="menu">
	        	<div className="MenuToggle" onClick={this.toggleMenu}>
					V
				</div>
				{this.state.showMenu && <MenuContent/>}
				</div>
        )
    }
}

export default Menu;
