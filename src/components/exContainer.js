import React, { Component } from 'react';
import { DynamicPictureContainer } from './dynamicPictureContainer';
import { TabContainer } from './tabContainer';

export class ExContainer extends Component {
    render () {
        return (
            <div className="exContainer">
                <TabContainer />
                <DynamicPictureContainer textName="joke1"/>
            </div>
        )
    }
}