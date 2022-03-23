import React from "react";

const Toggle = ({ darkMode, setDarkMode }) => (
  <div className="dark-mode-toggle">
    <button type="button" onClick={() => setDarkMode(false)}>
      ☀
    </button>
   
    <button type="button" onClick={() => setDarkMode(true)}>
      ☾
    </button>
  </div>
);

export default Toggle;