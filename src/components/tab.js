import React, { Component } from 'react';

export class Tab extends Component {

  updateTabAttr = () => {
    this.props.updateTabAttr(this.props.number);
  };

  componentDidMount() {
    //setter default tab til 1
    if (this.props.number == 1) {
      this.updateTabAttr();
    }
  }

    render () {
      return (
        <div className={this.props.selected ? "tabStyle selectedTab" : "tabStyle"} onClick={this.updateTabAttr} >
              <h1 className="tabTextStyle" >{this.props.number}</h1>
          </div>
      )
    }

}
