import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <div>
      <div className="home-ribbon">
        <button className="ribbonbtn">
          <FontAwesomeIcon icon={faClipboard} />
        </button>
      </div>
    </div>
  );
};

export default Home;
