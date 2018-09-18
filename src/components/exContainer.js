import React, { Component } from 'react';
import { DynamicPictureContainer } from './dynamicPictureContainer';
import { TabContainer } from './tabContainer';
import dogBark from '../audio/animals/dogBark.mp3'

export class ExContainer extends Component {
    render () {
        return (
            <div className="exContainer">
              <h1 className="title">Gallery Amazing Fantastico</h1>
              <TabContainer />
              <DynamicPictureContainer textName="joke1" imgName="cats" audioName={dogBark}/>
            </div>
        )
    }
}
