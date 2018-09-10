import React, { Component } from 'react';
import { LargeMenuComponent } from './largeMenuComponent.js';
import { ExContainer } from './exContainer.js';


export class ContentContainer extends Component {
    render () {
        return (
            <div className='contentContainer'>
                <ExContainer></ExContainer>
                <LargeMenuComponent></LargeMenuComponent>
            </div>
        )
    }
}

