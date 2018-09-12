import React, { Component } from 'react';

export class RadioButton extends Component {

  render() {

    return (
      <div className="radioButtonLine">
        <form>
          <div>
            <label>
              <input className="radioButton" type="radio" name="radioButtonGroup" value={this.props.opt1} />
              {this.props.opt1}
            </label>
          </div>
          <div>
            <label>
              <input className="radioButton" type="radio" name="radioButtonGroup" value={this.props.opt2} />
              {this.props.opt2}
            </label>
          </div>
          <div>
            <label>
              <input className="radioButton" type="radio" name="radioButtonGroup" value={this.props.opt3} />
              {this.props.opt3}
            </label>
          </div>
        </form>
      </div>
    );
  }

}
