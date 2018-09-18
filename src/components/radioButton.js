import React, { Component } from 'react';

export class RadioButton extends Component {

  //saves selected radio btn according to category in state
  updateRadioButtonAttr = (e) => {
    this.props.updateRadioButtonAttr(e, this.props.type);
  };

  render() {

    return (
      <div className="radioButton">
        <form>
          <div className="radioButtonLine">
            <label>
              { this.props.opt1}
              <span className="checkmark"><span className="mark"></span></span>
              <input type="radio" name="radioButtonGroup" value={this.props.opt1} />
            </label>
          </div>
          <div className="radioButtonLine">
            <label>
              { this.props.opt2 }
              <span className="checkmark"><span className="mark"></span></span>
              <input type="radio" name="radioButtonGroup" value={this.props.opt2} />
            </label>
          </div>
          <div className="radioButtonLine">
            <label>
              { this.props.opt3 }
              <span className="checkmark"><span className="mark"></span></span>
              <input type="radio" name="radioButtonGroup" value={this.props.opt3} />

            </label>
          </div>
        </form>
      </div>
    );
  }

}
