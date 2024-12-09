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
import { useDispatch, useSelector } from "react-redux";
import {
  paste,
  setFont,
  setFontSize,
  activateFormatPainter,
  applyStylesToSelection,
} from "../../../../features/homeSlice.js";
const Home = () => {
  const dispatch = useDispatch();
  // Get the current font and font size from Redux
  // const Font = useSelector((state) => state.home.value.font);
  // const fontSize = useSelector((state) => state.home.value.fontSize);

  const handleFontChange = (e) => {
    // dispatch(setFont(e.target.value));
    document.getSelection().anchorNode.parentElement.style.fontFamily =
      e.target.value; // Apply selected font
  };

  const handleFontSizeChange = (e) => {
    // dispatch(setFontSize(e.target.value));
    document.getSelection().anchorNode.parentElement.style.fontSize = `${e.target.value}px`;
    console.log(e.target.value);
    dispatch(applyStylesToSelection()); // Apply to selection
  };
  const handlePaste = async () => {
    try {
      const contentEditableElement = document.querySelector(".textarea");
      if (contentEditableElement) {
        const clipboardText = await navigator.clipboard.readText();
        contentEditableElement.focus(); // Focus contentEditable
        dispatch(paste(clipboardText)); // Dispatch paste action
      }
    } catch (error) {
      console.error("Failed to paste content:", error);
    }
  };

  const handleActivateFormatPainter = () => {
    dispatch(activateFormatPainter());
  };

  const handleCommand = (command) => {
    document.execCommand(command, false, null);
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
        <button
          className="ribbonbtn focusable"
          onClick={handleActivateFormatPainter}
        >
          <FontAwesomeIcon icon={faBrush} />
        </button>
        <div className="divider"></div>

        <select name="font-select" id="font-select" onChange={handleFontChange}>
          {fonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
        <select
          name="font-size-select"
          id="font-size-select"
          onChange={handleFontSizeChange}
        >
          {fontsize.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>

        <button
          className="ribbonbtn focusable"
          onClick={() => handleCommand("bold")}
        >
          <p style={{ fontWeight: "bold", color: "black" }}>B</p>
        </button>
        <button
          className="ribbonbtn focusable"
          style={{ color: "black" }}
          onClick={() => handleCommand("italic")}
        >
          <FontAwesomeIcon icon={faItalic} />
        </button>
        <button
          className="ribbonbtn focusable"
          style={{ color: "black" }}
          onClick={() => handleCommand("underline")}
        >
          <FontAwesomeIcon icon={faUnderline} />
        </button>
        <button className="ribbonbtn focusable" style={{ color: "black" }}>
          <FontAwesomeIcon
            icon={faStrikethrough}
            onClick={() => handleCommand("strikeThrough")}
          />
        </button>
        <FontColorSelect />
        <Highlighter />
        <button
          className="ribbonbtn focusable"
          style={{ color: "black" }}
          onClick={() => handleCommand("insertUnorderedList")}
        >
          <FontAwesomeIcon icon={faList} />
        </button>
        <button
          className="ribbonbtn focusable"
          style={{ color: "black" }}
          onClick={() => handleCommand("insertOrderedList")}
        >
          <FontAwesomeIcon icon={faListOl} />
        </button>
        <button
          className="ribbonbtn focusable"
          style={{ color: "black" }}
          onClick={() => handleCommand("indent")}
        >
          <FontAwesomeIcon icon={faIndent} />
        </button>
        <button
          className="ribbonbtn focusable"
          style={{ color: "black" }}
          onClick={() => handleCommand("outdent")}
        >
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
