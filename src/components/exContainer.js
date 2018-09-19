import React, { Component } from 'react';
import { DynamicPictureContainer } from './dynamicPictureContainer';
import { TabContainer } from './tabContainer';
import dogBark from '../audio/animals/dogBark.mp3'

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
                <DynamicPictureContainer textName={this.props.theText} imgName={this.props.imgName} audioName={dogBark}/>
            </div>
        )
    }
}
