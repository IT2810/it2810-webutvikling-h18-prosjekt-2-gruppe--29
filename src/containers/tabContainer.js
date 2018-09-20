import React, { Component } from 'react';
import { Tab } from '../components/tab.js';

export class TabContainer extends Component {

    constructor(props, context) {
        super(props, context)
		this.state = { selectedTab: null };
    }

    updateSelectedTab = (tabNumber) => {
      this.props.updateSelectedTab(tabNumber)
      this.setState({ selectedTab : tabNumber })
    };



    render () {
        return (
            <div className='tabContainer'>
                <Tab number="1" selected={this.state.selectedTab == 1} updateTabAttr={this.updateSelectedTab}/>
                <Tab number="2" selected={this.state.selectedTab == 2} updateTabAttr={this.updateSelectedTab}/>
                <Tab number="3" selected={this.state.selectedTab == 3} updateTabAttr={this.updateSelectedTab}/>
                <Tab number="4" selected={this.state.selectedTab == 4} updateTabAttr={this.updateSelectedTab}/>
            </div>
        )
    }
}
