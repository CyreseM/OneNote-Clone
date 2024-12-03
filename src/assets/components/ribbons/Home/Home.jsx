import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboard,
  faBrush,
  faItalic,
  faUnderline,
  faStrikethrough,
  faList,
  faListOl,
  faIndent,
  faOutdent,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import { fonts, fontsize } from "../../../fonts/font";
import FontColorSelect from "../../../fonts/FontColorSelect";
import "./Home.css";
import Highlighter from "../../../fonts/Highlighter/Highlighter";
import Alignment from "../../../fonts/Alignment/Alignment";
import TextStyleDropdown from "../../../fonts/TextStyle/TextStyleDropdown";
import { paste } from "../../../../features/homeSlice.js";
import { useSelector, useDispatch } from "react-redux";
const Home = () => {
  const pasted = useSelector((state) => state.home.value.clipboard);

  const dispatch = useDispatch();

  const handlePaste = async () => {
    try {
      // Access clipboard data
      const text = await navigator.clipboard.readText();
      // Dispatch the paste action with the clipboard data
      dispatch(paste(text));
      console.log(pasted);
      console.log("Pasted content:", text);
    } catch (error) {
      console.error("Failed to read clipboard contents:", error);
    }
  };

  return (
    <div>
      <div className="home-ribbon">
        <button
          className="ribbonbtn"
          onClick={() => {
            handlePaste();
          }}
        >
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
        <FontColorSelect />
        <Highlighter />
        <button className="ribbonbtn focusable" style={{ color: "black" }}>
          <FontAwesomeIcon icon={faList} />
        </button>
        <button className="ribbonbtn focusable" style={{ color: "black" }}>
          <FontAwesomeIcon icon={faListOl} />
        </button>
        <button className="ribbonbtn focusable" style={{ color: "black" }}>
          <FontAwesomeIcon icon={faIndent} />
        </button>
        <button className="ribbonbtn focusable" style={{ color: "black" }}>
          <FontAwesomeIcon icon={faOutdent} />
        </button>
        <Alignment />
        <div className="divider"></div>
        <button className="ribbonbtn focusable" style={{ color: "black" }}>
          <FontAwesomeIcon icon={faSquareCheck} />
        </button>
        <TextStyleDropdown />
      </div>
    </div>
  );
};

export default Home;