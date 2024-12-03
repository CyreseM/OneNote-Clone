import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import "../Alignment/Alignment.css";
import { useState } from "react";
const Alignment = () => {
  const [selectedOption, setSelectedOption] = useState("left");

  const options = [
    { value: "left", label: "Align Left", icon: faAlignLeft },
    { value: "center", label: "Align Center", icon: faAlignCenter },
    { value: "right", label: "Align Right", icon: faAlignRight },
  ];

  const handleSelect = (value) => {
    setSelectedOption(value);
    console.log("Selected Option:", value);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle">
        <FontAwesomeIcon
          icon={options.find((opt) => opt.value === selectedOption).icon}
        />{" "}
        &nbsp; &nbsp;
        <FontAwesomeIcon icon={faAngleDown} />
      </button>

      <ul className="dropdown-menu">
        {options.map((option) => (
          <li
            key={option.value}
            className="dropdown-item"
            onClick={() => handleSelect(option.value)}
          >
            <FontAwesomeIcon icon={option.icon} /> {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alignment;
