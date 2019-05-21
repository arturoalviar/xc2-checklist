import React, { Component } from "react";
import BladeIndicator from "../BladeIndicator/BladeIndicator";
import PropTypes from "prop-types";
import "./Blade.css";

class Blade extends Component {
  static propTypes = {
    index: PropTypes.string,
    details: PropTypes.shape({
      method: PropTypes.string,
      isVisible: PropTypes.boolean,
      role: PropTypes.string,
      type: PropTypes.string,
      weapon: PropTypes.string
    }),
    staticDetails: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string
    }),
    updateObtained: PropTypes.func
  };

  makeBladeClassName = () => {
    let className = "blade";

    if (this.props.details.isDlc) className += " is-dlc";
    if (this.props.details.isSpoiler) className += " is-spoiler";
    if (this.props.details.isNewGamePlus) className += " is-new-game-plus";

    return className;
  };

  updateObtained = updatedBlade => {
    this.props.updateObtained(this.props.index, updatedBlade);
  };

  renderInfo = () => {
    const { method, methodName, role, type, weapon, link } = this.props.details;
    const { name } = this.props.staticDetails;
    const obtainment =
      typeof link !== "undefined" ? (
        <p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {methodName}
          </a>
        </p>
      ) : (
        <p>{method}</p>
      );

    return (
      <div className="blade-description">
        <h2 className="blade-name"> {name}</h2>
        <h3 className="blade-info">
          <span className="blade-role">{role}</span> /{" "}
          <span className="blade-type">{type}</span>
        </h3>
        <p>{weapon}</p>
        {obtainment}
      </div>
    );
  };

  render() {
    return (
      <div className={this.makeBladeClassName()}>
        <BladeIndicator
          details={this.props.details}
          staticDetails={this.props.staticDetails}
          updateObtained={this.updateObtained}
        />
        {this.renderInfo()}
      </div>
    );
  }
}

export default Blade;
