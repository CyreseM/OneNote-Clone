import React from "react";
import { colors } from "../../fonts/font";
import { useState } from "react";
import "../FontColorSelect.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHighlighter } from "@fortawesome/free-solid-svg-icons";
const Highlighter = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [isColorGridVisible, setColorGridVisible] = useState(false);

  // Handle color selection
  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setColorGridVisible(false); // Hide the color grid after selection
  };

  // Toggle color grid visibility
  const toggleColorGrid = () => {
    setColorGridVisible(!isColorGridVisible);
  };
  return (
    <div>
      <div className="color-picker">
        <button
          className="ribbonbtn focusable"
          style={{
            fontWeight: "bold",
            color: "black",
            cursor: "pointer",
          }}
          onClick={toggleColorGrid}
        >
          <p
            style={{
              borderBottom: `2px solid ${selectedColor}`,
            }}
          >
            <FontAwesomeIcon icon={faHighlighter} />
          </p>
        </button>

        {isColorGridVisible && (
          <div className="color-grid">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-box"
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelect(color)}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Highlighter;
