import React, { Component } from 'react';
import { PictureFrame } from './pictureFrame';
import {Music} from './Music';

export class DynamicPictureContainer extends Component {

    

    render () {

        return (
            <div className="dynamicPictureContainer">
                <PictureFrame textName={this.props.textName} imgName={this.props.imgName} audioName={this.props.audioName}/>
                <Music audioName={this.props.audioName}/>
            </div>
        )
    }
}
