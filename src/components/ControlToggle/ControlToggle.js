import React, { Component } from "react";
import "./ControlToggle.css";

class ControlToggle extends Component {
  updateOptions = event => {
    const name = event.target.name;
    const checked = event.target.checked;

    this.props.updateOptions(checked, name);
  };

  renderCheckbox = (name, label) => {
    return (
      <label htmlFor={`xc2-${name}`}>
        <div className="xc2-button-settings">{label}</div>
      </label>
    );
  };

  render() {
    const { name, label, isChecked } = this.props;

    return (
      <div className="blade-list-control is-checkbox">
        <input
          type="checkbox"
          id={`xc2-${name}`}
          name={name}
          onChange={this.updateOptions}
          checked={isChecked}
        />
        {this.renderCheckbox(name, label)}
      </div>
    );
  }
}

export default ControlToggle;
