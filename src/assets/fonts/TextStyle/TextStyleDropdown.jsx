import React, { useState } from "react";
import styler from "./TextStyle.module.css";
import { faFont } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TextStyleDropdown = () => {
  const [selectedStyle, setSelectedStyle] = useState("Standard");

  const styles = [
    {
      label: "Standard",
      style: { fontSize: "16px", fontWeight: "normal", fontStyle: "normal" },
    },
    {
      label: "Heading 1",
      style: {
        fontSize: "24px",
        fontWeight: "bold",
        fontStyle: "normal",
        cmdfont: "6",
      },
    },
    {
      label: "Heading 2",
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        fontStyle: "normal",
        cmdfont: "5",
      },
    },
    {
      label: "Paragraph",
      style: {
        fontSize: "16px",
        fontWeight: "normal",
        fontStyle: "normal",
        cmdfont: "4",
      },
    },
    {
      label: "Quotation",
      style: {
        fontSize: "18px",
        fontStyle: "italic",
        fontWeight: "normal",
        cmdfont: "4",
      },
    },
    {
      label: "Quote Standard",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        fontStyle: "italic",
        cmdfont: "4",
      },
    },
    {
      label: "Citation",
      style: {
        fontSize: "14px",
        fontStyle: "italic",
        color: "#555",
        cmdfont: "3",
      },
    },
  ];

  const handleStyleChange = (styleLabel) => {
    setSelectedStyle(styleLabel);
    const changeStyle = styles.find((style) => style.label === styleLabel);
    document.execCommand("fontSize", changeStyle.style?.cmdfont);
    document.execCommand("fontName", false, changeStyle.style?.fontStyle);
    document.execCommand("fontWeight", changeStyle.style?.fontWeight);
    document.execCommand("color", changeStyle.style?.color);
  };

  return (
    <div>
      {/* Dropdown Menu */}
      <div className={styler.dropdown}>
        <button className={styler.dropdownToggle}>
          <FontAwesomeIcon icon={faFont} /> Styles
        </button>
        <ul className={styler.dropdownMenu}>
          {styles.map((style, index) => (
            <li
              key={index}
              className={styler.dropdownItem}
              style={style.style}
              tabIndex={-1}
              onClick={() => handleStyleChange(style.label)}
            >
              {style.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TextStyleDropdown;
