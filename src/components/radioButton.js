import React, { Component } from 'react';

export class RadioButton extends Component {

  render() {

    return (
      <div className="radioButtonLine">
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
