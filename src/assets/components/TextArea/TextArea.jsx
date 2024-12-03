import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
const TextArea = () => {
  // Retrieve clipboard value from Redux store
  const clipboardValue = useSelector((state) => state.home.value.clipboard);
  const check = useSelector((state) => state.home.value.clickcheck);

  // Local state to track textarea content
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  const font = useSelector((state) => state.home.value.font);
  const fontSize = useSelector((state) => state.home.value.fontSize);

  const textareaStyle = {
    fontFamily: font, // Apply selected font
    fontSize: `${fontSize}px`, // Apply selected font size
  };

  // Effect to append clipboard content to textarea whenever clipboardValue changes
  useEffect(() => {
    if (clipboardValue !== "") {
      // Insert the clipboard content at the cursor location
      if (textareaRef.current) {
        const cursorPosition = textareaRef.current.selectionStart;
        const textBeforeCursor = text.substring(0, cursorPosition);
        const textAfterCursor = text.substring(cursorPosition);

        // Update the text with the clipboard content
        const newText = textBeforeCursor + clipboardValue + textAfterCursor;

        setText(newText);

        // Move the cursor after the pasted content
        textareaRef.current.setSelectionRange(
          cursorPosition + clipboardValue.length,
          cursorPosition + clipboardValue.length
        );
      }
    }
  }, [check, clipboardValue]);

  // Handle user edits in the textarea
  const handleChange = (e) => {
    setText(e.target.value); // Update local state when the user edits the textarea
  };

  return (
    <div>
      <textarea
        ref={textareaRef}
        value={text} // Controlled by local state
        onChange={handleChange} // Allow user edits
        placeholder="Start typing here..."
        style={textareaStyle} // Apply selected font and font size
      />
    </div>
  );
};

export default TextArea;
