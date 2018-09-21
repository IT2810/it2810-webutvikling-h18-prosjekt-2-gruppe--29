import React, { Component } from 'react';

export class RadioButton extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = { selected : this.props.opt1 };
  }

  componentWillReceiveProps(){ 
    const cachedOpt = sessionStorage.getItem(this.props.type);
    if (cachedOpt === this.props.opt1) {
      this.setState({ selected : this.props.opt1 })
    } 
    else if (cachedOpt === this.props.opt2) {
      this.setState({ selected : this.props.opt2 })
    } 
    else if (cachedOpt === this.props.opt3) {
      this.setState({ selected : this.props.opt3 })
    }
  }
    



  updateRadioButtonAttr = (e) => {
    this.props.updateRadioButtonAttr(e, this.props.type);
    sessionStorage.setItem(this.props.type, e.target.value) //cacher valgt radiobutton
  }

  render() {
    return (
      <div className="radioButton">
        <form>
          <div className="radioButtonLine">
            <label>
              <input type="radio" name="radioButtonGroup" value={this.props.opt1} onChange={this.updateRadioButtonAttr} checked={this.state.selected === this.props.opt1} />
              <span className="checkmark"><span className="mark"></span></span>
              { this.props.opt1}
            </label>
          </div>
          <div className="radioButtonLine">
            <label>
              <input type="radio" name="radioButtonGroup" value={this.props.opt2} onChange={this.updateRadioButtonAttr} checked={this.state.selected === this.props.opt2} />
              { this.props.opt2 }
              <span className="checkmark"><span className="mark"></span></span>
            </label>
          </div>
          <div className="radioButtonLine">
            <label>
              <input type="radio" name="radioButtonGroup" value={this.props.opt3} onChange={this.updateRadioButtonAttr} checked={this.state.selected === this.props.opt3} />
              { this.props.opt3 }
              <span className="checkmark"><span className="mark"></span></span>
            </label>
          </div>
        </form>
      </div>
    );
  }

}
