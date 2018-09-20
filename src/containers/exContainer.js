import React, { Component } from 'react';
import { DynamicPictureContainer } from './dynamicPictureContainer';
import { TabContainer } from '../containers/tabContainer';

export class ExContainer extends Component {

    constructor(props) {
        super(props)

    }

    updateSelectedTab = (tabNumber) => {
      this.props.updateSelectedTab(tabNumber)
    };

    render () {

        return (
            <div className="exContainer">
                <TabContainer updateSelectedTab={this.updateSelectedTab}/>
                <DynamicPictureContainer textName={this.props.theText} imgName={this.props.imgName} audioName={this.props.audioName}/>
            </div>
        )
    }
}
