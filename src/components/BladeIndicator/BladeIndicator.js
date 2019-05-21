import React, { Component } from "react";
import "./BladeIndicator.css";

class BladeIndicator extends Component {
  updateObtained = event => {
    const checked = event.target.checked;
    const status = checked ? "obtained" : "need";
    const updatedBlade = {
      ...this.props.details,
      [event.target.name]: checked,
      status
    };

    this.props.updateObtained(updatedBlade);
  };

  renderAvatar = () => {
    const { image } = this.props.staticDetails;

    return (
      <div className="blade-image-wrapper">
        <div
          className="blade-image"
          style={{ backgroundImage: `url(${image})` }}
        >
          {" "}
        </div>
        {this.renderStatus()}
      </div>
    );
  };

  renderStatus = () => {
    return (
      <div className="blade-indicator-wrapper">
        <div className="blade-indicator">
          <div className="blade-indicator-obtained" />
        </div>
      </div>
    );
  };

  render() {
    const { obtained, status } = this.props.details;
    const { name } = this.props.staticDetails;

    return (
      <div className="blade-obtained">
        <input
          id={`${name}-checkbox`}
          type="checkbox"
          name="obtained"
          checked={obtained}
          value={status}
          onChange={this.updateObtained}
        />
        <label htmlFor={`${name}-checkbox`}>{this.renderAvatar()}</label>
      </div>
    );
  }
}

export default BladeIndicator;
