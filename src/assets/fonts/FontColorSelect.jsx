import { colors } from "./font";
import { useState } from "react";
import "./FontColorSelect.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA } from "@fortawesome/free-solid-svg-icons";
const FontColorSelect = () => {
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
            <FontAwesomeIcon icon={faA} />
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

export default FontColorSelect;
