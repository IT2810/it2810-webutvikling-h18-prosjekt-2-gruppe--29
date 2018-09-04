import React, { Component } from 'react';

class RadioButton extends Component {

  render() {
    let radioButtonStyle = {
      marginRight: '50px'
    };

    return (
      <div >
        <form >
          <label>
            <input style={radioButtonStyle} type="radio" value={this.props.text} />
            {this.props.text}
          </label>
        </form>
      </div>
    );
  }
}

export default RadioButton;
