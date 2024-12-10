import { colors } from "../../fonts/font";
import { useState } from "react";
import "../FontColorSelect.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHighlighter } from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";

const Highlighter = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [isColorGridVisible, setColorGridVisible] = useState(false);
  const { startContainerId, startOffset, endContainerId, endOffset } =
    useSelector((state) => state.home.value.selection);
  // Handle color selection

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    // Validate stored selection data
    if (!startContainerId || !endContainerId) return;

    // Retrieve the elements by ID or className
    const startContainer =
      document.getElementById(startContainerId)?.firstChild ||
      document.querySelector(`.${startContainerId}`)?.firstChild;
    const endContainer =
      document.getElementById(endContainerId)?.firstChild ||
      document.querySelector(`.${endContainerId}`)?.firstChild;

    if (!startContainer || !endContainer) return;

    const range = document.createRange();
    range.setStart(startContainer, startOffset);
    range.setEnd(endContainer, endOffset);

    // Extract selected content
    const selectedContent = range.extractContents();

    // Create a styled span wrapper
    const wrapperSpan = document.createElement("span");
    wrapperSpan.style.backgroundColor = selectedColor;
    wrapperSpan.appendChild(selectedContent);

    // Insert the styled span back into the range
    range.insertNode(wrapperSpan);

    // Clear the selection
    const selection = window.getSelection();
    selection.removeAllRanges();
    setColorGridVisible(false);
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
