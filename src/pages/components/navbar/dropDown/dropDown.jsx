import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import "./dropDown.css"

const DropdownButton = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={() => setShowMenu(!showMenu)}>
        <FiMenu size={20} />
      </button>
      {showMenu && (
        <ul className="dropdown-menu">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;

