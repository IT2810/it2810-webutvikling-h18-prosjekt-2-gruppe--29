import React, { Component } from 'react';

export class RadioButton extends Component {

  //saves selected radio btn according to category in state
  updateRadioButtonAttr = (e) => {
    this.props.updateRadioButtonAttr(e, this.props.type);
  };

  render() {

    this.defaultProps = {
      buttonAfter : false,
    }

    return (
      <div className="radioButton">
        <form>
          <div className="radioButtonLine">
            <label>
              {this.props.buttonAfter && this.props.opt1}
              <input type="radio" name="radioButtonGroup" value={this.props.opt1} />
              {this.props.buttonAfter && <span className="checkmark"><span className="mark"></span></span> }
              {!this.props.buttonAfter && this.props.opt1}
            </label>
          </div>
          <div className="radioButtonLine">
            <label>
              {this.props.buttonAfter && this.props.opt2 }
              <input type="radio" name="radioButtonGroup" value={this.props.opt2} />
              {this.props.buttonAfter && <span className="checkmark"><span className="mark"></span></span> }
              {!this.props.buttonAfter && this.props.opt2 }
            </label>
          </div>
          <div className="radioButtonLine">
            <label>
              {this.props.buttonAfter && this.props.opt3}
              <input type="radio" name="radioButtonGroup" value={this.props.opt3} />
              {this.props.buttonAfter && <span className="checkmark"><span className="mark"></span></span> }
              {!this.props.buttonAfter && this.props.opt3}
            </label>
          </div>
        </form>
      </div>
    );
  }

}
