import React from "react";
import "./ControlSelect.css";

function ControlSelect(props) {
  const { name, label, handleChange, options } = props;
  return (
    <div className="blade-list-control is-select">
      <label htmlFor={`xc2-${name}`}>{label}</label>
      <div className="xc2-select">
        <select id={`xc2-${name}`} name={name} onChange={handleChange}>
          {options.map(option => {
            return (
              <option key={`xc2-${name}-${option.name}`} value={option.value}>
                {option.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default ControlSelect;
