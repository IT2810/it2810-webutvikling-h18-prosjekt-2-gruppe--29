import React, { Component } from 'react';
import { PictureFrame } from './pictureFrame';


export class DynamicPictureContainer extends Component {
    render () {
        return (
            <div className="dynamicPictureContainer">
                <PictureFrame textName={this.props.textName} imgName={this.props.imgName}/>
            </div>
        )
    }
}
