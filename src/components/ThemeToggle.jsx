import React from "react";
import "../styles/themeToggle.css";

function ThemeToggle({ state, setState, icons, type }) {
  return (
    <div className="theme-toggle">
      <input
        type="checkbox"
        className="theme-checkbox"
        id={type}
        defaultChecked={state}
        onChange={() => setState((prevState) => !prevState)}
      />
      <label htmlFor={type} className="theme-label">
        <img src={icons.first} alt="moon" />
        <img src={icons.second} alt="sun" />
        <div className="theme-ball" />
      </label>
    </div>
  );
}

export default ThemeToggle;
