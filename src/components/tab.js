import React, { Component } from 'react';

export class Tab extends Component {

  updateTabAttr = () => {
    this.props.updateTabAttr(this.props.number);
  };

    render () {
      return (
          <div className="tabStyle" onClick={this.updateTabAttr} >
              <h1 className="tabTextStyle" >{this.props.number}</h1>
          </div>
      )
    }

}
