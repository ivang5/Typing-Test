import React from "react";
import "../styles/toggle.css";

function Toggle({ state, setState, icons, type }) {
  return (
    <div className="toggle">
      <input
        type="checkbox"
        className="toggle-checkbox"
        id={type}
        defaultChecked={state}
        onChange={() => setState((prevState) => !prevState)}
      />
      <label htmlFor={type} className="toggle-label">
        <img src={icons.first} alt="moon" />
        <img src={icons.second} alt="sun" />
        <div className="toggle-ball" />
      </label>
    </div>
  );
}

export default Toggle;
