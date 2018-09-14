import React, { Component } from 'react';

export class RadioButton extends Component {

  //saves selected radio btn according to category in state
  updateRadioButtonAttr = (e) => {
    this.props.updateRadioButtonAttr(e, this.props.type);
  };

  render() {

    return (
      <div className="radioButtonLine">
        <form>
          <div>
            <label>
              <input className="radioButton" type="radio" name="radioButtonGroup" value={this.props.opt1}
              onChange={this.updateRadioButtonAttr}/>
              {this.props.opt1}
            </label>
          </div>
          <div>
            <label>
              <input className="radioButton" type="radio" name="radioButtonGroup" value={this.props.opt2}
              onChange={this.updateRadioButtonAttr}/>
              {this.props.opt2}
            </label>
          </div>
          <div>
            <label>
              <input className="radioButton" type="radio" name="radioButtonGroup" value={this.props.opt3}
              onChange={this.updateRadioButtonAttr}/>
              {this.props.opt3}
            </label>
          </div>
        </form>
      </div>
    );
  }

}
