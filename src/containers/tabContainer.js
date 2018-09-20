import React, { Component } from 'react';
import { Tab } from '../components/tab.js';

export class TabContainer extends Component {

    updateSelectedTab = (tabNumber) => {
      this.props.updateSelectedTab(tabNumber)
    };



    render () {
        return (
            <div className='tabContainer'>
                <Tab number="1" updateTabAttr={this.updateSelectedTab}/>
                <Tab number="2" updateTabAttr={this.updateSelectedTab}/>
                <Tab number="3" updateTabAttr={this.updateSelectedTab}/>
                <Tab number="4" updateTabAttr={this.updateSelectedTab}/>
            </div>
        )
    }
}
