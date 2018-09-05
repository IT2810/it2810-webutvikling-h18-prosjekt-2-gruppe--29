import React, { Component } from 'react';
import { Tab } from './tab.js';

export class TabContainer extends Component {
    render () {
        return (
            <div className='tabContainer'>
                <Tab number="1"/>
                <Tab number="2"/>
                <Tab number="3"/>
                <Tab number="4"/>
            </div>
        )
    }
}

