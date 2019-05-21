import React, { Component } from "react";
// generated state
import staticBladeData from "../../data/staticBladeData";
import blades from "../../blades";
import Blade from "../Blade/Blade";
import ListControls from "../ListControls/ListControls";
import "./BladeList.css";

class BladeList extends Component {
  state = {
    blades,
    staticBladeData,
    filters: {}
  };

  // update which blades a user has obtained
  updateObtained = (blade, updatedBlade) => {
    const blades = { ...this.state.blades };

    blades[blade] = updatedBlade;
    this.setState({ blades });
  };

  // update filters state
  updateFilters = (key, filter, hasValue) => {
    const filters = { ...this.state.filters };

    // option selected has value of false (empty value string)?
    if (hasValue) {
      filters[key] = filter;
    } else {
      delete filters[key];
    }

    this.setState({ filters });
  };

  updateBladeListByOptions = options => {
    const blades = { ...this.state.blades };
    let updatedBlades = {};
    Object.keys(this.state.blades).forEach(blade => {
      Object.keys(options).forEach(option => {
        if (blades[blade].hasOwnProperty(option)) {
          blades[blade].isVisible = options[option];
        }
      });
      updatedBlades[blade] = blades[blade];
    });

    this.setState({ blades: updatedBlades });
  };

  filterBlades = blade => {
    return Object.keys(this.state.filters)
      .map(filter => {
        // very specific retrival based on our data
        return (
          this.state.blades[blade].isVisible &&
          this.state.blades[blade][filter] ===
            this.state.filters[filter][filter]
        );
      })
      .every(item => item); // return if every selected filter applies to a blade
  };

  // check if user has exisiting list
  componentDidMount() {
    const localStoredBlades = localStorage.getItem("obtainedBlades");

    if (localStoredBlades) {
      this.setState({ blades: JSON.parse(localStoredBlades) });
    }
  }

  // remember the user's list
  componentDidUpdate() {
    localStorage.setItem("obtainedBlades", JSON.stringify(this.state.blades));
  }

  // create a blade card
  renderBlade = blade => {
    return (
      <Blade
        key={blade}
        index={blade}
        staticDetails={this.state.staticBladeData[blade]}
        details={this.state.blades[blade]}
        updateObtained={this.updateObtained}
      />
    );
  };

  // depending on the filters, render the needed blades
  renderBlades = () => {
    // render default list (hide spoilers, dlc, ng+ on inital render)
    if (Object.keys(this.state.filters).length < 1) {
      return Object.keys(this.state.blades)
        .filter(blade => this.state.blades[blade].isVisible)
        .map(this.renderBlade);
    } else {
      // filter based on applied filters
      const filteredList = Object.keys(this.state.blades).filter(
        this.filterBlades
      );
      // check if new applied filters apply to any blades
      if (filteredList.length) {
        return filteredList.map(this.renderBlade);
      } else {
        return (
          <h3>
            {" "}
            Nothing to see here{" "}
            <span role="img" aria-label="dissapointed">
              😞{" "}
            </span>
            .
          </h3>
        );
      }
    }
  };

  render() {
    return (
      <div className="blade-container">
        <ListControls
          updateFilters={this.updateFilters}
          updateBladeListByOptions={this.updateBladeListByOptions}
        />
        <div className="blades">{this.renderBlades()}</div>
      </div>
    );
  }
}

export default BladeList;
