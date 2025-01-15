import React from "react";

function Header({ onDarkModeClick, isDarkMode }) {
  const buttonText = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>{buttonText}</button>
    </header>
  );
}

export default Header;
