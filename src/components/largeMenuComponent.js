import React, { Component } from 'react';
import { RadioButton } from './radioButton.js';
import { MenuHeader } from './MenuHeader.js';

export class LargeMenuComponent extends Component {
    render () {
        return (
            <div className='largeMenuComponent'>
                <MenuHeader menuHeaderTitle="Media group 1"/>
                <RadioButton text="Option 1"/>
                <RadioButton text="Option 1"/>
                <RadioButton text="Option 1"/>
                <MenuHeader menuHeaderTitle="Media group 2"/>
                <RadioButton text="Option 1"/>
                <RadioButton text="Option 1"/>
                <RadioButton text="Option 1"/>
                <MenuHeader menuHeaderTitle="Media group 3"/>
                <RadioButton text="Option 1"/>
                <RadioButton text="Option 1"/>
                <RadioButton text="Option 1"/>
            </div>
        )
    }
}

