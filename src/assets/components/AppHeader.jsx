import React from "react";
import Home from "./ribbons/Home";
const AppHeader = () => {
  return (
    <div>
      <header>
        <div className="headerContent">
          <p tabIndex="0">File</p>
          <p tabIndex="0">Home</p>
          <p tabIndex="0">Insert</p>
          <p tabIndex="0">Draw</p>
          <p tabIndex="0">History</p>
          <p tabIndex="0">Review</p>
          <p tabIndex="0">View</p>
          <p tabIndex="0">Help</p>
        </div>
      </header>
      <Home />
    </div>
  );
};

export default AppHeader;
