import React, { Component } from 'react';


export class Tab extends Component {

  updateTabAttr = () => {
    this.props.updateTabAttr(this.props.number);
  };


    render () {
      return (
          <div className="tabStyle" >
              <h1 className="tabTextStyle" onClick={this.updateTabAttr}>{this.props.number}</h1>
          </div>
      )
    }
}
