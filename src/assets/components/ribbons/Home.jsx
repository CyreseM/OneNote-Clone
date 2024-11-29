import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboard,
  faBrush,
  faItalic,
  faUnderline,
  faStrikethrough,
} from "@fortawesome/free-solid-svg-icons";
import { fonts, fontsize } from "../../fonts/font";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="home-ribbon">
        <button className="ribbonbtn">
          <FontAwesomeIcon icon={faClipboard} />
        </button>
        <button className="ribbonbtn focusable">
          <FontAwesomeIcon icon={faBrush} />
        </button>
        <div className="divider"></div>
        <select name="font-select" id="font-select">
          {fonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
        <select name="font-size-select" id="font-size-select">
          {fontsize.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>

        <button className="ribbonbtn focusable">
          <p style={{ fontWeight: "bold", color: "black" }}>B</p>
        </button>
        <button className="ribbonbtn focusable" style={{ color: "black" }}>
          <FontAwesomeIcon icon={faItalic} />
        </button>
        <button className="ribbonbtn focusable" style={{ color: "black" }}>
          <FontAwesomeIcon icon={faUnderline} />
        </button>
        <button className="ribbonbtn focusable" style={{ color: "black" }}>
          <FontAwesomeIcon icon={faStrikethrough} />
        </button>
      </div>
    </div>
  );
};

export default Home;
