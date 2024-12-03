import "./App.css";
import AppHeader from "./assets/components/AppHeader.jsx";
import TextArea from "./assets/components/TextArea/TextArea.jsx";
function App() {
  return (
    <div className="app">
      <AppHeader />
      <div className="area-container">
        <TextArea />
      </div>
    </div>
  );
}

export default App;
