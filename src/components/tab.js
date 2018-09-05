import React, { Component } from 'react';


export class Tab extends Component {
    render () {
        return (
            <div className="tabStyle">
                <h1 className="tabTextStyle">{this.props.number}</h1>
            </div>
        )
    }
}