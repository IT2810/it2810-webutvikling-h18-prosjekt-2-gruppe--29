import React, { Component } from 'react';
import { DynamicPictureContainer } from './dynamicPictureContainer';
import { TabContainer } from './tabContainer';
import dogBark from '../audio/animals/dogBark.mp3'

export class ExContainer extends Component {

    updateSelectedTab = (tabNumber) => {
      this.props.updateSelectedTab(tabNumber)
    };

    render () {
        return (
            <div className="exContainer">
                <TabContainer updateSelectedTab={this.updateSelectedTab}/>
                <DynamicPictureContainer textName="joke1" imgName="cats" audioName={dogBark}/>
            </div>
        )
    }
}
