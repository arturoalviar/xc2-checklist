import React, { Component } from "react";
import ControlSelect from "../ControlSelect/ControlSelect";
import Accordion from "../Accordion";
import options from "../../data/filterOptions";

class FilterOptions extends Component {
  handleChange = event => {
    const target = event.currentTarget;
    const key = target.name;
    let value;

    if (target.type === "checkbox") {
      value = event.target.checked;
    } else {
      value = target.value;
    }

    const filter = {
      [key]: value
    };

    this.props.updateFilters(key, filter, value);
  };

  render() {
    const { isOpen } = this.props;
    return (
      <Accordion isOpen={isOpen}>
        <div className="blade-list-controls">
          <ControlSelect
            name="status"
            label="Obtainment Stauts"
            options={options.status}
            handleChange={this.handleChange}
          />

          <ControlSelect
            name="type"
            label="Blade Type"
            options={options.type}
            handleChange={this.handleChange}
          />

          <ControlSelect
            name="role"
            label="Blade Role"
            options={options.role}
            handleChange={this.handleChange}
          />

          <ControlSelect
            name="method"
            label="Obtainment"
            options={options.method}
            handleChange={this.handleChange}
          />
        </div>
      </Accordion>
    );
  }
}

export default FilterOptions;
