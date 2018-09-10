import React, { Component } from 'react';

export class RadioButton extends Component {

  render() {

    return (
      <div >
        <form >
          <label>
            <input className="radioButton" type="radio" value={this.props.text} />
            {this.props.text}
          </label>
        </form>
      </div>
    );
  }
  
}
