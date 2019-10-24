import React from "react";
import "./App.css";
import Menu from "./Components/Menu";
import AccountSettings from "./Components/AccountSettings";
import PrivacySettings from "./Components/PrivacySettings";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="main-content">
        <AccountSettings />
        <PrivacySettings />
      </div>
    </div>
  );
}

export default App;
