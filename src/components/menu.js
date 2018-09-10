import React, { Component } from 'react';

import { MenuHeader } from '../components/MenuHeader.js';
import { RadioButton } from '../components/radioButton.js';

export class Menu extends Component {

	showHide() {
		var m = document.getElementsByClassName("menu")[0];
		if (m.style.display === "none") {
			m.style.display = "block";
		} else {
			m.style.display = "none";
		}
	}

    render () {
        return (
        	<div className="menuuu">
	        	<div className="MenuToggle" onClick={this.showHide}>
					V
				</div>
	            <div className="menu">
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
            </div>
        )
    }
}

export default Menu;