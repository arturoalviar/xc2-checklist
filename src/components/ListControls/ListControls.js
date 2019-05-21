import React, { Component } from "react";
import Octicon from "react-octicon";
import FilterOptions from "../FilterOptions/FilterOptions";
import UserSettings from "../UserSettings/UserSettings";
import "./ListControls.css";

class ListControls extends Component {
  state = {
    isSettingsOpen: false,
    isFiltersOpen: true
  };

  handleClick = event => {
    event.preventDefault();
    const target = event.currentTarget;
    const { name } = target;

    const updatedState = {
      [name]: !this.state[name]
    };

    this.setState({ ...updatedState });
  };

  renderButtons = () => {
    const { isSettingsOpen, isFiltersOpen } = this.state;
    return (
      <div className="xc2-settings-container">
        <button
          name="isSettingsOpen"
          className={`xc2-settings-toggle ${isSettingsOpen ? "is-active" : ""}`}
          onClick={this.handleClick}
        >
          <span>
            <Octicon name="gear" />{" "}
            {isSettingsOpen ? "Close Settings" : "Open Settings"}
          </span>
        </button>
        <button
          name="isFiltersOpen"
          className={`xc2-settings-toggle ${isFiltersOpen ? "is-active" : ""}`}
          onClick={this.handleClick}
        >
          <span>
            <Octicon name="settings" />{" "}
            {isFiltersOpen ? "Hide Filters" : "Show Filters"}
          </span>
        </button>
      </div>
    );
  };

  componentDidMount() {
    if (window.innerWidth < 600) {
      this.setState({ isFiltersOpen: false });
    }
  }

  render() {
    const { updateFilters, updateBladeListByOptions } = this.props;
    const { isSettingsOpen, isFiltersOpen } = this.state;
    return (
      <div className="xc2-list-controls">
        <form>
          {this.renderButtons()}
          <UserSettings
            isOpen={isSettingsOpen}
            updateFilters={updateFilters}
            updateBladeListByOptions={updateBladeListByOptions}
          />
          <FilterOptions isOpen={isFiltersOpen} updateFilters={updateFilters} />
        </form>
      </div>
    );
  }
}

export default ListControls;
