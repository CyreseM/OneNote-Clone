import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faLink,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import "./Insert.css";
import { useDispatch } from "react-redux";
import { insertImage } from "../../../../features/insertSlice";
const Insert = () => {
  const dispatch = useDispatch();
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(insertImage(reader.result));
        console.log(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="review-ribbon">
        <label htmlFor="image-upload" className="ribbonbtn">
          <FontAwesomeIcon icon={faImage} />
        </label>
        <input
          tabIndex={-1}
          id="image-upload"
          type="file"
          accept="image/png, image/gif, image/jpeg"
          name="imageupload"
          onChange={handleImageChange}
        />
        <button className="ribbonbtn">
          <FontAwesomeIcon icon={faLink} />
        </button>
        <div className="divider"></div>
        <label htmlFor="file-upload" className="fileAttachment">
          <FontAwesomeIcon icon={faPaperclip} /> File Attachment
        </label>
        <input
          id="file-upload"
          type="file"
          accept="application/pdf"
          name="fileupload"
        />
      </div>
    </div>
  );
};

export default Insert;
