import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { updateText } from "../../../features/homeSlice.js";
const TextArea = () => {
  const dispatch = useDispatch();
  // Retrieve clipboard value from Redux store
  // const clipboardValue = useSelector((state) => state.home.value.clipboard);
  const check = useSelector((state) => state.home.value.clickcheck);
  // const formatPainter = useSelector((state) => state.home.value.formatPainter);
  // Local state to track textarea content
  // const [text, setText] = useState("");

  const textareaRef = useRef(null);
  const { text, font } = useSelector((state) => state.home.value);

  const textareaStyle = {
    fontFamily: font, // Apply selected font
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.innerHTML = text; // Update the innerHTML of contentEditable
    }
  }, [check]);
  const handleChange = () => {
    if (textareaRef.current) {
      const updatedText = textareaRef.current.innerHTML; // Read content from contentEditable
      dispatch(updateText(updatedText)); // Dispatch the updated content to Redux
    }
  };

  return (
    <div>
      <div
        className="textarea"
        ref={textareaRef}
        value={text} // Controlled by local state
        onInput={() => {
          handleChange();
        }} // Allow user edits
        contentEditable="true"
        style={textareaStyle}
      />
    </div>
  );
};

export default TextArea;
