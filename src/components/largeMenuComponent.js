import React, { Component } from 'react';
import { RadioButton } from './radioButton.js';
import { MenuHeader } from './MenuHeader.js';

export class LargeMenuComponent extends Component {
    render () {
        return (
            <div className='largeMenuComponent'>
                <MenuHeader menuHeaderTitle="Picture"/>
                  <RadioButton opt1="Instruments" opt2="Animals" opt3="Childrens Shows"/>
                <MenuHeader menuHeaderTitle="Text"/>
                  <RadioButton opt1="Instruments" opt2="Animals" opt3="Childrens Shows"/>
                <MenuHeader menuHeaderTitle="Audio"/>
                  <RadioButton opt1="Instruments" opt2="Animals" opt3="Childrens Shows"/>
            </div>
        )
    }
}
