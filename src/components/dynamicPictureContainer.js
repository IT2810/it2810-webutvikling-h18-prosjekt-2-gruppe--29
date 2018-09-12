import React, { Component } from 'react';
import { PictureFrame } from './pictureFrame';


export class DynamicPictureContainer extends Component {
    render () {
        return (
            <div className="dynamicPictureContainer">
                <PictureFrame />
            </div>
        )
    }
}