import React, { Component } from 'react';
import { DynamicPictureContainer } from './dynamicPictureContainer';
import { TabContainer } from './tabContainer';
import dogBark from '../audio/animals/dogBark.mp3'

export class ExContainer extends Component {
    render () {
        return (
            <div className="exContainer">
                <TabContainer />
                <DynamicPictureContainer textName={this.props.textName} imgName={this.props.imgName} audioName={dogBark}/>
            </div>
        )
    }
}
