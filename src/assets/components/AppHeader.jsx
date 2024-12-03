import { useState } from "react";
import Home from "./ribbons/Home/Home";
import Insert from "./ribbons/Insert/Insert";
import History from "./ribbons/History/History";
import Review from "./ribbons/Review/Review";
import View from "./ribbons/View/View";
const AppHeader = () => {
  const [activeTab, setActiveTab] = useState("");

  // Function to render the active component based on the tab
  const renderActiveTab = () => {
    switch (activeTab) {
      case "Home":
        return <Home />;
      case "Insert":
        return <Insert />;
      case "History":
        return <History />;
      case "Review":
        return <Review />;
      case "View":
        return <View />;
    }
  };

  return (
    <div>
      <header
        style={{
          boxShadow: `${activeTab ? " " : "rgba(0, 0, 0, 0.24) 0px 3px 8px"}`,
        }}
      >
        <div className="headerContent">
          {[
            "File",
            "Home",
            "Insert",
            "Draw",
            "History",
            "Review",
            "View",
            "Help",
          ].map((tab) => (
            <p
              key={tab}
              tabIndex="0"
              onClick={() => setActiveTab(tab)} // Set active tab on click
              className={`headerTab ${activeTab === tab ? "focus" : ""}`} // Add active tab class
            >
              {tab}
            </p>
          ))}
        </div>
      </header>
      {/* Render the active tab's component */}
      {renderActiveTab()}
    </div>
  );
};
export default AppHeader;
